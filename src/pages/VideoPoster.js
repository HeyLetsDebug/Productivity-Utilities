import {
  Row,
  Col,
  Form,
  Card,
  Container,
  Button,
  Image
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ReactPlayer from "react-player";
import "../styles/videograbber.css";
import { useState } from "react";
import placeHolderImage from "../img/video-poster-placeholder.jpg";

export default function VideoPoster() {
  const [videoURL, setvideoURL] = useState("");
  const [addtoVideoSrc, setaddtoVideoSrc] = useState("#");
  // const inputEl = useRef(null);
  function handleKeyPress(e) {
    if (e.charCode === 13) {
      if (Object.keys(videoURL).length === 0) {
        alert("Please provide a valid URL to proceed");
      } else {
        if (videoURL.includes("videos.gskstatic")) {
          setaddtoVideoSrc((addtoVideoSrc) => videoURL);
        } else {
          alert("Please provide a valid URL to proceed");
        }
      }
    }
  }

  // sets the id for video component once the video is ready
  // const onPlayerReady = () => {
  //   const videoInstance = inputEl.current.getInternalPlayer();
  //   //videoInstance.setAttribute("id", "videoMain");
  //   videoInstance.setAttribute("crossOrigin", "anonymous");
  //   console.log(videoInstance);
  // };

  // removes dissabled class once the video buffering has ended
  const runOnPlayerBufferEnd = () => {
    document.getElementById("snapbutton").classList.remove("dissabled-buttons");
  };

  function videoSnapper() {
    let dataUI, w, h, ratio;

    var video = document.getElementById("videoMain");
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    ratio = video.videoWidth / video.videoHeight;
    w = video.videoWidth - 100;
    h = parseInt(w / ratio, 10);
    canvas.width = w;
    canvas.height = h;

    context.fillRect(0, 0, w, h);
    context.drawImage(video, 0, 0, w, h);

    dataUI = canvas.toDataURL("image/jpg");

    // alert(dataUI);
    document.querySelector(".canvas__mirror").src = dataUI;
    document
      .getElementById("downloadbtn")
      .classList.remove("dissabled-buttons");
  }

  function handleDownload() {
    const videoname = addtoVideoSrc;
    var last = videoname
      .substring(videoname.lastIndexOf("/") + 1, videoname.length)
      .split(".mp4")[0];
    const link = document.createElement("a");
    link.href = document.querySelector(".canvas__mirror").src;
    link.setAttribute("download", last + "-video-poster.jpg");
    document.getElementById("topbar").appendChild(link);
    link.click();
    document.getElementById("topbar").removeChild(link);
  }

  return (
    <>
      <Container className="pt-5">
        <Row className="d-flex justify-content-around">
          <Col xs md="10" lg="8">
            <Row id="topbar">
              <Form.Group className="mb-3">
                <Form.Label>Add Video URL</Form.Label>
                <Form.Control
                  // ref={this.input}
                  onKeyPress={handleKeyPress}
                  value={videoURL}
                  onChange={(e) => setvideoURL(e.target.value)}
                  id="urlForVideo"
                  placeholder="Paste your URL here and press enter.."
                  type="text"
                />
              </Form.Group>
            </Row>
            <Row xs={1} md={2} className="d-flex justify-content-center">
              <Col xs lg="4" className="d-flex justify-content-center pt-3">
                <Button
                  id="snapbutton"
                  className="dissabled-buttons"
                  onClick={videoSnapper}
                >
                  Snap Photo
                </Button>
              </Col>
              <Col xs lg="4" className="d-flex justify-content-center pt-3">
                <Button
                  id="downloadbtn"
                  className="dissabled-buttons"
                  onClick={handleDownload}
                >
                  Download Button
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="pt-3">
            <div className="player-wrapper">
              <ReactPlayer
                // ref={inputEl}
                id="video-component"
                muted={true}
                className="react-player"
                controls
                width="100%"
                height="100%"
                autoPlay={true}
                onBufferEnd={runOnPlayerBufferEnd}
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload",
                      crossOrigin: "Anonymous",
                      id: "videoMain"
                    }
                  }
                }}
                //url="https://videos.gskstatic.com/pharma/GSKpro/Ireland/MP4/vilanterol-molecule-design-story-today-tomorrow-trelegy.mp4"
                url={addtoVideoSrc}
              />
            </div>
          </Col>

          <Col className="pt-3">
            <canvas id="canvas"></canvas>
            <Image
              crossOrigin="Anonymous"
              id="mirror"
              //src={require("../img/video-poster-placeholder.jpg")}
              src={placeHolderImage}
              rounded
              className="canvas__mirror"
            />
          </Col>
        </Row>
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
              <LinkContainer to="/image-optimizer">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/180x90"
                />
              </LinkContainer>
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
        </Row>
      </Container>
    </>
  );
}
