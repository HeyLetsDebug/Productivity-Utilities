import React, { Component } from "react";
import { useState } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import imageCompression from "browser-image-compression";

export default function ImageOptimizer() {
  const [compressedLink, setCompressedLink] = useState(
    "https://testersdock.com/wp-content/uploads/2017/09/file-upload-1280x640.png"
  );
  const [originalImage, setOriginalImage] = useState("");
  const [originalLink, setOriginalLink] = useState("");
  const [clicked, setClicked] = useState(false);
  const [uploadImage, setUploadImage] = useState(false);
  const [outputFileName, setOutputFileName] = useState("");

  function handle(e) {
    const imageFile = e.target.files[0];
    setOriginalImage(URL.createObjectURL(imageFile));
    setOriginalLink(imageFile);
    setOutputFileName(imageFile.name);
    setUploadImage(true);
  }

  // function changeValue (e) {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

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
      // this.setState({
      //   compressedLink: downloadLink
      // });

      setCompressedLink(downloadLink);
    });

    setClicked(true);
    return 1;
  }

  return (
    <>
      <div className="m-5">
        <div className="text-light text-center">
          <h1>React Image Compressor</h1>
        </div>

        <div className="row mt-5">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
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
                src="https://testersdock.com/wp-content/uploads/2017/09/file-upload-1280x640.png"
              ></Card.Img>
            )}
            <div className="d-flex justify-content-center">
              <input
                type="file"
                accept="image/*"
                className="mt-2 btn btn-dark w-75"
                onChange={handle}
              />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 mb-5 mt-5 col-sm-12 d-flex justify-content-center align-items-baseline">
            <br />
            {outputFileName ? (
              <button type="button" className=" btn btn-dark" onClick={click}>
                Compress
              </button>
            ) : (
              <></>
            )}
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-3">
            <Card.Img variant="top" src={compressedLink}></Card.Img>
            {clicked ? (
              <div className="d-flex justify-content-center">
                <a
                  href={setCompressedLink}
                  download={outputFileName}
                  className="mt-2 btn btn-dark w-75"
                >
                  Download
                </a>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

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
