import React from "react";
import "./css/Main.css";
import Borders from "./Borders";
import Routes from "./Routes";

const App = () => {

  const isMobile = window.innerWidth < 800;
  // const showItems = isMobile ? 1 : 3;

  return (
    <div className="App">
      <Routes />
      <Borders />
    </div>
  );
};

export default App;
