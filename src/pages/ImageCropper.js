import "../styles/cropper.css";
import React from "react";
import { useState, useRef } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function ImageCropper() {
  const cursorPointer = {
    cursor: "pointer"
  };
  return (
    <>
      <Container id="meta-editor" className="pt-5">
        <div className="text-center mb-5">
          <h1>Image Cropper Coming Soon</h1>
        </div>
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
