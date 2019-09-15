import React, { useState } from "react";
import "./css/Main.css";
import { useSpring, animated } from "react-spring";
import TypedReact from "./TypedReact";
import Borders from "./Borders";
import Toggle from "./Toggle";
import Nav from "./Nav";

const interp = i => r =>
  `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

const App = () => {
  const [isToggled, setToggle] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    content: isNavOpen ? "Close" : "Menu",
    transform: isNavOpen
      ? `translate3d(0,0,0) scale(1)`
      : `translate3d(100%,0,0) scale(0.6)`
  });

  const [movingIcons, setMovingIcons] = useState(false);
  const randomNumber = () => {
    return `${Math.floor((Math.random() * 50) / 2)}%`;
  };
  const { y } = useSpring({
    y: movingIcons ? 0 : -100
  });

  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true
  });
  // const fade = useSpring({
  //   from: {
  //     opacity: 0
  //   },
  //   opacity: 1
  // });

  // console.log(fade);

  const color = () => {
    return "red";
  };

  return (
    <div className="App">
      <div className="about-page">
        <div className="code-box">
          <TypedReact
            strings={[
              "Hello!^500 <br> my name is Jenuel^500 <br> but most call me Jay",
              `I'm a <span class="wd">Web Developer</span>`,
              `I'm a <span class="m">Musician</span>`,
              `I'm a <span class="c">Creator</span>`,
              `I'm a <span class="ps">Problem Solver</span>`,
              `I enjoy Creating Web Apps`,

              `<span class="about-fin">Hello! My name is Jenuel, but most call me Jay. I'm a Web Developer, Musician, Creator &amp; Problem Solver. I enjoy Creating Web Apps</span>`
            ]}
          />
        </div>
        <div className="about me">
          <animated.i
            style={{ transform: radians.interpolate(interp(1)) }}
            className="fab fa-html5 fa-5x"
            
          ></animated.i>
          <animated.i
            style={{ transform: radians.interpolate(interp(3)) }}
            className="fab fa-node fa-5x"
          ></animated.i>
          <animated.i
            style={{ transform: radians.interpolate(interp(5)) }}
            className="fab fa-react fa-5x"
            
          ></animated.i>
          <animated.i
            style={{ transform: radians.interpolate(interp(1)) }}
            className="fab fa-css3-alt fa-5x"
           
          ></animated.i>
          <animated.i
            style={{ transform: radians.interpolate(interp(3)) }}
            className="fab fa-python fa-5x"
            
          ></animated.i>
          <animated.i
            style={{ transform: radians.interpolate(interp(5)) }}
            class="fab fa-adobe fa-5x"
          ></animated.i>
          <animated.i
            style={{ transform: radians.interpolate(interp(1)) }}
            className="fab fa-js fa-5x"
            
          ></animated.i>
          <animated.i
            style={{ transform: radians.interpolate(interp(3)) }}
            className="fab fa-github fa-5x"
          ></animated.i>
          <animated.img
          src={require('./Assets/unity.png')}
            style={{ transform: radians.interpolate(interp(5)) }}
            className="unity"
          />

          {/* <main><Toggle /></main> */}
        </div>
      </div>
      {/* Mobile Version Nav bar  */}
      {/* <button className="btn" onClick={() => setNavOpen(!isNavOpen)}>
        button
      </button> */}
      {/* <Nav style={navAnimation} /> */}
      <div className="links">
        <ul>
          <li className="active" href="">
            [HOME]
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
