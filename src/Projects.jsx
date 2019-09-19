import React, { useState, useEffect } from "react";
import Routes from './Routes'

const Projects = () => {
  const [isToggled, setToggle] = useState(false);
  return (
    <div className='projects-container'>
      <video
        autoplay="true"
        muted="true"
        loop="true"
        id="myVideo"
        src={require("./Assets/Walking.mp4")}
      ></video>
      <div className="projects-wrapper">
        <div className="project-card"></div>
        <div className="project-card"></div>
        <div className="project-card"></div>
        <div className="project-card"></div>

      </div>
    </div>
  )
}

export default Projects
