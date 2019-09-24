import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

import Routes from "./Routes";

const Projects = () => {
  const [isToggled, setToggle] = useState(false);
  const [isToggled1, setToggle1] = useState(false);
  const [isToggled2, setToggle2] = useState(false);
  const cardAni = useSpring({
    pointerEvents: isToggled ? "all" : "none",
    transform: isToggled ? "translate(0,0)" : "translate(0,-100%)"
  });
  const cardAni1 = useSpring({
    pointerEvents: isToggled1 ? "all" : "none",
    transform: isToggled1 ? "translate(0,0)" : "translate(0,-100%)"
  });

  const cardAni2 = useSpring({
    pointerEvents: isToggled2 ? "all" : "none",
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
        autoPlay={true}
        muted={true}
        loop={true}
        id="myVideo"
        src={require("./Assets/cloudy.mp4")}
      ></video>
      <div className="projects-wrapper">
        <div
          onMouseEnter={() => setToggle(!isToggled)}
          onMouseLeave={() => setToggle(!isToggled)}
          className="title"
        >
          <animated.div style={cardAni} className="ani">
            {" "}
            <div className="ani-wrapper">
              <h1>Title</h1>
              <div className="ani-content">
                <div className="ani-description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur ea corporis unde nisi, provident voluptate quae
                  sit autem voluptatum, cum, doloribus quo odio corrupti numquam
                  dolore accusamus cupiditate illo! Tempora.
                </div>
                <div className="ani-skills">
                  React
                </div>
                <div className="ani-btns">
                  <a href="https://callcomplain.netlify.com" target="_blank">
                    site
                  </a>
                  <a href="http://google.com" target="_blank">
                    github
                  </a>
                </div>
              </div>
            </div>
          </animated.div>
          <div className="project-card griipe">
            <img src={require("./Assets/2019-09-2002-02-59_Trim.gif")} />
          </div>
        </div>
        <div
          onMouseEnter={() => setToggle1(!isToggled1)}
          onMouseLeave={() => setToggle1(!isToggled1)}
          className="title"
        >
          <animated.div style={cardAni1} className="ani1">
            <div className="ani-wrapper">
              <h1>Title</h1>
              <div className="ani-content">
                <div className="ani-description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur ea corporis unde nisi, provident voluptate quae
                  sit autem voluptatum, cum, doloribus quo odio corrupti numquam
                  dolore accusamus cupiditate illo! Tempora.
                </div>
                <div className="ani-skills">
                  React
                </div>
                <div className="ani-btns">
                  <a href="http://google.com" target="_blank">
                    site
                  </a>
                  <a href="http://google.com" target="_blank">
                    github
                  </a>
                </div>
              </div>
            </div>
          </animated.div>
          <div className="project-card griipe">
            <img src={require("./Assets/cgol.gif")} />
          </div>
        </div>

        <div
          onMouseEnter={() => setToggle2(!isToggled2)}
          onMouseLeave={() => setToggle2(!isToggled2)}
          className="title"
        >
          <animated.div style={cardAni2} className="ani2">
            {" "}
            <div className="ani-wrapper">
              <h1>Title</h1>
              <div className="ani-content">
                <div className="ani-description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur ea corporis unde nisi, provident voluptate quae
                  sit autem voluptatum, cum, doloribus quo odio corrupti numquam
                  dolore accusamus cupiditate illo! Tempora.
                </div>
                <div className="ani-skills">
                  React
                </div>
                <div className="ani-btns">
                  <a href="http://google.com" target="_blank">
                    site
                  </a>
                  <a href="http://google.com" target="_blank">
                    github
                  </a>
                </div>
              </div>
            </div>
          </animated.div>
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
