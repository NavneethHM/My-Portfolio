import React from "react";
import "./main.scss";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const MainPage = () => {
  const toAboutPage = useNavigate();
  return (
    <>
      <div id="top">
        <div className="top-bar-main">
          <div className="Portfolic-title ">PORTFOLIO</div>
          <div className="my-name">Navneeth H M </div>
          {/* the content in top starts */}
          <div className="d-flex my-3">

            <button className="button-click" onClick={()=>{toAboutPage("/about")}}>
            <div className="arrow">
              <div className="arrow-inside">
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            </button>
            <div>
              <p className="text-top">
                Introducing myself as a Web Developer with 4 months of
                experience in Front End Development. I specialize in design &
                proficient in HTML, CSS, JavaScript, and modern frameworks like
                React.
              </p>
            </div>
          </div>
            {/* the content in top ends */}
            {/* contact detiles start  */}
            <div className="contact-detiles d-flex">
                <div><button className="cont-but"><i class="fa-solid fa-phone"> </i> 9035116251</button></div>
                <div className="star"><i class="fa-regular fa-star"></i></div>
                <div><button  className="cont-but"><i class="fa-regular fa-envelope"></i>  hm.navneethhm@gmail.com</button></div>
            </div>
             {/* contact detiles end  */}
             {/* web developer bar start  */}
             <div className="web-text-background">
                <div className="web-text">WEB DEVELOPER</div>
             </div>

        </div>
      </div>
    </>
  );
};

export default MainPage;
