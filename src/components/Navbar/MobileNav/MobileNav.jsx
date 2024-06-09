import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  
  const handleScroll = (sectionId) => {
    if(isOpen) toggleMenu();
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <div className="logo">DEEPESH KUMAR RAI</div>

          <ul>
            <li>
              <a href="#hero" onClick={() => handleScroll("hero")} className="menu-item">
                Home
              </a>
            </li>

            <li>
              <a href="#skills "onClick={() => handleScroll("skills")} className="menu-item">
                Skills
              </a>
            </li>

            <li>
              <a href="#work-exp" onClick={() => handleScroll("work-exp")} className="menu-item">
                Work Experience
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => handleScroll("contact")} className="menu-item">
                Contact Me
              </a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
             Download Resume
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
