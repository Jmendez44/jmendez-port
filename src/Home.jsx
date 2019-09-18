import React from "react";
import "./css/Main.css";

import TypedReact from "./TypedReact";

import FloatingIcons from "./FloatingIcons";

// const interp = i => r =>
//   `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

const Home = () => {
  


  
  // const randomNumber = () => {
  //   return `${Math.floor((Math.random() * 50) / 2)}%`;
  // };



  // const { radians } = useSpring({
  //   from: { radians: 0 },
  //   to: async next => {
  //     while (false) {
  //       await next({ radians: 2 * Math.PI });
  //     }
  //   },

  //   config: { duration: 3500 },
  //   reset: true
  // });

  // useEffect(() => {
  //   return () => {
  //     setToggle(!isToggled);
  //   }
  // }, []);

  // const color = () => {
  //   return "red";
  // };

  return (
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
      <FloatingIcons />
    </div>
  );
};

export default Home;

/* Mobile Version Nav bar  */
/* <button className="btn" onClick={() => setNavOpen(!isNavOpen)}>
        button
      </button> */
/* <Nav style={navAnimation} /> */

/* <ul>
          <li className="active" href="">
            [HOME]
          </li>
          <li href="">[PROJECTS] </li>
          <li href="">[CONTACT]</li>
        </ul> */
