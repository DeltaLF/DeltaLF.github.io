import React from "react";
import "./About.scss";
import { aboutPage } from "../../portfolio";
import { arrowNext, arrowPrevious } from "../share/guideArrow";

class About extends React.Component {
  renderSkills() {
    return aboutPage.softwareSkills.map((skill) => {
      return (
        <li key={skill.skillName}>
          {skill.skillName}
          <span
            className="iconify"
            data-icon={skill.fontAwesomeClassname}
            style={skill.style}
            data-inline="false"
          ></span>
        </li>
      );
    });
  }
  render() {
    return (
      <div id="about-page" className="about-page">
        <div className="left">
          <div className="left-header">
            <h1>About</h1>
          </div>
          {aboutPage.aboutMe.map((line, index) => (
            <p key={index}>{line}</p>
          ))}

          <h3>Skills:</h3>
          <ol>{this.renderSkills()}</ol>
        </div>
        <div className="right" duration={2000}>
          <img className="" src={aboutPage.portaitPath} alt="portrait" />
        </div>
        {arrowPrevious("#")}
        {arrowNext("#experience-page")}
      </div>
    );
  }
}

export default About;
