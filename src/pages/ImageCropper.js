import React, { Component } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class ImageCropper extends Component {
  render() {
    return (
      <>
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
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
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
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
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
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <LinkContainer to="/image-optimizer">
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
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
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
}
