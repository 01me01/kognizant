import React from "react";
import "./nav.css";
import logo from "./logo.jpg";

export default function Nav() {
  return (
    <div className="top">
      <div className="name-1">
        <img src={logo} className="logo_k" alt="logo" />
        <a href="/" className="name-">
          Kognizant
        </a>
      </div>
      <div className="wrap">
        <a href="/" className="home-1">
          Home
        </a>
        <a href="/about" className="login-1">
          About
        </a>
        <a href="/mentor" className="login-1">
          Mentors
        </a>

        <a href="/login" className="login-1">
          login
        </a>
        <a href="/signin" className="signup-1">
          Signup
        </a>
        
      </div>
    </div>
  );
}
