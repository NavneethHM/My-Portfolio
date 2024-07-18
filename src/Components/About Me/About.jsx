import React from "react";
import "./about.scss";
import NavBar from "../Nav Bar/NavBar";
import img from "./myonetwo.png";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  
  return (
    <>
      <div id="about">
        <div className="whole">
          <div>
            {/* nav bar div starts  */}
            <div className="nav-div">
              <NavBar />
            </div>
            {/* nav bar div ends  */}
            {/* about me content  */}
            <div className="text-img d-flex">
           
            <div className="p-5">
              <div className="about-text-full  p-5">
                <div className="about-me-text">About Me</div>
                <div>
                  I am Navneeth, a fresh graduate from the Electronics &
                  Instrumentation branch at Malnad College of Engineering in
                  Hassan, Karnataka. My passion lies in web development,
                  particularly its design and functionality. I have experience
                  in designing responsive and user-friendly websites and enjoy
                  tackling challenging designs. By using frameworks and various
                  tools, I develop websites. I have gained work experience at
                  e2e hiring (Diatoz) by working in their office.
                </div>
              </div>
            </div>
            <div className="img-div">
              <img src={img} className="myimg" alt="" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
