import React from "react";
import "./Navbar.scss";
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
    const { About, Experience, Project, Certificate } = this.renderHeadText();
    return (
      <div id="navbar-main" className="navbar-main">
        <div className="logo">
          <img alt="my personal logo" src={myLogo}></img>
        </div>
        <div className="navbar-list">
          <ul>
            <li>
              <a aria-label={`link of ${About} page`} href="#about-page">
                {About}
              </a>
            </li>
            <li>
              <a
                aria-label={`link of ${Experience} page`}
                href="#experience-page"
              >
                {Experience}
              </a>
            </li>
            <li>
              <a aria-label={`link of ${Project} page`} href="#project-page">
                {Project}
              </a>
            </li>
            <li>
              <a
                aria-label={`link of ${Certificate} page`}
                href="#certificate-page"
              >
                {Certificate}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Navbar;
