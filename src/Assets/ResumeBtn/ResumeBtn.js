import React from "react";
import resume from '../files/resume.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import './ResumeBtn.css';

function ResumeBtn() {
    return (
        <div className="resume-donwload-btn">
            <a href={resume} download="Habeb_Resume.pdf" className='btn' >
                <AiOutlineDownload /> &nbsp; Download CV
            </a>
        </div>
    );
}
export default ResumeBtn;