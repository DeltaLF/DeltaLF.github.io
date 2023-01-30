import React from "react";
import { socialMediaLinks } from "../../portfolio";
import "./contact_links.scss";

function ContactLinks() {
  return (
    <div className="contact-links">
      {socialMediaLinks.map((iconObj) => (
        <a href={iconObj.link} key={iconObj.name}>
          {iconObj.icon}
        </a>
      ))}
    </div>
  );
}

export default ContactLinks;
