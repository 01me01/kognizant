import React from "react";
import "./Landing.css";
import teaching from "./teachingvideo.mp4";
import searchlogo from "./images/searchbutton.png";
import tutor from "./images/tutor_img.png";
import puzzle from "./images/puzzlee.png";
import calendar from "./images/calendar.png";
import bargraph from "./images/bargraph.png";
import Footer from "./footer.jsx";
import Nav from "./nav.jsx";

export default function Landing() {
  return (
    <div className="fullpage">
      <div className="top-page">
        <video autoPlay muted loop playsInline id="teaching_video">
          <source src={teaching} type="video/mp4" />
        </video>
        <div className="nav">
          <Nav />
        </div>
        <div className="elements_oftoppage">
          <div className="card-text">
          <h2>Find an expert tutor</h2>
          <p className="introtext">
            Private, 1–on–1 lessons with the expert instructor of your choice.
            <br></br>
            Meet online or in-person. Decide how much you pay and who you want
            <br></br>
            to work with. The choice is yours.
          </p>
          </div>
          <input type="text" placeholder="Search.." className="searchbar" />
          <div className="sbutton">
            <button type="submit" className="searchbutton">
              <img className="s-img" src={searchlogo} />
            </button>
          </div>
        </div>
      </div>

      <div className="second_page">
        <b className="top-text">Here for every moment</b>
        <br></br>
        <div className="infocards">
          <div className="card1">
            <div class="container">
              <img className="clipartimages" src={tutor} />
              <div className="card-text">
                <h2>
                  <b>VETTED EXPERTS</b>
                </h2>
                <p>
                  More qualified instructors than anywhere else, ready to help.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="card2">
            <div class="container">
              <img className="clipartimages" src={puzzle} />
              <div className="card-text">
                <h2>
                  <b>THE RIGHT FIT </b>
                </h2>
                <p>
                  More qualified instructors than anywhere else, ready to help.
                </p>
              </div>
            </div>
          </div>
          <div className="card3">
            <div class="container">
              <img className="clipartimages" src={calendar} />
              <div className="card-text">
                <h2>
                  <b>EXAM PREP AND PRACTICE </b>
                </h2>
                <p>
                  Figure out what you don’t know & get ready for test day with
                  practice exams.2
                </p>
              </div>
            </div>
          </div>
          <div className="card4">
            <div class="container">
              <img className="clipartimages" src={bargraph} />
              <div className="card-text">
                <h2>
                  <b>REAL RESULTS</b>
                </h2>
                <p>Reach your goals faster with private, 1–to–1 lessons.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="foot">
        <Footer />
      </div>
    </div>
  );
}
