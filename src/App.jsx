import React from "react";
import "./css/Main.css";
import useTypewriter from "react-typewriter-hook";
import Typed from "typed.js";
import TypedReact from './TypedReact'
import Borders from "./Borders";

const App = () => {


  return (
    <div className="App">
      <div className="about-page">
        <div className="code-box">
          <TypedReact
            strings={[
              'Hello!^500 <br> my name is Jenuel^500 <br> but most call me Jay',
              `I'm a <span class="wd">Web Developer</span>`,
              `I'm a <span class="m">Musician</span>`,
              `I'm a <span class="c">Creator</span>`,
              `I'm a <span class="ps">Problem Solver</span>`,
              `I enjoy Creating Web Apps`,

              `Hello! My name is Jenuel, but most call me Jay. I'm a Web Developer, Musician, Creator &amp; Problem Solver. I enjoy Creating Web Apps`

            ]}
          />
        </div>
        <div className="about me">about</div>
      </div>

      <div className="links">
        <ul>
          <li className="active" href="">[HOME] </li>
          <li href="">[PROJECTS] </li>
          <li href="">[CONTACT]</li>
        </ul>
      </div>
      <Borders />
    </div>
  );
};

export default App;
