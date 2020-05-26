import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Projects = () => {
  const [isToggled, setToggle] = useState(false);
  const [isToggled1, setToggle1] = useState(false);
  const [isToggled2, setToggle2] = useState(false);
  const [colorOrange, setColor] = useState(false);
  const [colorOrange1, setColor1] = useState(false);
  const [colorOrange2, setColor2] = useState(false);
  const cardAni = useSpring({
    pointerEvents: isToggled ? "all" : "none",
    transform: isToggled ? "translate(0,0)" : "translate(0,-100%)",
  });
  const cardAni1 = useSpring({
    pointerEvents: isToggled1 ? "all" : "none",
    transform: isToggled1 ? "translate(0,0)" : "translate(0,-100%)",
  });
  const cardAni2 = useSpring({
    pointerEvents: isToggled2 ? "all" : "none",
    transform: isToggled2 ? "translate(0,0)" : "translate(0,-100%)",
  });
  const colorToOrange = useSpring({
    backgroundColor: colorOrange ? "#fa5b3d" : "white",
    transform: colorOrange ? "scale(1.2)" : "scale(1)",
  });
  const colorToOrange1 = useSpring({
    backgroundColor: colorOrange1 ? "#fa5b3d" : "white",
    transform: colorOrange1 ? "scale(1.2)" : "scale(1)",
  });
  const colorToOrange2 = useSpring({
    backgroundColor: colorOrange2 ? "#fa5b3d" : "white",
    transform: colorOrange2 ? "scale(1.2)" : "scale(1)",
  });

  return (
    <div className="projects-container">
      {/* <video
        autoPlay={true}
        muted={true}
        loop={true}
        id="myVideo"
        src={require("./Assets/cloudy.mp4")}
      ></video> */}
      <div className="projects-wrapper">
        <div className="more-info">
          <h2>This portfolio was made with</h2>
          <ul>
            <li>HTML</li>
            <li>SASS</li>
            <li>React</li>
            <li>React Spring</li>
            <li>Typed.js</li>
          </ul>
          <a
            className="blk"
            href="https://github.com/Jmendez44/jmendez-port/tree/master"
            target="_blank"
          >
            Github
          </a>
        </div>

        <div className="title">
          <animated.button
            className="toggle"
            onMouseOver={() => setColor(!colorOrange)}
            onMouseOut={() => setColor(!colorOrange)}
            onClick={() => setToggle(!isToggled)}
            style={colorToOrange}
          >
            Project Info
          </animated.button>
          <animated.div style={cardAni} className="ani">
            <div className="ani-btns">
              <a
                className="blk"
                href="https://griipeio.netlify.com/"
                target="_blank"
              >
                Website
              </a>
              <a
                className="blk"
                href="https://github.com/labs12-call-complain/labs-call-back-FE"
                target="_blank"
              >
                Github
              </a>
              <a onClick={() => setToggle(!isToggled)}>Close</a>
            </div>

            <div className="ani-wrapper">
              <h1>GRIIPE</h1>
              <div className="ani-content">
                <div className="ani-description">
                  <h3 className="subsection">Goal of this project:</h3>
                  <ul className="goal">
                    <li>
                      Facilitate the ability for retail customers to send
                      complaints privately and/or publicly.
                    </li>
                    <li>This was a team project with 3 other people.</li>
                    <li>Project was built in 1 month.</li>
                  </ul>
                </div>
                <div className="ani-skills">
                  <h3 className="subsection">Technologies:</h3>
                  <ul className="languages">
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Firebase</li>
                    <li>Deepgram API</li>
                    <li>Google Places API</li>
                    <li>Twitter API</li>
                  </ul>

                </div>
              </div>
            </div>
          </animated.div>
          <div className="project-card griipe">
            <img src={require("./Assets/2019-09-2002-02-59_Trim.gif")} />
          </div>
        </div>

        <div className="title">
          <animated.button
            className="toggle"
            onMouseOver={() => setColor1(!colorOrange1)}
            onMouseOut={() => setColor1(!colorOrange1)}
            onClick={() => setToggle1(!isToggled1)}
            style={colorToOrange1}
          >
            Project Info
          </animated.button>
          <animated.div style={cardAni1} className="ani1">
            <div className="ani-btns">
              <a
                className="blk"
                href="https://whimsical.com/UEoFTHwxx796L8zu27x7S3"
                target="_blank"
              >
                Design
              </a>
              <a
                className="blk"
                href="https://github.com/topicksio"
                target="_blank"
              >
                Github
              </a>
              <a onClick={() => setToggle1(!isToggled1)}>Close</a>
            </div>
            <div className="ani-wrapper">
              <h1>Topicks.io</h1>
              <div className="ani-content">
                <div className="ani-description">
                <h3 className="subsection">Goal of this project:</h3>
                  <ul className="goal">
                    <li>
                      A topic suggestion web app for live podcasts. It lets
                      podcasters gather topics directly from their community in
                      real time.
                    </li>
                    <li>Currently a one man project.</li>
                  </ul>
                </div>
                <div className="ani-skills">
                  <h3 className="subsection">Technologies: </h3>
                  <ul className="languages">
                    <li>React</li>
                    <li>React Hooks</li>
                    <li>Node</li>
                    <li>Apollo</li>
                    <li>GraphQL</li>
                    <li>Hasura</li>
                    <li>PostgresQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </animated.div>
          <div className="project-card griipe">
            <img src={require("./Assets/topicks.png")} />
          </div>
        </div>

        <div className="title">
          <animated.button
            className="toggle"
            onMouseOver={() => setColor2(!colorOrange2)}
            onMouseOut={() => setColor2(!colorOrange2)}
            style={colorToOrange2}
            onClick={() => setToggle2(!isToggled2)}
          >
            Project Info
          </animated.button>
          <animated.div style={cardAni2} className="ani2">
            <div className="ani-btns">
              <a
                className="blk"
                href="https://keen-mccarthy-75ca2a.netlify.com/"
                target="_blank"
              >
                Website
              </a>
              <a
                className="blk"
                href="https://github.com/irsr2/Web-UI-Dev-2"
                target="_blank"
              >
                Github
              </a>
              <a onClick={() => setToggle2(!isToggled2)}>Close</a>
            </div>
            <div className="ani-wrapper">
              <h1>International Rural School Report</h1>
              <div className="ani-content">
                <div className="ani-description">
                <h3 className="subsection">Goal of this project:</h3>
                  <ul className="goal">
                    <li>
                      The goal of this project is to Help third world countries
                      get access to school supplies.
                    </li>

                    <li>
                      This was a team project with 4 other people. I was in
                      charge of designing and coding the Landing page.
                    </li>
                    <li>This was a week long project.</li>
                  </ul>
                </div>
                <div className="ani-skills">
                  <h3 className="subsection">Technologies:</h3>
                  <ul className="languages">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>LESS</li>
                  </ul>
                </div>
              </div>
            </div>
          </animated.div>
          <div className="project-card griipe">
            <img src={require("./Assets/Capture.PNG")} />
          </div>
        </div>

        {/* <div className="title">
          <animated.button
            className="toggle"
            onMouseOver={() => setColor2(!colorOrange2)}
            onMouseOut={() => setColor2(!colorOrange2)}
            style={colorToOrange2}
            onClick={() => setToggle2(!isToggled2)}
          >
            Project Info
          </animated.button>
          <animated.div style={cardAni2} className="ani2">
            <div className="ani-btns">
              <a
                className="blk"
                href="https://keen-mccarthy-75ca2a.netlify.com/"
                target="_blank"
              >
                Website
              </a>
              <a
                className="blk"
                href="https://github.com/irsr2/Web-UI-Dev-2"
                target="_blank"
              >
                Github
              </a>
              <a onClick={() => setToggle2(!isToggled2)}>Close</a>
            </div>
            <div className="ani-wrapper">
              <h1>International Rural School Report</h1>
              <div className="ani-content">
                <div className="ani-description">
                  Project Info:
                  <ul className="goal">
                    <li>
                      The goal of this project is to Help third world countries
                      get access to school supplies.
                    </li>

                    <li>
                      This was a team project with 4 other people. I was in
                      charge of designing and coding the Landing page.
                    </li>
                    <li>This was a week long project.</li>
                  </ul>
                </div>
                <div className="ani-skills">
                  <h3>Technologies:</h3>
                  <ul className="languages">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>LESS</li>
                  </ul>
                </div>
              </div>
            </div>
          </animated.div>
          <div className="project-card griipe">
            <img src={require("./Assets/Capture.PNG")} />
          </div>
        </div>
      
         */}
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
