import React from "react";
import "./Style.css";

function Hero() {
  return (
    <div className="Hero">
      <div className="avatar">
        <img src={require("../Assets/avatar_clipart.png")} alt="Avatar" />
      </div>
      <div className="intro-container">
        <h2 className="intro">
          I'M <span className="intro-name">Vyshakh</span>
        </h2>
        <p className="intro-p">Fullstack web developer with 3 years of experience </p>
        <p className="intro-p">
        Currently focusing on frontend roles, specializing in ReactJS.
        </p>
      </div>
    </div>
  );
}
export default Hero;
