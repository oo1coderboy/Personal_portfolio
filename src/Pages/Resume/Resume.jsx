import res from "../../assets/re.png";
import resumePdf from '../../assets/resume.pdf';
// import React from 'react'
// import { Worker, Viewer } from '@react-pdf-viewer/react-pdf';

function Resume() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="grid place-items-center sm:mt-20">
        <img className="sm:w-96 w-48" src={res} alt="image2" />
      </div>

      <div className="max-w-2xl mx-auto text-center mt-16 mb-3 text-lg font-serif">
        <h1 className="text-2xl sm:text-5xl font-medium mb-6 ">Resume</h1>
        <div className="flex justify-center items-center">
          <iframe
            title="Resume PDF"
            src={resumePdf}
            width="800"
            height="600"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Resume