import React from "react";
import './PDFViewer.css';
import resume from '../../Assets/files/resume.pdf';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { SpecialZoomLevel } from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function PDFViewer(){  
    return (
        <div className="pdf-container">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={resume}
                defaultScale={SpecialZoomLevel.PageWidth}/>
            </Worker>
        </div>
    );
}

export default PDFViewer;