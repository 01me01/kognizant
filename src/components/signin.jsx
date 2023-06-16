import React, { useEffect } from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase_config";
import "./signin.css";
import pic from "./images/backgroundForLogin.webp";
import logo from "./logo.jpg";
export default function signin() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [User, setUser] = useState("");

  const register = async () => {
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (  
    <div className="page">
      <div className="navOnTop">
        <div className="name">
          <img src={logo} className="logo_kognizant-1" alt="logo" />
          <a href="/" className="kog_text-1">Kognizant</a>
          <p className="navRight">{User?.email}</p>
            <button className="SignoutButton-1" onClick={logout} type="submit">
              signout
            </button>
        </div>
      </div>
      <div className="maincard-1">
        <img className="background" src={pic} />
        <div className="card-1">
          <div className="containerOfCard">
            <div className="signintext">
              <b> Sign up </b>
              <br></br>
              <>Create your Kognizant account today</>
              <br></br>
            </div>
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
