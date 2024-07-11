import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../../Assets/files/resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./Resume.css";
import ResumeBtn from "../../Assets/ResumeBtn/ResumeBtn.js";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="resume-section">
      <ResumeBtn/>
      <div className="resume">
        <Document file={resume} >
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6}  renderTextLayer={false}/>
        </Document>
      </div>
    </div>
  );
}

export default Resume;
