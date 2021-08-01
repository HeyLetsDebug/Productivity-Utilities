import "../styles/pdfMetaEdit.css";
import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { mergeIntoTypedArray, PDFDocument } from "pdf-lib";
import { Document, Page, pdfjs } from "react-pdf";
import dummyPDF from "../img/dummy-pdf-placeholder.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfMetaEditor() {
  const [disable, setDisable] = useState(false);
  const [pdfObjectUrl, setPdfObjectUrl] = useState(dummyPDF);
  const [nameOfFile, setNameOfFile] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [addtitleInput, setAddtitleInput] = useState("No Title Found");

  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setPageNumber(1);
  }

  function handlePDFChange(e) {
    const pdfFile = e.target.files[0];

    setPdfObjectUrl((pdfObjectUrl) => URL.createObjectURL(pdfFile));

    setNameOfFile((nameOfFile) => e.target.files[0].name);
  }

  useEffect(() => {
    readDocumentMetadata(pdfObjectUrl);
    setDisable(false);
  }, [pdfObjectUrl]);

  useEffect(() => {
    console.log(addtitleInput);
  }, [addtitleInput]);

  async function readDocumentMetadata(url) {
    //const mergedPdf = await PDFDocument.create();
    const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
    var bytes = new Uint8Array(existingPdfBytes);
    const pdfDoc = await PDFDocument.load(bytes, {
      updateMetadata: false
    });

    // setAddtitleInput((addtitleInput) => pdfDoc.getTitle());

    if (pdfDoc.getTitle() !== undefined) {
      setAddtitleInput((addtitleInput) => pdfDoc.getTitle());
    } else {
      setAddtitleInput((addtitleInput) => "No Title Found");
    }
  }

  function handleModify() {
    editDocumentMetadata(pdfObjectUrl);
  }

  async function editDocumentMetadata(MeditPdf) {
    // console.log(MeditPdf);
    //const pdfDoc = await PDFDocument.create();
    const existingPdfBytes = await fetch(MeditPdf).then((res) =>
      res.arrayBuffer()
    );
    // var bytes = new Uint8Array(existingPdfBytes);
    console.log(existingPdfBytes);

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.setTitle(titleInput);
    pdfDoc.setProducer("");
    pdfDoc.setCreator("");

    const pdfBytes = await pdfDoc.save();

    console.log(pdfBytes);
    var blob = new Blob([pdfBytes], { type: "application/pdf" });
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "myFileName.pdf";
    link.click();
    //downloadFile(new Blob(pdfBytes, {type: "application/pdf"}), nameOfFile);

    //download(pdfBytes, nameOfFile, "application/pdf");
    //saveAs(pdfBytes, nameOfFile, {type: "application/pdf"});
  }

  return (
    <>
      <Container id="meta-editor" className="pt-5">
        <div className="text-center">
          <h1>PDF Meta Data Editor</h1>
        </div>
        <Row>
          <Col className="d-flex justify-content-center">
            <Document
              file={pdfObjectUrl}
              options={{ workerSrc: "/pdf.worker.js" }}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page
                pageNumber={pageNumber}
                scale={0.3}
                renderAnnotationLayer={false}
              />
            </Document>
          </Col>
          <Col>
            <p>Current PDF Title : {addtitleInput}</p>
            <input
              className="change-title-input mt-2 btn btn-dark w-100"
              type="file"
              accept="application/pdf"
              id="file-here"
              onChange={handlePDFChange}
              placeholder="Paste dam content path here.."
            />
            <div className="loadPDF-button-wrapper"></div>
            <input
              className="change-title-input"
              type="text"
              id="title-of-pdf"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
              placeholder="Wait till title of PDF shows here..."
            />
            <div className="modify-button-wrapper">
              <Button
                id="modify-button"
                disabled={disable}
                onClick={handleModify}
              >
                Modify & Download
              </Button>
              <Button id="remove-meta-button" disabled={disable}>
                Remove Title & Download
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="pt-5 pb-5">
        <Row xs={1} md={4} className="g-4">
          <Col>
            <Card>
              <Card.Body>
                <LinkContainer to="/pdf-merger">
                  <Card.Title>PDF Merge</Card.Title>
                </LinkContainer>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <LinkContainer to="/pdf-merger">
                  <Card.Link>Visit</Card.Link>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <LinkContainer to="/image-optimizer">
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
                <LinkContainer to="/image-cropper">
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
                <LinkContainer to="/video-poster">
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
