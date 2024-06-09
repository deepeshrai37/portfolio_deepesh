import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-scroll";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
         <div className="logo">DEEPESH KUMAR RAI</div>

          <ul>
            <li>
              <Link activeClass="active" to="hero" smooth spy offset={-80} className="menu-item">Home</Link>
            </li>

            <li>
              <Link activeClass="active" to="skills" smooth spy offset={-120} className="menu-item">Skills</Link>
            </li>

            <li>
              <Link activeClass="active" to="work-exp" smooth spy offset={-100} className="menu-item">Work Experience</Link>
            </li>

            <li>
              <Link activeClass="active" to="project" smooth spy offset={-100} className="menu-item">My Projects</Link>
            </li>

            <li>
              <Link activeClass="active" to="contact" smooth spy offset={-100} className="menu-item">Contact Me</Link>
            </li>

            <a href="assets\DocHome - General Dentistry.pdf" download="DocHome_Brochure.pdf">
            <button className="contact-btn" onClick={() => {}}>
              Download Resume
            </button>
            </a>

           
          </ul>

          <button class="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
