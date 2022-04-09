import React from "react";
import "./Navbar.css";
import { socialMediaLinks } from "./../../portfolio";

class Navbar extends React.Component {
  renderHeadText() {
    if (window.innerWidth > 600) {
      return {
        Home: "Home",
        About: "About",
        Experience: "Experience",
        Project: "Project",
        Certificate: "Certificate",
      };
    } else {
      return {
        Home: "Home",
        About: "About",
        Experience: "Exp",
        Project: "Project",
        Certificate: "Cert",
      };
    }
  }
  render() {
    const { Home, About, Experience, Project, Certificate } =
      this.renderHeadText();
    return (
      <div id="navbar-main" className="navbar-main">
        <div className="logo">
          <a href={socialMediaLinks[0].link}>
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="navbar-list">
          <ul>
            <li>
              <a href="#">{Home}</a>
            </li>
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
