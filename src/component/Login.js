// import React from "react";

// export default function Login(props) {
//   const {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     handleLogin,
//     handleLogOut,
//     handleSignup,
//     hasAccount,
//     setHasAccount,
//     emailError,
//     passwordError
//   } = props;
//   return (
//     <>
//       <section className="login">
//         <label>User Name</label>
//         <input
//           type="text"
//           autoFocus
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <p className="errorMsg">{emailError}</p>
//         <label>User Name</label>
//         <input
//           type="password"
//           autoFocus
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <p className="errorMsg">{passwordError}</p>
//         <div className="btnContainer">
//           (hasAccount ?(
//           <>
//             <button className="submitButton" onClick={handleLogin}>
//               Log in
//             </button>
//             <p>
//               Don't have an account ?{" "}
//               <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
//             </p>
//           </>
//           ):(
//           <>
//             <button className="submitButton" onClick={handleSignup}>
//               Sign up
//             </button>
//             <p>
//               Already have an account ?{" "}
//               <span onClick={() => setHasAccount(!hasAccount)}>Log in</span>
//             </p>
//           </>
//           ))
//         </div>
//       </section>
//     </>
//   );
// }
