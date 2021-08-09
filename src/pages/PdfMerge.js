import "../styles/materialStyle.css";
import "../styles/pdfMerger.css";
// import "../styles/pdfMetaEdit.css";
import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { PDFDocument } from "pdf-lib";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { AiOutlineDelete } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfMerge() {
  const cursorPointer = {
    cursor: "pointer"
  };
  const mergerButton = useRef(null);
  const fileInput = useRef();
  const [disable, setDisable] = useState(true);
  const [newPdfFileName, setNewPdfFileName] = useState("");
  const [listOfPDF, setListOfPDF] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [filesToMerge, setFilesToMerge] = useState([]);

  // storing all input PDF in state
  function handlePDFSelection(e) {
    e.preventDefault();
    const filesToAdd = e.target.files;
    setListOfPDF([...listOfPDF, ...filesToAdd]);
  }

  // converting file sizes in to readable format
  function readableBytes(bytes) {
    var i = Math.floor(Math.log(bytes) / Math.log(1024)),
      sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + " " + sizes[i];
  }

  // handling on drag end event
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCharacters(items);
  }

  function handleDeleteElement(e) {
    const deleteindex = e.target.getAttribute("data-delete");
    const items = Array.from(characters);
    if (deleteindex > -1) {
      items.splice(deleteindex, 1);
      setCharacters(items);
    }
  }

  // handling enter key in input field
  function handleKeyPress(e) {
    if (e.charCode === 13) {
      if (!e.target.value.match(/\S/)) {
        alert("Please enter a valid PDF title to proceed");
      } else {
        mergerButton.current?.click();
      }
    }
  }
  function handlemergePdfs() {
    const listofFiles = [];
    const els = document.getElementsByClassName("indFile");
    for (var i = 0; i < els.length; i++) {
      listofFiles.push(els[i].getAttribute("data-blober"));
    }
    setFilesToMerge([...filesToMerge, ...listofFiles]);
  }

  useEffect(() => {
    if (listOfPDF.length !== 0) {
      setCharacters(listOfPDF);
    }
  }, [listOfPDF]);

  useEffect(() => {
    if (characters.length === 0) {
      fileInput.current.value = "";
    } else {
      setDisable(false);
    }
  }, [characters]);

  useEffect(() => {
    if (filesToMerge.length !== 0) {
      mergePdfs(filesToMerge);
    }
  }, [filesToMerge]);

  async function mergePdfs(pdfsToMerge) {
    try {
      const mergedPdf = await PDFDocument.create();

      for (const pdfCopyDoc of pdfsToMerge) {
        const existingPdfBytes = await fetch(pdfCopyDoc).then((res) =>
          res.arrayBuffer()
        );
        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        const copiedPages = await mergedPdf.copyPages(
          pdfDoc,
          pdfDoc.getPageIndices()
        );
        copiedPages.forEach((page) => {
          mergedPdf.addPage(page);
        });
      }

      // if (save_pdf_name.value == "") {
      //   name_of_pdf = "mergedFile";
      // } else {
      //   name_of_pdf = save_pdf_name.value;
      // }

      mergedPdf.setProducer("");
      mergedPdf.setCreator("");
      const mergedPdfFile = await mergedPdf.save();

      var blob = new Blob([mergedPdfFile], { type: "application/pdf" });
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = newPdfFileName;
      link.click();
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <>
      <Container id="meta-editor" className="pt-5">
        <div className="text-center mb-5">
          <h1>PDF Merger</h1>
        </div>
        <Row
          id="merger-editor"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <Col>
            <input
              className="btn btn-dark w-100"
              type="file"
              accept="application/pdf"
              id="files"
              name="files"
              multiple
              ref={fileInput}
              onChange={handlePDFSelection}
            />
          </Col>
          <Col>
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="characters" direction="horizontal">
                {(provided) => (
                  <div id="pdf-merger-wrapper" className="pt-3 pb-3">
                    <Row
                      id="selectedFiles"
                      className="p-4 m-0"
                      {...provided.dropableprops}
                      ref={provided.innerRef}
                    >
                      {characters.map((listitem, index) => (
                        <Draggable
                          key={listitem.name}
                          draggableId={listitem.name}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <Col
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              className="indFile p-2 mb-3 rounded-3"
                              xl="3"
                              lg="3"
                              md="3"
                              sm="12"
                              xs="12"
                              data-blober={URL.createObjectURL(listitem)}
                            >
                              <p>
                                <span>{index + 1}.</span> {listitem.name}
                              </p>
                              <span className="fileSizer">
                                File Size: {readableBytes(listitem.size)}
                              </span>
                              <span
                                className="pdfDeleter"
                                data-delete={index}
                                onClick={handleDeleteElement}
                              >
                                Delete <AiOutlineDelete data-delete={index} />
                              </span>
                            </Col>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </Row>
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </Col>
          <Col>
            <input
              disabled={disable}
              type="text"
              value={newPdfFileName}
              placeholder="Type the required name for PDF here..."
              id="pdf-name-input"
              onKeyPress={handleKeyPress}
              onChange={(e) =>
                setNewPdfFileName((newPdfFileName) => e.target.value)
              }
            />
          </Col>
          <Col>
            <Button
              id="mergepdf-button"
              ref={mergerButton}
              onClick={handlemergePdfs}
              disabled={disable}
            >
              Merge PDF
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="pt-5 pb-5">
        <Row xs={1} md={4} className="g-4">
          <Col>
            <Card>
              <Card.Body>
                <LinkContainer to="/pdf-meta-editor" style={cursorPointer}>
                  <Card.Title>PDF Meta Editor</Card.Title>
                </LinkContainer>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <LinkContainer to="/pdf-meta-editor">
                  <Card.Link>Visit</Card.Link>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <LinkContainer to="/image-optimizer" style={cursorPointer}>
                  <Card.Title>Image Optimizer</Card.Title>
                </LinkContainer>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <LinkContainer to="/image-optimizer">
                  <Card.Link>Visit</Card.Link>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <LinkContainer to="/image-cropper" style={cursorPointer}>
                  <Card.Title>Image Cropper</Card.Title>
                </LinkContainer>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <LinkContainer to="/image-cropper">
                  <Card.Link>Visit</Card.Link>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <LinkContainer to="/video-poster" style={cursorPointer}>
                  <Card.Title>Video Poster</Card.Title>
                </LinkContainer>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <LinkContainer to="/video-poster">
                  <Card.Link>Visit</Card.Link>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
