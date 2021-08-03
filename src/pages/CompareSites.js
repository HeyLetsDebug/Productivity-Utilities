import ReactCompareImage from "react-compare-image";
import { useEffect, useState } from "react";
import { Row, Col, Form, Card, Container, Button } from "react-bootstrap";

export default function CompareSites() {
  // const [imageInputs, setImageInputs] = useState({
  //   imageInput1: "",
  //   imageInput2: ""
  // });

  // function handleFileUpload(e) {
  //   const value = URL.createObjectURL(e.target.files[0]);
  //   setImageInputs({
  //     ...imageInputs,
  //     [e.target.name]: value
  //   });
  // }

  return (
    <>
      <Container id="meta-editor" className="pt-5">
        <div className="text-center mb-5">
          <h1>Compare Sites Coming Soon</h1>
        </div>
        <Row>
          {/* <input
            type="file"
            accept="image/*"
            name="imageInput1"
            className="mt-2 btn btn-dark w-100"
            onChange={handleFileUpload}
          />
          <input
            type="file"
            accept="image/*"
            name="imageInput2"
            className="mt-2 btn btn-dark w-100"
            onChange={handleFileUpload}
          />
          <ReactCompareImage
            leftImage={imageInputs.imageInput1}
            rightImage={imageInputs.imageInput2}
          /> */}
        </Row>
      </Container>
      ;
    </>
  );
}
