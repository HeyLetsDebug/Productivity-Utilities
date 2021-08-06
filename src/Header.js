import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import brandLogo from "./img/moc-brand-logo.png";

function PrimaryHeader() {
  let history = useHistory();
  const heighter = {
    maxHeight: "60px"
  };
  function handleClick(e) {
    history.push(e.target.href);
  }
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                alt=""
                //src={require("./img/ab-decodes-branding.png")}
                src={brandLogo}
                style={heighter}
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/" onClick={handleClick}>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/pdf-merger" onClick={handleClick}>
                <Nav.Link>PDF Merge</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/pdf-meta-editor" onClick={handleClick}>
                <Nav.Link>PDF Meta Editor</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/image-optimizer" onClick={handleClick}>
                <Nav.Link>Image Optimizer</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/image-cropper" onClick={handleClick}>
                <Nav.Link>Image Cropper</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/video-poster" onClick={handleClick}>
                <Nav.Link>Video Poster</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/compare" onClick={handleClick}>
                <Nav.Link>Compare Sites</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default PrimaryHeader;
