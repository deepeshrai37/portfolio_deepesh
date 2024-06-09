import React, { useRef } from "react";
import "./Project.css";
import { PROJECTS_WORK } from "../../utils/data";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard/ProjectCard";

const Project = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section id='project' className="experience-container">
      <h5>My Work and Projects</h5>

      <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>
          <span class="material-symbols-outlined">chevron_right</span>
        </div>

        <div className="arrow-left" onClick={slideLeft}>
          <span class="material-symbols-outlined">chevron_left</span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {PROJECTS_WORK.map((item) => (
            <ProjectCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Project;
