import React from "react";
import { Keyframes, animated } from "react-spring/renderprops";
//import { TimingAnimation, Easing } from '../../../src/addons'

const Container = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { radians: 0, color: "#247BA0" },
      to: { radians: 2 * Math.PI }
    });
  }
});

export default class FloatingIcons extends React.PureComponent {
  state = { items: ["item1"] };

  render() {
    const Content = ({ radians, color }) =>
      this.state.items.map((_, i) => (
        <div className="about me">
          <animated.i
            key={1}
            style={{
              willChange: "transform",
              transform: radians.interpolate(
                r =>
                  `translate3d(0, ${20 *
                    Math.sin(r + 1 + (i * 2 * Math.PI) / 5)}px, 0)`
              )
            }}
            className="fab fa-html5 fa-5x"
          ></animated.i>
          <animated.i
            key={2}
            style={{
              willChange: "transform",
              transform: radians.interpolate(
                r =>
                  `translate3d(0, ${20 *
                    Math.sin(r + 2 + (i * 2 * Math.PI) / 5)}px, 0)`
              )
            }}
            className="fab fa-node fa-5x"
          ></animated.i>
          <animated.i
            key={3}
            style={{
              willChange: "transform",
              transform: radians.interpolate(
                r =>
                  `translate3d(0, ${20 *
                    Math.sin(r + 3 + (i * 2 * Math.PI) / 5)}px, 0)`
              )
            }}
            className="fab fa-react fa-5x"
          ></animated.i>
          <animated.i
            key={4}
            style={{
              willChange: "transform",
              transform: radians.interpolate(
                r =>
                  `translate3d(0, ${20 *
                    Math.sin(r + 1 + (i * 2 * Math.PI) / 5)}px, 0)`
              )
            }}
            className="fab fa-css3-alt fa-5x"
          ></animated.i>
          <animated.i
            key={5}
            style={{
              willChange: "transform",
              transform: radians.interpolate(
                r =>
                  `translate3d(0, ${20 *
                    Math.sin(r + 2 + (i * 2 * Math.PI) / 5)}px, 0)`
              )
            }}
            className="fab fa-python fa-5x"
          ></animated.i>
          <animated.i
            key={6}
            style={{
              willChange: "transform",
              transform: radians.interpolate(
                r =>
                  `translate3d(0, ${20 *
                    Math.sin(r + 3 + (i * 2 * Math.PI) / 5)}px, 0)`
              )
            }}
            className="fab fa-adobe fa-5x"
          ></animated.i>
          <animated.i
            key={7}
            style={{
              willChange: "transform",
              transform: radians.interpolate(
                r =>
                  `translate3d(0, ${20 *
                    Math.sin(r + 1 + (i * 2 * Math.PI) / 5)}px, 0)`
              )
            }}
            className="fab fa-js fa-5x"
          ></animated.i>
          <animated.i
            key={8}
            style={{
              willChange: "transform",
              transform: radians.interpolate(
                r =>
                  `translate3d(0, ${20 *
                    Math.sin(r + 2 + (i * 2 * Math.PI) / 5)}px, 0)`
              )
            }}
            className="fab fa-github fa-5x"
          ></animated.i>
          <animated.img
            key={9}
            style={{
              willChange: "transform",
              transform: radians.interpolate(
                r =>
                  `translate3d(0, ${20 *
                    Math.sin(r + 3 + (i * 2 * Math.PI) / 5)}px, 0)`
              )
            }}
            src={require("./Assets/unity2.png")}
            className="unity"
          />
        </div>
      ));

    const { items } = this.state;

    return (
      <div className="about icons">
        <Container
        
          reset
          native
          keys={items}
          //impl={TimingAnimation}
          config={{ duration: 3500 /*, easing: Easing.linear*/ }}
        >
          {Content}
        </Container>
      </div>
    );
  }
}
