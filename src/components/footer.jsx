import React from "react";
import "./footer.css"
import insta  from "./images/instagram.png";
import fb from "./images/facebook.png";
import copyright from "./images/copyrightt.png";
import twitter from "./images/twitterr.png";
export default function footer() {
  return (
    <div className="footer">
      <div className="foottext">
        <b>Get to know us</b>
        <br></br>
        <>About Us</>
        <br></br>
        <>Contact Us</>
      </div>
      <div className="icons">
        <img className="icon_insta" src={insta} />
        <img className="icon_fb" src={fb} />
        <img className="icon_twitter" src={twitter} />
        <div className="message">
          © 2022 - 2023 Kognizant, Inc - All Rights Reserved
        </div>
      </div>
    </div>
  );
}
