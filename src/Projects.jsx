import React, { useState, useEffect } from "react";
import Routes from "./Routes";

const Projects = () => {
  const [isToggled, setToggle] = useState(false);
  return (
    <div className="projects-container">
      <video
        autoplay="true"
        muted="true"
        loop="true"
        id="myVideo"
        src={require("./Assets/cloudy.mp4")}
      ></video>
      <div className="projects-wrapper">
        <div className="title">
          <div className="project-card griipe">
            <img src={require("./Assets/2019-09-2002-02-59_Trim.gif")} />
          </div>
        </div>

        <div className="title">
          <div className="project-card griipe">
            <img src={require("./Assets/cgol.gif")} />
          </div>
        </div>

        <div className="title">
          <div className="project-card griipe">
            <img src={require("./Assets/Capture.PNG")} />
          </div>
        </div>

        <div className="title">
          
          <div className="project-card griipe">
            <img src="" />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;



{/* <div className="title">
          <h2>More Projects</h2>
          <div className="project-card griipe">
            <img src="" />
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              perferendis quisquam ullam possimus! Laudantium earum deleniti,
              dolore culpa tempore inventore molestias soluta quibusdam harum,
              dolores dignissimos velit odio dicta expedita.
            </div>
            <div className="proj-btns">
              <button>View Site</button>
              <button>Github</button>
            </div>
          </div> */}