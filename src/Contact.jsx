import React, { useState, useEffect } from "react";

const Contact = () => {
  const [isToggled, setToggle] = useState(false);
  return (
    <div onLoad={()=>setToggle(!isToggled)} className="contact-container">
      
    </div>
  )
}

export default Contact
