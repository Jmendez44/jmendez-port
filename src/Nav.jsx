import React from 'react';
import {animated} from 'react-spring';

const Nav = ({style}) => {
  return (
    <animated.div className='nav-wrapper' style={style}>
      <nav>
        <a href="#">HOME</a>
        <a href="#">PROJECTS</a>
        <a href="#">CONTACT</a>
      </nav>
    </animated.div>
  )
}

export default Nav
