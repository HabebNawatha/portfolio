import React from "react";
import "./Resume.css";
import ResumeBtn from "../../Assets/ResumeBtn/ResumeBtn.js";
import PDFViewer from "./PDFViewer.js";
function Resume() {
  return (
    <div className="resume-section">
      <ResumeBtn/>
      <div className="resume">
        <PDFViewer/>
      </div>
    </div>
  );
}

export default Resume;
