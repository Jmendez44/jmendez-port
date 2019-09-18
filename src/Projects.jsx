import React, { useState, useEffect } from "react";
import Routes from './Routes'

const Projects = () => {
  const [isToggled, setToggle] = useState(false);
  return (
    <div onLoad={()=>setToggle(!isToggled)} className='projects-container'>
      <div className="me">
     
      </div>
    </div>
  )
}

export default Projects
