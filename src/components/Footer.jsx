import React from "react";
import "./Components.css";
import { FacebookFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faViber } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center py-3">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookFilled
            style={{ fontSize: "24px", color: "white", marginRight: "20px" }}
          />
        </a>
        <a href="https://viber.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faViber}
            style={{ fontSize: "24px", color: "white" }}
          />
        </a>
        <p className=" footer-text mt-2">© 2025 Occult Tarot Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
