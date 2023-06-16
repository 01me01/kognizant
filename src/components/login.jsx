import React, { useEffect } from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase_config";
import "./login.css";
import pic from "./images/backgroundForLogin.webp";
import logo from "./logo.jpg";

export default function Login() {
  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [User, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser("No User Signed In");
      }
    });
  }, []);

  // const register = async () => {
  //   createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log(user);
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
  // };

  const login = async () => {
    try {
      const username = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(username);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div className="page">
      <div className="navOnTop">
        <div className="name">
          <img src={logo} className="logo_kognizant" alt="logo" />
          <a href="/" className="kog_text">Kognizant</a>
          {/* <h2 className="navRight">user logged in:</h2> */}
            <p className="navRight">{User?.email}</p>
            <button className="SignoutButton" onClick={logout} type="submit">
              signout
            </button>
        </div>
      </div>
      <div className="maincard">
        <img className="background" src={pic} />
        <div className="card">
          <div className="containerOfCard">
            <div className="signintext">
              <b> Login </b>
              <br></br>
              <>To your Kognizant's account</>
              <br></br>
            </div>
            {/* <h2>Create user</h2>
            <div className="textOnTopOfInput">Email</div>
            <input
              type="email"
              className="inputval"
              placeholder="Enter your email"
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <br></br>
            <div className="textOnTopOfInput">Password</div>
            <input
              type="password"
              className="inputval"
              placeholder="Enter your password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <br></br>
            <button className="button" onClick={register} type="submit">
              signin
            </button> */}

            <div className="textOnTopOfInput">Email</div>
            <input
              type="email"
              placeholder="Enter your email"
              className="inputval"
              onChange={(e) => setLoginEmail(e.target.value)}
              />
            <br></br>
            <div className="textOnTopOfInput">Password</div>
            <input
              type="password"
              placeholder="Enter your password"
              className="inputval"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <br></br>
            <button className="button" onClick={login} type="submit">
              Login
            </button>

            <br></br>
            <div className="DontHaveAC">Don't have an account?
            <a href="/signin" className="DontHaveAC">Signin</a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
