import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

import Routes from "./Routes";

const Projects = () => {
  const [isToggled, setToggle] = useState(false);
  const [isToggled1, setToggle1] = useState(false);
  const [isToggled2, setToggle2] = useState(false);
  const cardAni = useSpring({
    transform: isToggled ? "translate(0,0)" : "translate(0,-100%)"
  });
  const cardAni1 = useSpring({
    transform: isToggled1 ? "translate(0,0)" : "translate(0,-100%)"
  });

  const cardAni2 = useSpring({
    transform: isToggled2 ? "translate(0,0)" : "translate(0,-100%)"
  });

  // const fade = useSpring({
  //   from: {
  //     opacity: 0
  //   },
  //   opacity: 1
  // });
  console.log(isToggled);
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
        <div
          onMouseEnter={() => setToggle(!isToggled)}
          onMouseLeave={() => setToggle(!isToggled)}
          className="title"
        >
          <animated.div style={cardAni} className="ani"></animated.div>
          <div className="project-card griipe">
            <img src={require("./Assets/2019-09-2002-02-59_Trim.gif")} />
          </div>
        </div>
        <div
          onMouseEnter={() => setToggle1(!isToggled1)}
          onMouseLeave={() => setToggle1(!isToggled1)}
          className="title"
        >
          <animated.div style={cardAni1} className="ani1"></animated.div>
          <div className="project-card griipe">
            <img src={require("./Assets/cgol.gif")} />
          </div>
        </div>

        <div
          onMouseEnter={() => setToggle2(!isToggled2)}
          onMouseLeave={() => setToggle2(!isToggled2)}
          className="title"
        >
          <animated.div style={cardAni2} className="ani2"></animated.div>
          <div className="project-card griipe">
            <img src={require("./Assets/Capture.PNG")} />
          </div>
        </div>

        <div className="title more-info">
          <div className="project-card more"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

{
  /* <div className="title">
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
          </div> */
}
