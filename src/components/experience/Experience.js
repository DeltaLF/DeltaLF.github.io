import React from "react";
import "./Experience.css";
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
      ({ date, title, jobDesc, skillList, icon }, index) => {
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={date}
            iconStyle={{ background: "#7E846C", color: "#fff" }}
            icon={<i className={icon}></i>}
            key={index}
          >
            <h3 className="vertical-timeline-element-title"> {title}</h3>
            {jobDesc}
            <ol>
              {skillList.map((skill, index) => {
                return (
                  <li key={index}>
                    <div className="expSkill" key={title + skill}>
                      {skill}
                    </div>
                  </li>
                );
              })}
            </ol>
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
