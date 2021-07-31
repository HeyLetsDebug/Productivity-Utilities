import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { PDFDocument } from "pdf-lib";
// import { Document, Page, pdfjs } from "react-pdf";
import placeHolderImage from "../img/video-poster-placeholder.jpg";

export default function PdfMetaEditor() {
  const [pdfObjectUrl, setPdfObjectUrl] = useState("");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const cursorPointer = {
    cursor: "pointer"
  };

  function handlePDFChange(e) {
    const pdfFile = e.target.files[0];

    const mime_types = ["application/pdf"];

    if (mime_types.indexOf(pdfFile.type) === -1) {
      alert("Error : Incorrect file type");
      return;
    }

    setPdfObjectUrl((pdfObjectUrl) => URL.createObjectURL(pdfFile));

    // console.log(e.target.files.files.length);

    // for (var i = 0; i < e.target.files.length; i++) {
    //   listofFiles = [];
    //   nameOfFile = [];
    //   nameOfFile = e.target.files[i].name;
    //   listofFiles.push(URL.createObjectURL(e.target.files[i]));
    // }
  }

  useEffect(() => {
    console.log(pdfObjectUrl);
  }, [pdfObjectUrl]);
  return (
    <>
      <Container id="meta-editor" className="pt-5">
        <div className="text-center">
          <h1>PDF Meta Data Editor</h1>
        </div>
        <Row>
          <Col>
            {/* <Document file={pdfObjectUrl} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p> */}
          </Col>
          <Col>
            <input
              className="change-title-input"
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
              placeholder="Wait till title of PDF shows here..."
            />
            <div className="modify-button-wrapper">
              <Button id="modify-button" disabled>
                Modify & Save Title
              </Button>
              <Button id="remove-meta-button" disabled>
                Remove Title
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
