import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ImageCropper from "./pages/ImageCropper";
import ImageOptimizer from "./pages/ImageOptimizer";
import PdfMerge from "./pages/PdfMerge";
import VideoPoster from "./pages/VideoPoster";
import PdfMetaEditor from "./pages/PdfMetaEditor";
import CompareSites from "./pages/CompareSites";
import PrimaryHeader from "./Header.js";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Router>
      <PrimaryHeader></PrimaryHeader>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/pdf-merger" component={PdfMerge}></Route>
      <Route path="/pdf-meta-editor" component={PdfMetaEditor}></Route>
      <Route path="/image-optimizer" component={ImageOptimizer}></Route>
      <Route path="/image-cropper" component={ImageCropper}></Route>
      <Route path="/video-poster" component={VideoPoster}></Route>
      <Route path="/compare" component={CompareSites}></Route>
    </Router>
  );
}

// import React, { useEffect, useRef, useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import Firebase from "../fireBaseConfig";
// import PrimaryHeader from "../Header.js";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import ImageCropper from "../pages/ImageCropper";
// import ImageOptimizer from "../pages/ImageOptimizer";
// import PdfMerge from "../pages/PdfMerge";
// import VideoPoster from "../pages/VideoPoster";
// import PdfMetaEditor from "../pages/PdfMetaEditor";
// import App from "../App";
// // import Login from "./Login";

// export default function app() {
//   const [user, setUser] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [hasAccount, setHasAccount] = useState(false);

//   const clearInputs = () => {
//     setEmail("");
//     setPassword("");
//   };
//   const clearErrors = () => {
//     setEmailError("");
//     setPasswordError("");
//   };

//   const handleLogin = () => {
//     clearErrors();
//     Firebase.auth()
//       .signInWithEmailAndPassword(email, password)
//       .catch((err) => {
//         switch (err.code) {
//           case "auth/invalid-email":
//           case "auth/invalid-email":
//           case "auth/user-not-found":
//             setEmailError(err.message);
//             break;
//           case "auth/wrong-password":
//             setPasswordError(err.message);
//             break;
//         }
//       });
//   };
//   const handleSignup = () => {
//     clearErrors();
//     Firebase.auth()
//       .createUserWithEmailAndPassword(email, password)
//       .catch((err) => {
//         switch (err.code) {
//           case "auth/email-already-in-use":
//           case "auth/invalid-email":
//             setEmailError(err.message);
//             break;
//           case "auth/weak-password":
//             setPasswordError(err.message);
//             break;
//         }
//       });
//   };

//   const handleLogOut = () => {
//     Firebase.auth.signOut();
//   };

//   const authListner = () => {
//     Firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         clearInputs();
//         setUser(user);
//       } else {
//         setUser("");
//       }
//     });
//   };

//   useEffect(() => {
//     authListner();
//   }, []);

//   return (
//     <>
//     {user ? (
//       <PrimaryHeader />
//       <Router>
//         <Route exact path="/" component={App}></Route>
//         <Route path="/pdf-merger" component={PdfMerge}></Route>
//         <Route path="/pdf-meta-editor" component={PdfMetaEditor}></Route>
//         <Route path="/image-optimizer" component={ImageOptimizer}></Route>
//         <Route path="/image-cropper" component={ImageCropper}></Route>
//         <Route path="/video-poster" component={VideoPoster}></Route>
//       </Router>
//     ) : (
//       <section className="login">
//         <div className="loginContainer">
//           <label>User Name</label>
//           <input
//             type="text"
//             autoFocus
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <p className="errorMsg">{emailError}</p>
//           <label>Password</label>
//           <input
//             type="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <p className="errorMsg">{passwordError}</p>
//           <div className="btnContainer">
//             {hasAccount ? (
//               <>
//                 <button className="submitButton" onClick={handleLogin}>
//                   Log in
//                 </button>
//                 <p>
//                   Don't have an account ?{" "}
//                   <span onClick={() => setHasAccount(!hasAccount)}>
//                     Sign up
//                   </span>
//                 </p>
//               </>
//             ) : (
//               <>
//                 <button className="submitButton" onClick={handleSignup}>
//                   Sign up
//                 </button>
//                 <p>
//                   Already have an account ?{" "}
//                   <span onClick={() => setHasAccount(!hasAccount)}>Log in</span>
//                 </p>
//               </>
//             )}
//           </div>
//         </div>
//       </section>
//       )
//     }
//     </>
//   );
// }
