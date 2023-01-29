import React from "react";
import "./Certificate.scss";
import { certificates } from "../../portfolio";
import { arrowPrevious } from "../share/guideArrow";

class Certificate extends React.Component {
  renderCertificate() {
    return certificates.map((certificate, ind) => {
      return (
        <div className="card" key={ind}>
          <h2>{certificate.title}</h2>
          <div className="card-img">
            <img src={certificate.imgPath} alt="certificate" />
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
