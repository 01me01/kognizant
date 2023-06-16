import React from "react";
import "./About.css";
import Nav from "./nav.jsx";
import aboutImg from "./images/aboutus.jpg";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import Footer from "./footer.jsx"

export default function About() {
  return (
    <div className="main_page">
      <div className="thisisNav">
        <Nav />
      </div>
      <div className="imgBelowNav">
        <img src={aboutImg} className="about_image" />
        <h1 className="intro">INTRODUCING US</h1>
      </div>
      <div className="contentPage">
        <div className="content_text">
          <p className="heading">
            <b>Learning that works</b>
            <br />
            One-to-one learning works. We’ve believed that from day one. <br />
            But we also knew it would work better if it were accessible,
            affordable, and more convenient for everyone.
            <br /> So that’s what we’ve built—an easier way to connect people
            who need<br/> to know with the experts that can teach them. And we’ve
            changed the way people think about <br/>education in the process.
          </p>
        </div>
        <div className="bubbles">
          <div className="div-img1">
            <img src={img1} alt="book" className="img1" />
            <div className="bubble-text">300+<br/> Subjects</div>
          </div>
          <div className="div-img2">
            <img src={img2} alt="book" className="img2" />
            <div className="bubble-text">1,00,000+ <br/> Lessons</div>
          </div>
          <div className="div-img3">
            <img src={img3} alt="book" className="img3" />
            <div className="bubble-text">50,000+ <br/> Trusted Professors </div>
          </div>
        </div>

      </div>
      <div className="foot">
      <Footer/>
      </div>
    </div>
  );
}
