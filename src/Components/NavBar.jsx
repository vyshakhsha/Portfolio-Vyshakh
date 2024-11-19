import { React, useEffect } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
const body = document.body;

function NavBar() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      body.classList.toggle('no-scroll');
    }

    function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      body.classList.remove('no-scroll');
    }

    hamburger.addEventListener("click", mobileMenu);
    const navLinks = document.querySelectorAll(".linkItem");
    navLinks.forEach((link) => link.addEventListener("click", closeMenu));

    // Cleanup event listeners on component unmount
    return () => {
      hamburger.removeEventListener("click", mobileMenu);
      navLinks.forEach((link) => link.removeEventListener("click", closeMenu));
    };
  }, []);

  return (
    <div className="NavBar">
      <div className="NavBar-logo">
        <img src={require("../Assets/logo.png")} alt="Logo" />
      </div>
      <ul className="nav-menu">
        <li>
          <Link className="linkItem" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="linkItem" to="/skills">
            Skills
          </Link>
        </li>
        <li>
          <Link className="linkItem " to="/experience">
            Experience
          </Link>
        </li>
        <li>
          <Link className="linkItem " to="/education">
            Education
          </Link>
        </li>
        <li>
          <Link className="linkItem " to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="linkItem " to="/profile">
            Profiles
          </Link>
        </li> 
        <li>
          <Link className="linkItem " to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
}

export default NavBar;
