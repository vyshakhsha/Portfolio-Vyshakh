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
        <p className="intro-p">Passionate Full Stack Developer with 4 years of experience building scalable and secure web applications.</p>
        <p className="intro-p">
          Skilled in frontend React.js and backend ASP.NET Core with SQL Server to deliver high-quality enterprise solutions.
        </p>
      </div>
    </div>
  );
}
export default Hero;
