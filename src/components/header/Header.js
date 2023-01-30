import React from "react";
import { header } from "../../portfolio";
import "./Header.scss";
import { arrowNext } from "../share/guideArrow";
import ContactLinks from "./ContactLinks";

class Header extends React.Component {
  render() {
    return (
      <div className="page header-page">
        <div className="greeting">
          <h1 style={{ margin: "0" }}>{header.intro}</h1>
        </div>
        <ContactLinks />
        {arrowNext("#about-page")}
      </div>
    );
  }
}

export default Header;
