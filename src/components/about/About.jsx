import React from "react";
import "./About.scss";
import { intro } from "../../portfolio";
import { arrowNext, arrowPrevious } from "../share/guideArrow";
import ContactLinks from "../header/ContactLinks";

function About() {
  function renderTitle() {
    return intro.greet.map((singleGreet, index) => (
      <h1 key={index}>{singleGreet}</h1>
    ));
  }

  function renderSkills() {
    return intro.softwareSkills.map((skill) => {
      return <li key={skill.skillName}>{skill.skillName}</li>;
    });
  }

  return (
    <div id="about-page" className="about-page">
      <div className="left">
        <div className="left-header">{renderTitle()}</div>
      </div>
      <div className="right">
        <div className="about-page-image">
          <div className="image-cropper">
            <img src={intro.portaitPath} alt="portrait" />
          </div>
        </div>
        {/* 
        <div className="about-page-description">
          {intro.aboutMe.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          <ol>{renderSkills()}</ol>
        </div> */}
      </div>
      <ContactLinks />
      {arrowNext("#experience-page")}
    </div>
  );
}

export default About;
