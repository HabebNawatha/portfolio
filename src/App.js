import React , {useState,useEffect} from "react";
import './App.css';
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About.js";
import ScrollToTop from "./components/ScrollToTop";
import Resume from "./components/Resume/Resume.js";
import Contact from "./components/Contact/Contact.js";

import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      updateLoad(false);
    },1200);
    return () => clearTimeout(timer);
  },[]);
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
