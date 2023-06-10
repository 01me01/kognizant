import React from "react";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="fullpage">
      <div className="nav">
        <div className="name">Kognizant</div>
        <div className="wrap">
        <a href="/login" className="login">
          login
        </a>
        <a href="#" className="signup">
          Signup
        </a>
        </div>
      </div>
    </div>
  );
}
