import React from "react";
import "./Project.scss";
import { project } from "../../portfolio";
import { arrowNext, arrowPrevious } from "../share/guideArrow";

class Project extends React.Component {
  renderProjects() {
    return project.map(
      ({ title, imgPath, url, githubUrl, projectDesc }, index) => {
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
                  WebSite
                </a>
                <a href={githubUrl} className="card-btn">
                  Github
                </a>
              </div>

              {/* <p>{projectDesc}</p> */}
            </div>
          </div>
        );
      }
    );
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
        {arrowPrevious("#experience-page")}
        {arrowNext("#certificate-page")}
      </div>
    );
  }
}

export default Project;
