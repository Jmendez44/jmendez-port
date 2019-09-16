import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  __RouterContext
} from "react-router-dom";
import { animated, useTransition } from "react-spring";
import Projects from "./Projects";
import Home from "./Home";
import Contact from "./Contact";

function useRouter() {
  return useContext(__RouterContext);
}

const Routes = () => {
  return (
    <>
      <div className="links">
        <ul>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/projects">PROJECTS</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </ul>
      </div>

      <Main />
    </>
  );
};

const Main = () => {
  return (
    <animated.div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </animated.div>
  );
  // const { location } = useRouter();
  // const transitions = useTransition(location, location => location.key, {
  //   from: {
  //     opacity: 0,
  //     transform: "translate3d(100%,0,0)"
  //   },
  //   enter: { opacity: 1, transform: "translate3d(0,0,0)" },
  //   leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  // });

  // return transitions.map(({ item, props: transition, key }) => (
  //   <animated.div className="main" key={key} style={transition}>
  //     <Switch >
  //       <Route exact path="/" component={Home} />
  //       <Route exact path="/projects" component={Projects} />
  //       <Route exact path="/contact" component={Contact} />
  //     </Switch>
  //   </animated.div>
  // ));
};

function NavLink(props) {
  return (
    <li>
      <Link {...props} />
    </li>
  );
}

// const NavLink = (props) => {
//   return (
//     <li>
//       <Link {...props} />
//     </li>
//   );
// }

export default Routes;
