import React from "react";
import "./css/Main.css";
import { useSpring, animated } from "react-spring";

import TypedReact from "./TypedReact";
import Borders from "./Borders";
import Toggle from "./Toggle";

const App = () => {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });

  console.log(fade);

  return (
    <div className="App">
      <div className="about-page">
        <div className="code-box">
          <TypedReact
            strings={[
              "Hello!^500 <br> my name is Jay^500 ",
              `I'm a <span class="wd">Web Developer</span>`,
              `I'm a <span class="m">Musician</span>`,
              `I'm a <span class="c">Creator</span>`,
              `I'm a <span class="ps">Problem Solver</span>`,
              `I enjoy Creating Web Apps`,

              `<span class="about-fin">Hello! My name is Jenuel, but most call me Jay. I'm a Web Developer, Musician, Creator &amp; Problem Solver. I enjoy Creating Web Apps</span>`
            ]}
          />
        </div>
        <animated.div className="about me" style={fade}>
          <i className="fab fa-js fa-4x"></i>
          <i className="fab fa-react fa-4x"></i>
          <i className="fab fa-node fa-4x"></i>
          <i className="fab fa-python fa-4x"></i>

          <i className="fab fa-github fa-4x"></i>
          <i className="fab fa-sass fa-4x"></i>
          <i className="fab fa-html5 fa-4x"></i>
          <i className="fab fa-css3-alt fa-4x"></i>

          <main>
            <Toggle />
          </main>
        </animated.div>
        {/* <div className="bottom">
          test
        </div> */}
      </div>

      <div className="links">
        <ul>
          <li className="active" href="">
            [HOME]{" "}
          </li>
          <li href="">[PROJECTS] </li>
          <li href="">[CONTACT]</li>
        </ul>
      </div>
      <Borders />
    </div>
  );
};

export default App;
