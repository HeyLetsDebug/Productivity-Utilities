import "../styles/materialStyle.css";
import React from "react";
import { useState, useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import imageCompression from "browser-image-compression";
import uploadPlaceholder from "../img/file-upload-placeholder.png";
import placeHolderImage from "../img/video-poster-placeholder.jpg";

export default function ImageOptimizer() {
  const imageInput = React.createRef();
  const [compressedLink, setCompressedLink] = useState(placeHolderImage);
  const [originalImage, setOriginalImage] = useState("");
  const [originalLink, setOriginalLink] = useState("");
  const [clicked, setClicked] = useState(false);
  const [uploadImage, setUploadImage] = useState(false);
  const [outputFileName, setOutputFileName] = useState("");
  const [selectedOptions, setSelectedOptions] = useState("0.29");
  const [imageMBSize, setImageMBSize] = useState("");

  const cursorPointer = {
    cursor: "pointer"
  };

  function handle(e) {
    const imageFile = e.target.files[0];
    setOriginalImage(imageFile);
    setOriginalLink((originalLink) => URL.createObjectURL(imageFile));
    setOutputFileName((outputFileName) => imageFile.name);
    setUploadImage(true);
  }

  function click(e) {
    e.preventDefault();

    const options = {
      maxSizeMB: imageMBSize,
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

  useEffect(() => {
    setImageMBSize((imageMBSize) => selectedOptions);
  }, [selectedOptions]);

  return (
    <>
      <Container className="pt-5">
        <div className="text-center mb-5">
          <h1>Image Compressor</h1>
        </div>

        <Row className="mt-5">
          <Col xl="4" lg="4" md="12" sm="12">
            {uploadImage ? (
              <Card.Img
                className="uploadImager"
                style={cursorPointer}
                variant="top"
                src={originalLink}
                onClick={() => imageInput.current.click()}
              ></Card.Img>
            ) : (
              <Card.Img
                className="uploadImager"
                style={cursorPointer}
                variant="top"
                src={uploadPlaceholder}
                onClick={() => imageInput.current.click()}
              ></Card.Img>
            )}
            <div className="d-flex justify-content-center">
              <input
                type="file"
                ref={imageInput}
                accept="image/*"
                className="mt-2 btn btn-dark w-100"
                onChange={handle}
              />
            </div>
          </Col>
          <Col
            xl="4"
            lg="4"
            md="12"
            sm="12"
            className="mt-5 mb-5 d-flex flex-column justify-content-center align-items-center "
          >
            {outputFileName ? (
              <>
                <Col className="w-100 d-flex flex-column justify-content-center align-items-center ">
                  <p className="w-75">
                    Select the quality of image for compressing{" "}
                    <strong>(default 300 KB)</strong>
                  </p>
                  <select
                    name="image-size-selector"
                    className="w-75"
                    value={selectedOptions}
                    onChange={(e) => setSelectedOptions(e.target.value)}
                  >
                    <option value="0.29">300 KB</option>
                    <option value="0.39">400 KB</option>
                    <option value="0.49">500 kB</option>
                    <option value="0.79">800 KB</option>
                    <option value="0.9">1 MB</option>
                    <option value="1.9">2 MB</option>
                  </select>
                </Col>
                <Col className="w-100 d-flex justify-content-center align-items-center">
                  <button
                    type="button"
                    className="w-75 btn btn-dark"
                    onClick={click}
                  >
                    Compress
                  </button>
                </Col>
              </>
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
                <LinkContainer to="/image-cropper" style={cursorPointer}>
                  <Card.Title>Image Cropper</Card.Title>
                </LinkContainer>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <LinkContainer to="/image-cropper" style={cursorPointer}>
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
