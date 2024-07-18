import React from "react";
import NavBar from "../Nav Bar/NavBar";
import "./project.scss";
import img1 from "./fresh port.png";
import img2 from "./impact port.png";
import img3 from "./crypto port.png";
import img4 from "./main1 port.png";
import img5 from "./main2 port.png";

const Project = () => {
  return (
    <>
      <div id="pro">
        <div className="whole">
          <div className="nav-div p-4">
            <NavBar />
          </div>
          <div>
          <div className="pro-title">My Projects</div>
          <div className="d-flex justify-content-evenly ">
            <div>
              <img src={img1} className="img1 m-3" alt="" />
            </div>
            <div>
              <img src={img2} className="img2 m-3" alt="" />
            </div>
          </div>
          <div className="d-flex justify-content-center m-4 ">
            <img src={img5} className="img2 m-3" alt="" />
          </div>
          <div className="d-flex justify-content-evenly ">
            <div>
              <img src={img4} className="img1 m-3" alt="" />
            </div>
            <div>
              <img src={img3} className="img3 m-3" alt="" />
            </div>
          </div>
         <br />
         <br /> 
          {/* green part completed now link part  */}
          <div className="down-black-div d-flex justify-content-evenly">
          <div className="black-div m-5">
            <div className="m-4">
              <div>
                <div className="link-title"> Link's</div>
                <div className="down-div">Vercel deployed</div>
                <li >
                   Crypto Tracker{" "}
                  <a href="https://crypto-tracker-pearl-one.vercel.app/">
                    Click
                  </a>
                </li>
                <li>
                  Impact Page{" "}
                  <a href="https://impact-web-iota.vercel.app/">Click</a>
                </li>
                <li>
                  Blogs{" "}
                  <a href="https://vercel.com/navneeth-h-ms-projects/blog/HhaE3VdU7svcWyH8p6dpbRdR7M8X">
                    Click
                  </a>
                </li>
                etc
              </div>
              <div>
                <div className="down-div">Git Link</div>
                <div>
                  <li>
                    {" "}
                    <a href="https://github.com/NavneethHM">Click</a>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="cont-detiles">
            <div  className="cont">Contact Me</div>
            <div className="p-2">
<div className=""><i class="fa-solid fa-phone"> </i> 9035116251</div>
<div className=""><i class="fa-regular fa-envelope"></i> hm.navneethhm@gmail.com</div>
</div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
