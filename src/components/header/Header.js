import React from "react";
import { header } from "../../portfolio";
import "./Header.css";
import { arrowNext } from "../share/guideArrow";

class Header extends React.Component {
  render() {
    return (
      <div className="page header-page">
        <div className="greeting">
          <h1 style={{margin:'0'}}>{header.intro}</h1>
        </div>
        {arrowNext("#about-page")}
      </div>
    );
  }
}

export default Header;
