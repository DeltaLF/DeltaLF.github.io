import React from "react";
import "./Certificate.scss";
import { certificates } from "../../portfolio";
import { arrowPrevious } from "../share/guideArrow";

class Certificate extends React.Component {
  renderCertificate() {
    return certificates.map(({ title, imgPath, name, url }) => {
      return (
        <div className="card" key={name}>
          <h2>{title}</h2>
          <div className="card-img">
            {url ? (
              <a
                aria-label={`link to Udemy certificate of class ${name}`}
                href={url}
              >
                <img src={imgPath} alt="certificate" loading="lazy" />
              </a>
            ) : (
              <img src={imgPath} alt="certificate" loading="lazy" />
            )}
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="page certificate-page" id="certificate-page">
        <div className="page-header">
          <h1>Certificate</h1>
        </div>
        <div className="page-body">
          <div className="container">{this.renderCertificate()}</div>
        </div>
        {arrowPrevious("#project-page")}
      </div>
    );
  }
}

export default Certificate;
