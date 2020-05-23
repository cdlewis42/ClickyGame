import React from "react";
import "./style.css";

function Header(props) {
  return (
    <header className="header">
      <h1>Clicky Game</h1>
      <h2>{props.alertMessage}</h2>
      <br></br>
      <h2>Score: {props.score}</h2>
      <h2>High Score: </h2>
    </header>
  );
}

export default Header;
