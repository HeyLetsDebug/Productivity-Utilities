import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import ImageCropper from "./pages/ImageCropper";
import PrimaryHeader from "./Header.js";
import ImageOptimizer from "./pages/ImageOptimizer";
import PdfMerge from "./pages/PdfMerge";
import VideoPoster from "./pages/VideoPoster";
import PdfMetaEditor from "./pages/PdfMetaEditor";
import HomePage from "./pages/HomePage";
// import PdfOrganize from "./pages/PdfOrganizer";

export default function App() {
  return (
    <>
      <Router>
        <PrimaryHeader></PrimaryHeader>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/pdf-merger" component={PdfMerge}></Route>
        <Route path="/pdf-meta-editor" component={PdfMetaEditor}></Route>
        <Route path="/image-optimizer" component={ImageOptimizer}></Route>
        {/* <Route path="/image-cropper" component={ImageCropper}></Route> */}
        <Route path="/video-poster" component={VideoPoster}></Route>
        {/* <Route path="/pdf-organizer" component={PdfOrganize}></Route> */}
      </Router>
    </>
  );
}
