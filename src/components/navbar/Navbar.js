import React from "react";
import "./Navbar.css";
import { myLogo } from "../../portfolio";

class Navbar extends React.Component {
  renderHeadText() {
    if (window.innerWidth > 600) {
      return {
        About: "About",
        Experience: "Experience",
        Project: "Project",
        Certificate: "Certificate",
      };
    } else {
      return {
        About: "About",
        Experience: "Exp",
        Project: "Project",
        Certificate: "Cert",
      };
    }
  }
  render() {
    const { About, Experience, Project, Certificate } =
      this.renderHeadText();
    return (
      <div id="navbar-main" className="navbar-main">
        <div className="logo">
          <a href="#">
            <img src={myLogo}></img>
          </a>
        </div>
        <div className="navbar-list">
          <ul>
            <li>
              <a href="#about-page">{About}</a>
            </li>
            <li>
              <a href="#experience-page">{Experience}</a>
            </li>
            <li>
              <a href="#project-page">{Project}</a>
            </li>
            <li>
              <a href="#certificate-page">{Certificate}</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Navbar;
