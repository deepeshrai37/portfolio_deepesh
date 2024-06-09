import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Full Stack Web Developer and Mobile App Developer</h2>
        <p>
          Passionate Full Stack Developer | Flutter App Developer  | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/img01.png" alt="" />
          </div>
          <img src="./assets/images/personal.jpeg" alt="" style={{borderRadius:"50%" ,clipPath:"padding-box"}} />
          <div className="tech-icon">
            <img src="./assets/images/next.png" alt="" />
          </div>
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/img02.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img03.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/nodejs-logo-1.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/flutter.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/mongo1.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img04.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
