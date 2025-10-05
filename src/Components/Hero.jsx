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
        <p className="intro-p">Passionate Full Stack Developer with 4 years of experience, building robust, scalable, and secure web applications.</p>
        <p className="intro-p">
         I specialize in both frontend (React.js) and backend (ASP.NET Core, SQL Server) development, delivering high-quality enterprise solutions.
        </p>
      </div>
    </div>
  );
}
export default Hero;
