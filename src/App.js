import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Components/Mainpage/MainPage";
import About from "./Components/About Me/About";
import NavBar from "./Components/Nav Bar/NavBar";
import Experince from "./Components/Experince/Experince";
import Project from "./Components/Projects/Project";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/experince" element={<Experince/>} />
          <Route path="/project"  element={<Project/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
