import React from "react";
import { useState, useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import imageCompression from "browser-image-compression";
import uploadPlaceholder from "../img/file-upload-placeholder.png";
import placeHolderImage from "../img/video-poster-placeholder.jpg";

export default function ImageOptimizer() {
  const [compressedLink, setCompressedLink] = useState(placeHolderImage);
  const [originalImage, setOriginalImage] = useState("");
  const [originalLink, setOriginalLink] = useState("");
  const [clicked, setClicked] = useState(false);
  const [uploadImage, setUploadImage] = useState(false);
  const [outputFileName, setOutputFileName] = useState("");

  function handle(e) {
    const imageFile = e.target.files[0];
    setOriginalImage(imageFile);
    setOriginalLink(URL.createObjectURL(imageFile));
    setOutputFileName((outputFileName) => imageFile.name);
    setUploadImage(true);
  }

  function click(e) {
    e.preventDefault();

    const options = {
      maxSizeMB: 0.3,
      useWebWorker: true
    };

    if (options.maxSizeMB >= originalImage.size / 1024) {
      alert("Bring a bigger image buddy :>");
      return 0;
    }

    let output;
    imageCompression(originalImage, options).then((x) => {
      output = x;

      const downloadLink = URL.createObjectURL(output);

      setCompressedLink((compressedLink) => downloadLink);
    });

    setClicked(true);
    return 1;
  }

  return (
    <>
      <Container className="pt-5">
        <div>
          <div className="text-center">
            <h1>React Image Compressor</h1>
          </div>

          <Row className="mt-5">
            <Col xl="4" lg="4" md="12" sm="12">
              {uploadImage ? (
                <Card.Img
                  className="ht"
                  variant="top"
                  src={originalLink}
                ></Card.Img>
              ) : (
                <Card.Img
                  className="ht"
                  variant="top"
                  src={uploadPlaceholder}
                ></Card.Img>
              )}
              <div className="d-flex justify-content-center">
                <input
                  type="file"
                  accept="image/*"
                  className="mt-2 btn btn-dark"
                  onChange={handle}
                />
              </div>
            </Col>
            <Col
              xl="4"
              lg="4"
              md="12"
              sm="12"
              className="mt-5 mb-5 d-flex justify-content-center align-items-baseline"
            >
              {outputFileName ? (
                <button type="button" className=" btn btn-dark" onClick={click}>
                  Compress
                </button>
              ) : (
                <></>
              )}
            </Col>

            <Col xl="4" lg="4" md="12" sm="12" className="mt-3">
              <Card.Img variant="top" src={compressedLink}></Card.Img>
              {clicked ? (
                <div className="d-flex justify-content-center">
                  <a
                    href={compressedLink}
                    download={outputFileName}
                    className="mt-2 btn btn-dark w-75"
                  >
                    Download
                  </a>
                </div>
              ) : (
                <></>
              )}
            </Col>
          </Row>
        </div>
      </Container>

      <Container className="pt-5 pb-5">
        <Row xs={1} md={4} className="g-4">
          <Col>
            <Card>
              <LinkContainer to="/pdf-merger">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/180x90"
                />
              </LinkContainer>
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
              <LinkContainer to="/pdf-meta-editor">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/180x90"
                />
              </LinkContainer>
              <Card.Body>
                <LinkContainer to="/pdf-meta-editor">
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
              <LinkContainer to="/image-cropper">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/180x90"
                />
              </LinkContainer>
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
              <LinkContainer to="/video-poster">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/180x90"
                />
              </LinkContainer>
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
