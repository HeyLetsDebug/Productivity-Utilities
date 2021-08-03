import { StrictMode } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import PrimaryHeader from "./Header.js";
import ImageCropper from "./pages/ImageCropper";
import ImageOptimizer from "./pages/ImageOptimizer";
import PdfMerge from "./pages/PdfMerge";
import VideoPoster from "./pages/VideoPoster";
import PdfMetaEditor from "./pages/PdfMetaEditor";
import CompareSites from "./pages/CompareSites";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <PrimaryHeader></PrimaryHeader>
      <Route exact path="/" component={App}></Route>
      <Route path="/pdf-merger" component={PdfMerge}></Route>
      <Route path="/pdf-meta-editor" component={PdfMetaEditor}></Route>
      <Route path="/image-optimizer" component={ImageOptimizer}></Route>
      <Route path="/image-cropper" component={ImageCropper}></Route>
      <Route path="/video-poster" component={VideoPoster}></Route>
      <Route path="/compare" component={CompareSites}></Route>
    </Router>
  </StrictMode>,
  rootElement
);
