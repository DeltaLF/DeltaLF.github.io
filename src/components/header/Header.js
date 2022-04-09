import React from "react";
import Typical from "react-typical";
import { header } from "../../portfolio";
import "./Header.css";
import { arrowNext } from "../share/guideArrow";

class Header extends React.Component {
  render() {
    return (
      <div className="page header-page">
        <div className="greeting">
          <Typical steps={header.intro} loop={Infinity} wrapper="p"></Typical>
        </div>
        {arrowNext("#about-page")}
      </div>
    );
  }
}

export default Header;
