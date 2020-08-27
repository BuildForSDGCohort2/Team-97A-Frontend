import React from "react";
import { withRouter } from "react-router-dom";
import facebookIcon from "../../images/icons/facebook.png";
import twitterIcon from "../../images/icons/twitter.png";
import phIcon from "../../images/icons/ph.png";
import "./footer.css";

const Footer = (props) => {
  const { location } = props;
  if (location.pathname === "/") {
    return null;
  } else {
    return (
      <div className="footer-container">
        <div className="social-icons">
          <img src={facebookIcon} alt="" className="social-icon" />
          <img src={twitterIcon} alt="" className="social-icon" />
          <img src={phIcon} alt="" className="social-icon" />
        </div>
        <div className="copyright-text">
          Copyright @ Cari<span>Go</span> | All rights reserved 2020
        </div>
      </div>
    );
  }
};

export default withRouter(Footer);
