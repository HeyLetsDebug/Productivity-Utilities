import React from "react";
import "./styles/headerMain.css";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import brandLogo from "./img/moc-brand-logo.png";

function PrimaryHeader() {
  let history = useHistory();
  const heighter = {
    maxHeight: "60px"
  };
  return (
    <>
      <Navbar bg="" variant="" sticky="top" className="headerShadow">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                alt="Web Content Tool Kit"
                //src={require("./img/ab-decodes-branding.png")}
                src={brandLogo}
                style={heighter}
                className="d-inline-block align-top brandLogowct"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" activeKey="/">
              <LinkContainer to="/" className="headerLinksMain">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/pdf-merger" className="headerLinksMain">
                <Nav.Link>PDF Merge</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/pdf-meta-editor" className="headerLinksMain">
                <Nav.Link>PDF Meta Editor</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/image-optimizer" className="headerLinksMain">
                <Nav.Link>Image Optimizer</Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to="/image-cropper" onClick={handleClick}
                className="headerLinksMain">
                <Nav.Link>Image Cropper</Nav.Link>
              </LinkContainer> */}
              <LinkContainer to="/video-poster" className="headerLinksMain">
                <Nav.Link>Video Poster</Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to="/pdf-organizer" className="headerLinksMain">
                <Nav.Link>PDF Organizer</Nav.Link>
              </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default PrimaryHeader;
