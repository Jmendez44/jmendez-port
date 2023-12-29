import React, { useContext } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { __RouterContext } from "react-router";
import { animated, useTransition } from "react-spring";
import Projects from "./Projects";
import Home from "./Home";
import Contact from "./Contact";

const useRouter = () => {
  return useContext(__RouterContext);
};

const Routes = () => {
  return (
    <>
      <div className="links">
        <ul>
          <NavLink exact to="/" activeClassName="activeLink">
            HOME
          </NavLink>
          <NavLink exact to="/projects" activeClassName="activeLink">
            PROJECTS
          </NavLink>
          <NavLink exact to="/contact" activeClassName="activeLink">
            CONTACT
          </NavLink>
        </ul>
      </div>

      <Main />
    </>
  );
};

const Main = () => {
  const { location } = useRouter();
  const transitions = useTransition(location, (location) => location.key, {
    initial: { transform: "scale(1) " },
    from: { transform: "scale(0.2) " },
    enter: { transform: "scale(1) " },
    leave: { transform: "scale(4) ", zIndex: -100 },
  });

  return transitions.map(({ item, props: transition, key }) => (
    <animated.div className="main" key={key} style={transition}>
      <Switch location={item}>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </animated.div>
  ));
};

export default Routes;
