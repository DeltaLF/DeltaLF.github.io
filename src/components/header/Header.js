import React from "react";
import { intro } from "../../portfolio";
import "./Header.scss";
import { arrowNext } from "../share/guideArrow";
import ContactLinks from "./ContactLinks";

function Header() {
  return (
    <div className="page header-page">
      <div className="greeting">
        <h1 style={{ margin: "0" }}>{intro.greet}</h1>
      </div>
      <ContactLinks />
      {arrowNext("#about-page")}
    </div>
  );
}

export default Header;
