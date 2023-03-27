import React from "react";
import "./Experience.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "./../../portfolio";
import { arrowNext, arrowPrevious } from "../share/guideArrow";

class Experience extends React.Component {
  renderVerticalTimelineElement() {
    return experience.map(
      ({ date, imgPath, title, jobTitle, jobDesc, skillList, icon }, index) => {
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date={date}
            iconStyle={{ background: "#7E846C", color: "#fff" }}
            icon={<i className={icon}></i>}
            key={index}
          >
            <div className="vertical-timeline-element-header">
              <div className="vertical-timeline-element-avatar">
                <img src={imgPath} alt={title} loading="lazy" />
              </div>
              <div className="vertical-timeline-element-title">
                <h3> {title}</h3>
                <h5>{jobTitle}</h5>
              </div>
            </div>
            <div className="vertical-timeline-element-description">
              {jobDesc}
            </div>
            <div className="vertical-timeline-element-skill">
              <ol>
                {skillList.map((skill, index) => {
                  return <li key={title + skill}>{skill}</li>;
                })}
              </ol>
            </div>
          </VerticalTimelineElement>
        );
      }
    );
  }
  render() {
    return (
      <div className="page" id="experience-page">
        <div className="page-header">
          <h1>Experience</h1>
        </div>

        <div className="page-body">
          <VerticalTimeline>
            {this.renderVerticalTimelineElement()}
            <VerticalTimelineElement
              iconStyle={{
                background: "#7E846C",
                color: "#fff",
              }}
              icon={<i className="fas fa-hourglass-start mx-auto"></i>}
            />
          </VerticalTimeline>
        </div>
        {arrowPrevious("#about-page")}
        {arrowNext("#project-page")}
      </div>
    );
  }
}

export default Experience;
