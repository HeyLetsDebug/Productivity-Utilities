import "../styles/materialStyle.css";
import "../styles/pdfMetaEdit.css";
import PDFImgPlaceholder from "../img/pdf-placeholder.png";
import React, { useState, useEffect } from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { PDFDocument } from "pdf-lib";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfMetaEditor() {
  const [disable, setDisable] = useState(false);
  const [pdfObjectUrl, setPdfObjectUrl] = useState("");
  const [nameOfFile, setNameOfFile] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [addtitleInput, setAddtitleInput] = useState("No Title Found");
  //const [pageNumber, setPageNumber] = useState(1);

  const [additionalDetails, setAdditionalDetails] = useState({
    authorOfPdf: "No Details Found",
    subjectOfPdf: "No Details Found",
    creatorOfPdf: "No Details Found",
    creationDateOfPdf: "No Details Found",
    modificationDate: "No Details Found"
  });

  const cursorPointer = {
    cursor: "pointer"
  };
  // function onDocumentLoadSuccess({ numPages }) {
  //   setPageNumber(1);
  // }

  let thePdf = null;
  let scale = 1;
  function showPDF(pdf_url) {
    let someblobber = window.URL.createObjectURL(pdf_url);
    pdfjs.getDocument({ url: someblobber }).promise.then(function (pdf) {
      thePdf = pdf;
      const viewer = document.getElementById("show-first-page-wrapper");
      let styles = getComputedStyle(viewer),
        w = parseInt(styles.getPropertyValue("width"), 10),
        h = parseInt(styles.getPropertyValue("height"), 10);
      var canvas = document.createElement("canvas");
      canvas.className = "first-page-canvas";
      canvas.style.maxWidth = w - 0.03 * w + "px";
      canvas.style.maxHeight = h - 0.03 * h + "px";
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      viewer.innerHTML = "";
      viewer.appendChild(canvas);
      renderPage(1, canvas);
    });
  }
  function renderPage(pageNumber, canvas) {
    thePdf.getPage(pageNumber).then(function (page) {
      var viewport = page.getViewport({ scale: scale });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      page.render({
        canvasContext: canvas.getContext("2d"),
        viewport: viewport
      });
    });
  }
  function handlePDFChange(e) {
    const pdfFile = e.target.files[0];
    showPDF(pdfFile);
    setPdfObjectUrl((pdfObjectUrl) => URL.createObjectURL(pdfFile));

    setNameOfFile((nameOfFile) => e.target.files[0].name);
  }

  async function readDocumentMetadata(url) {
    const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
    var bytes = new Uint8Array(existingPdfBytes);
    const pdfDoc = await PDFDocument.load(bytes, {
      updateMetadata: false
    });

    if (pdfDoc.getTitle() !== undefined) {
      setAddtitleInput((addtitleInput) => pdfDoc.getTitle());
    } else {
      setAddtitleInput((addtitleInput) => "No Title Found");
    }

    setAdditionalDetails({
      ...additionalDetails,
      authorOfPdf: pdfDoc.getTitle(),
      subjectOfPdf: pdfDoc.getSubject(),
      creatorOfPdf: pdfDoc.getCreator(),
      creationDateOfPdf: pdfDoc.getCreationDate(),
      modificationDate: pdfDoc.getModificationDate()
    });

    const {
      authorOfPdf,
      subjectOfPdf,
      creatorOfPdf,
      creationDateOfPdf,
      modificationDate
    } = additionalDetails;
  }

  useEffect(() => {
    if (pdfObjectUrl !== "") {
      readDocumentMetadata(pdfObjectUrl);
      setDisable(false);
    }
  }, [pdfObjectUrl]);

  function handleModify() {
    editDocumentMetadata(pdfObjectUrl);
  }
  function handleRemoveMeta() {
    removeDocumentMetadata(pdfObjectUrl);
  }

  async function editDocumentMetadata(MeditPdf) {
    const existingPdfBytes = await fetch(MeditPdf).then((res) =>
      res.arrayBuffer()
    );

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.setTitle(titleInput);
    pdfDoc.setProducer("");
    pdfDoc.setCreator("");

    const pdfBytes = await pdfDoc.save();

    var blob = new Blob([pdfBytes], { type: "application/pdf" });
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = nameOfFile;
    link.click();
  }

  async function removeDocumentMetadata(RemMeditPdf) {
    const existingPdfBytes = await fetch(RemMeditPdf).then((res) =>
      res.arrayBuffer()
    );

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.setTitle("");
    pdfDoc.setProducer("");
    pdfDoc.setCreator("");

    const pdfBytes = await pdfDoc.save();

    var blob = new Blob([pdfBytes], { type: "application/pdf" });
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = nameOfFile;
    link.click();
  }

  return (
    <>
      <section className="jumbosTitle pt-5 pb-5">
        <Container>
          <Row>
            <Col>
              <h1 className="mainTitle pb-2">PDF Meta Data Editor</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <Container id="meta-editor" className="pt-5">
        {/* <div className="text-center mb-5">
          <h1>PDF Meta Data Editor</h1>
        </div> */}
        <Row>
          <Col>
            {/* <Document file={pdfObjectUrl} onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                pageNumber={pageNumber}
                scale={0.4}
                renderAnnotationLayer={false}
              />
            </Document> */}
            <div id="show-first-page-wrapper">
              <img src={PDFImgPlaceholder} alt="PDF Placeholder Icon" />
            </div>
          </Col>
          <Col>
            <Row>
              <Col>
                <input
                  className="change-title-input btn btn-dark w-100"
                  type="file"
                  accept="application/pdf"
                  id="file-here"
                  onChange={handlePDFChange}
                />
              </Col>
            </Row>
            <Row className="d-flex flex-column justify-content-center align-items-center mt-4 mb-4">
              <Col>
                <p className="w-100">
                  <strong>Current PDF Title :</strong> {addtitleInput}
                </p>
              </Col>
              <Col>
                <input
                  className="change-title-input w-100"
                  type="text"
                  id="title-of-pdf"
                  value={titleInput}
                  onChange={(e) => setTitleInput(e.target.value)}
                  placeholder="Set new title for the PDF here..."
                />
              </Col>
            </Row>
            <Row className="modify-button-wrapper">
              <Col>
                <Button
                  id="modify-button"
                  disabled={disable}
                  onClick={handleModify}
                >
                  Modify & Download
                </Button>
              </Col>
              <Col>
                <Button
                  id="remove-meta-button"
                  disabled={disable}
                  onClick={handleRemoveMeta}
                >
                  Remove Title & Download
                </Button>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="border border-info border-2 rounded pt-3">
                <h5 className="mb-3">Additional Detail About PDF</h5>
                <p className="w-100">
                  <strong>Author :</strong>{" "}
                  {additionalDetails.authorOfPdf !== undefined
                    ? additionalDetails.authorOfPdf
                    : "No Value Found"}
                </p>
                <p className="w-100">
                  <strong>Subject :</strong>{" "}
                  {additionalDetails.subjectOfPdf !== undefined
                    ? additionalDetails.subjectOfPdf
                    : "No Value Found"}
                </p>
                <p className="w-100">
                  <strong>Creator :</strong>{" "}
                  {additionalDetails.creatorOfPdf !== undefined
                    ? additionalDetails.creatorOfPdf
                    : "No Value Found"}
                </p>
                <p className="w-100">
                  <strong>Creation Date :</strong>{" "}
                  {additionalDetails.creationDateOfPdf !== undefined
                    ? additionalDetails.creationDateOfPdf
                    : "No Value Found"}
                </p>
                <p className="w-100">
                  <strong>Modification Date :</strong>{" "}
                  {additionalDetails.modificationDate !== undefined
                    ? additionalDetails.modificationDate
                    : "No Value Found"}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="pt-5 pb-5">
        <Row xs={1} md={4} className="g-4">
          <Col>
            <Card>
              <Card.Body>
                <LinkContainer to="/pdf-merger" style={cursorPointer}>
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
          {/* <Col>
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
          </Col> */}
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
