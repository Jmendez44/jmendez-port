import React from "react";

const Borders = () => {
  return (
    <>
      <svg
        
        className="lines"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          stroke="black"
          fill="none"
          strokeWidth="4"
          d="M87 94 h10 v-30"
          vectorEffect="non-scaling-stroke"
        />
        <path
          stroke="black"
          fill="none"
          strokeWidth="4"
          d="M13 6 h-10 v30"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </>
  );
};

export default Borders;
