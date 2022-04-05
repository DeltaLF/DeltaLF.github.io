import React from "react";
import "./Project.css";
import { project } from "../../portfolio";

class Project extends React.Component {
  renderProjects() {
    return project.map(({ title, imgPath, url, projectDesc }, index) => {
      return (
        <div className="card" key={index}>
          <div className="card-img">
            <a href={url}>
              <img src={imgPath} alt="project image" />
            </a>
          </div>
          <div className="card-body">
            <h2>{title}</h2>
            <div>
              <a href={url} className="card-btn">
                Check it
              </a>
            </div>

            {/* <p>{projectDesc}</p> */}
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="page project-page" id="project-page">
        <div className="page-header">
          <h1>Projects</h1>
        </div>

        <div className="page-body">
          <div className="container">{this.renderProjects()}</div>
        </div>
      </div>
    );
  }
}

export default Project;
