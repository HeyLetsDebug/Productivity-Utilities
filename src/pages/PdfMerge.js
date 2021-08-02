import "../styles/materialStyle.css";
import "../styles/pdfMerger.css";
// import "../styles/pdfMetaEdit.css";
import React, { useState, useEffect } from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { PDFDocument } from "pdf-lib";
// import { Document, Page, pdfjs } from "react-pdf";
import dummyPDF from "../img/dummy-pdf-placeholder.pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfMerge() {
  const [disable, setDisable] = useState(true);
  const [newPdfFileName, setNewPdfFileName] = useState("");
  const [listOfPDF, setListOfPDF] = useState([]);

  function revisedRandId() {
    return Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(2, 10);
  }

  function handlePDFSelection(e) {
    const filesToAdd = e.target.files;
    setListOfPDF([...listOfPDF, ...filesToAdd]);
    // for (var i = 0; i < e.target.files.length; i++) {
    //   const fileSize = parseInt(e.target.files[i].size, 10) / 1024;
    //   const newFilesize = Math.round(fileSize);
    // $('<li class="draggable ui-state-default"/>')
    //   .attr("id", revisedRandId())
    //   .appendTo($("#selectedFiles"));
    // $('<p class="pdf-name-li-listmerge"/>')
    //   .text(e.target.files[i].name)
    //   .appendTo($("#selectedFiles li:last"));
    // $('<a class="data-url-pdf"/>')
    //   .attr("id", URL.createObjectURL(e.target.files[i]))
    //   .appendTo($("#selectedFiles li:last"));
    // $('<span />').addClass('filesize').text(' (' + filesize + 'kb)').appendTo($('#selectedFiles li a:last'));
    // $('<span class="fa fa-trash pdf-name-li-listmerge-delete"/>').appendTo(
    //   $("#selectedFiles li:last")
    // );
    // }
  }
  useEffect(() => {
    console.log(listOfPDF);
  }, [listOfPDF]);

  const cursorPointer = {
    cursor: "pointer"
  };
  function readableBytes(bytes) {
    var i = Math.floor(Math.log(bytes) / Math.log(1024)),
      sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + " " + sizes[i];
  }
  return (
    <>
      <Container id="meta-editor" className="pt-5">
        <div className="text-center mb-5">
          <h1>PDF Merger</h1>
        </div>
        <Row
          id="merger-editor"
          className="d-flex flex-column justify-content-center align-items-center "
        >
          <Col>
            <input
              className="btn btn-dark w-100"
              type="file"
              accept="application/pdf"
              id="files"
              name="files"
              multiple
              onChange={handlePDFSelection}
            />
          </Col>
          <Col>
            <div id="pdf-merger-wrapper">
              <ul id="selectedFiles" className="p-0">
                {listOfPDF.map((listitem) => (
                  <li
                    key={listitem.name}
                    className="draggable ui-state-default"
                  >
                    {listitem.name} {readableBytes(listitem.size)}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col>
            <input
              disabled={disable}
              type="text"
              value={newPdfFileName}
              placeholder="Type the required name for PDF here..."
              id="pdf-name-input"
              onChange={(e) =>
                setNewPdfFileName((newPdfFileName) => e.target.value)
              }
            />
          </Col>
          <Col>
            <Button id="mergepdf-button" disabled={disable}>
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
