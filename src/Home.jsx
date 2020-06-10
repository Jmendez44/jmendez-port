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
            // "Hello!^500 <br> my name is Jay^500",
            // `I'm a <span class="wd">Web Developer</span>`,
            // `I'm a <span class="m">Musician</span>`,
            // `I'm a <span class="c">Creator</span>`,
            // `I'm a <span class="ps">Problem Solver</span>`,
            // `I enjoy Creating Web Apps`,

            `<span class="about-fin">Hello! My name is Jenuel <span style="font-weight: 200">(most know me as Jay)</span>. I'm a <span class="highlight-r">Web Developer</span> based in NYC. I have always had a passion for <span class="highlight-y">Solving</span> <span class="highlight-y">Problems</span>  &amp; <span class="highlight-l">Creating</span> <span class="highlight-l">Things</span>. Nowadays I use this creativity to design and develop cool stuff on the internet.</span>`
          ]}
        />
        {/* <p className="about-fin">click here for the full introduction</p>  */}
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
