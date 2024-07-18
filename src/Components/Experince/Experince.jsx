import React from "react";
import "./experince.scss";
import NavBar from "../Nav Bar/NavBar";
import "bootstrap/dist/css/bootstrap.css";

const Experince = () => {
  return (
    <>
      <div id="exp">
        <div className="whole">
          <div className="nav-div">
            <NavBar />
          </div>
          <div className="d-flex">
            <div className=" ">
              <div className="edu m-5 p-3">
                <div className="edu-title">Education</div>
                <div>
                  <div className="10th p-2">
                    <div>
                      <sup>2017</sup> 2018 &nbsp; &nbsp; <sup>High School</sup>{" "}
                      Sri Ramakunjeshwara Hight School , Mangalure
                    </div>
                  </div>
                  <div className="puc p-2">
                    <div>
                      <sup>2018</sup> 2020 &nbsp; &nbsp; <sup>PUC</sup> Masters
                      PU College, Hassan
                    </div>
                  </div>
                  <div className="be p-2">
                    <div>
                      <sup>2020</sup> 2024 &nbsp; &nbsp; <sup>BE</sup>{" "}
                      Electonics & Instrumentaion Branch , MCE , Hassan
                    </div>
                  </div>
                </div>
              </div>
              <div className="exp m-5 p-3">
                <div className="exp-title">Experince</div>
                <div>
                  <div className="meriise p-2">
                    <div>
                      2021 - 2024 <br /> <sup>ME-RIISE Foundation</sup>{" "}
                      Operation & Event Lead
                    </div>
                  </div>
                  <hr />
                  <div className="hal p-2">
                    <div>
                      Feb 2024 - Mar 2024 <br />{" "}
                      <sup> Hindustan Aeronautics Limited (HAL)</sup> Mission
                      and Combat Systems Research and Design Centre Intern
                      (MCSRDC)
                    </div>
                  </div>
                  <hr />
                  <div className="be p-2">
                    <div>
                      Apr 2024 - Present <br /> <sup>e2e Hiring (Diatoz)</sup>{" "}
                      Web Developer
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-div ">
              <div className="tech-exp p-4">
                <div className="tech-exp-title">Technical Expertise</div>
                <div className="comp-logo-div d-flex">
                  <div className="logo-div">
                    <div>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png"
                        alt=""
                        className="skill-logo"
                      />
                    </div>
                    html
                  </div>
                  <div className="logo-comp-div">
                    <div>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/180px-CSS3_logo_and_wordmark.svg.png"
                        alt=""
                        className="skill-logo-css"
                      />
                    </div>
                    css
                  </div>
                  <div className="logo-comp-div">
                    <div>
                      <img
                        src="https://th.bing.com/th/id/OIP.S0B1lyDfNEXuJ-f1hPvK0wHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5"
                        alt=""
                        className="skill-logo-js"
                      />
                    </div>
                    js
                  </div>
                  <div className="logo-comp-div">
                    <div>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/180px-React_Logo_SVG.svg.png"
                        alt=""
                        className="skill-logo-js"
                      />
                    </div>
                    React
                  </div>
                  <div className="logo-comp-div">
                    <div>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/180px-Bootstrap_logo.svg.png"
                        alt=""
                        className="skill-logo-js"
                      />
                    </div>
                    Bootstrap
                  </div>
                  <div className="logo-comp-div">
                    <div>
                      <img
                        src="https://sass-lang.com/assets/img/logos/logo.svg"
                        alt=""
                        className="skill-logo-js"
                      />
                    </div>
                    SASS
                  </div>
                </div>
                <div className="text-test">
                  <ul>
                    <li>Tailwind CSS</li>
                    <li>Material UI</li>
                    <li>Type Script</li>
                    <li>Git Version Control</li>
                    <li>Git Hub</li>
                    <li>Git Lab</li>
                    <li>API's</li>
                    <li>Industiral Automation Equipments</li>
                  </ul>
                </div>
              </div>
              <div className="tech-exp p-4">
                <div className="tech-exp-title">Achivements</div>
                <div className="comp-logo-div d-flex"></div>
                <div className="text-test">
                  <ul>
                    <li> Rashtrapati Scout - The Bharat Scouts & Guides 2018</li>
                    <li> Ideathon Competition 1st place from Tequed Labs 2021</li>
                    <li> Best Presenter from Xeligent 2023</li>
             
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experince;
