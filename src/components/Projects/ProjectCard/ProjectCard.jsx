import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ details }) => {
  return (
    <div className="project-card">
      <h6>{details.title}</h6>

      <div className="project-duration">
        <a href={details.github_url}>
        Check out Github Repo
          </a></div>

      <div className="imagecontainer">
        {details.images.map((item) => (
          <div className="image">
            <img src={item} alt=""></img>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
