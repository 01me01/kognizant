import React from "react";
import "./mentor.css";
import Footer from "./footer.jsx";
import Mentor1 from "./images/mentor1.jpg";
import Mentor2 from "./images/mentor2.jfif";
import Mentor3 from "./images/mentor3.jpg";
import Mentor4 from "./images/mentor4.webp";
import Nav from "./nav.jsx";
import logo from "./logo.jpg"

export default function mentor() {
  return (
    <div className="mentor-mainpage">
      <div className="MYNAME-nav">
        <Nav />
      </div>
      <div className="mentor-cards">
        <div className="container-1">
          <img src={Mentor1} alt="m1" className="mentor1" />
          <div className="m1-text">
            <h2>Eric Francis</h2>
            <h6>Mathematics</h6>
            <p>
              I am graduate in Mathematics Honours from Siliguri College.I
              completed my Higher Secondary from CBSE board. I am providing home
              tuition for maths for CBSE/ICSE board from class 8 to 12. If
              anyone is interested please contact me as soon as possible.
            </p>
          </div>
          <div className="m1-details">
            <h3> ₹550/hour</h3>
            <p>
              Response Time: 3h <br />
              Number of students :50+
            </p>
          </div>
        </div>
        <div className="container-2">
          <img src={Mentor2} alt="m2" className="mentor2" />
          <div className="m2-text">
            <h2>Komal pandey</h2>
            <h6>English</h6>
            <p>
              Hello there! Here's a little about me, I have graduated from St
              Xavier's College, Mumbai and reside in Mumbai. I am certified as a
              TESOL teacher by Asian College of Teachers. My teaching experience
              spans to a bit above two years. I am a dancer, singer and an
              artist. My hobbies include playing the guitar, painting and
              interacting with my students!️
            </p>
          </div>
          <div className="m2-details">
            <h3> ₹750/hour</h3>
            <p>
              Response Time: 24h <br />
              Number of students :50+
            </p>
          </div>
        </div>
        <div className="container-3">
          <img src={Mentor3} alt="m3" className="mentor3" />
          <div className="m3-text">
            <h2>Talash pillai </h2>
            <h6>Economics</h6>
            <p>
              I am B.com Hons. holder and M.Com holder from Dayalbagh
              Educational Institute, Agra and has a good knowledge in
              accounting, taxation, financial management, economics, business
              studies and other subjects of commerce with outstanding teaching
              techniques and methods that refine the students' knowledge level.
            </p>
          </div>
          <div className="m3-details">
            <h3> ₹650/hour</h3>
            <p>
              Response Time: 5h <br />
              Number of students :50+
            </p>
          </div>
        </div>
        <div className="container-4">
          <img src={Mentor4} alt="m4" className="mentor4" />
          <div className="m4-text">
            <h2>Prachi dubey</h2>
            <h6>Chemistry</h6>
            <p>
              I am a doctorate in Chemical Science and have around 20 years of
              experience in teaching students of school/college. I have also
              part time teaching experience of M.Sc at FRI and B.tech. at IIT
              Roorkee. I am convent educated with good command over English and
              Hindi.
            </p>
          </div>
          <div className="m4-details">
            <h3> ₹700/hour</h3>
            <p>
              Response Time: 6h <br />
              Number of students :50+
            </p>
          </div>
        </div>
      </div>
      <div className="myfoot">
        <Footer />
      </div>
    </div>
  );
}
