import React, { useState } from "react";
import {useSpring, animated} from 'react-spring';

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const fade = useSpring({
    // opacity: isToggled ? 1 : 0,
    fontSize: !isToggled ? '2rem' : '20em',
    color: isToggled ? '#000' : 'blue'
  })
  return (
    <div>
      <animated.h1 style={fade}>HEllo</animated.h1>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  );
};

export default Toggle;
