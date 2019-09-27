import React from "react";
import "./css/Main.css";
import useTypewriter from "react-typewriter-hook";
import Typed from "typed.js";

class TypedReact extends React.Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 20,
      backSpeed: 20
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div className="wrap">
        <span
          ref={el => {
            this.el = el;
          }}
        />

        {/* <button onClick={() => this.typed.toggle()}>Toggle</button>
        <button onClick={() => this.typed.start()}>Start</button>
        <button onClick={() => this.typed.stop()}>Stop</button>
        <button onClick={() => this.typed.reset()}>Reset</button>
        <button onClick={() => this.typed.destroy()}>Destroy</button> */}
      </div>
    );
  }
}

export default TypedReact;

// ReactDOM.render(
// 	<TypedReactDemo
//     strings={[
//     	'Some <i>strings</i> are slanted',
//       'Some <strong>strings</strong> are bold',
//       'HTML characters &times; &copy;'
//     ]}
//   />,
//   document.getElementById('react-root')
// );
