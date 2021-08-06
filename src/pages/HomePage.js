import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function HomePage() {
  const cursorPointer = {
    cursor: "pointer"
  };
  return (
    <>
      <Container className="pt-5 pb-5">
        <Row xs={1} md={3} className="g-4">
          <Col>
            <LinkContainer to="/pdf-merger" style={cursorPointer}>
              <Card>
                <Card.Body>
                  <Card.Title>PDF Merge</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Card.Link>Visit</Card.Link>
                </Card.Body>
              </Card>
            </LinkContainer>
          </Col>
          <Col>
            <LinkContainer to="/pdf-meta-editor" style={cursorPointer}>
              <Card>
                <Card.Body>
                  <Card.Title>PDF Meta Editor</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Card.Link>Visit</Card.Link>
                </Card.Body>
              </Card>
            </LinkContainer>
          </Col>
          <Col>
            <LinkContainer to="/image-optimizer" style={cursorPointer}>
              <Card>
                <Card.Body>
                  <Card.Title>Image Optimizer</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Card.Link>Visit</Card.Link>
                </Card.Body>
              </Card>
            </LinkContainer>
          </Col>
          <Col>
            <LinkContainer to="/image-cropper" style={cursorPointer}>
              <Card>
                <Card.Body>
                  <Card.Title>Image Cropper</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Card.Link>Visit</Card.Link>
                </Card.Body>
              </Card>
            </LinkContainer>
          </Col>
          <Col>
            <LinkContainer to="/video-poster" style={cursorPointer}>
              <Card>
                <Card.Body>
                  <Card.Title>Video Poster</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Card.Link>Visit</Card.Link>
                </Card.Body>
              </Card>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
}
