import React from "react";
import "./About.css";
import { aboutPage } from "../../portfolio";
import { Fade } from "react-reveal";

class About extends React.Component {
  renderSkills() {
    return aboutPage.softwareSkills.map((skill) => {
      return (
        <li key={skill.skillName}>
          {skill.skillName}{" "}
          <span
            className="iconify"
            data-icon={skill.fontAwesomeClassname}
            style={skill.style}
            data-inline="false"
          ></span>{" "}
        </li>
      );
    });
  }
  render() {
    return (
      <div id="about-page" className="about-page">
        <Fade left duration={2000}>
          <div className="left">
            <div className="left-header">
              {" "}
              <h1>About</h1>
            </div>
            {aboutPage.aboutMe.map((line, index) => (
              <p key={index}>{line}</p>
            ))}

            <div className="left-header">
              <h3>Skills:</h3>
            </div>

            <ol>{this.renderSkills()}</ol>
          </div>
        </Fade>
        <Fade right>
          <div className="right" duration={2000}>
            <img className="" src={aboutPage.portaitPath} alt="portrait" />
          </div>
        </Fade>
      </div>
    );
  }
}

export default About;
