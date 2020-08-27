import React from "react";
import "./features.css";
import screen from "../../images/screen.svg";

const Features = () => {
  return (
    <div className="features">
      <div></div>
      <div>
        <img alt="demo screen" src={screen} className="screen" />
      </div>
      <div></div>
      <div>
        <ul className="feature-list">
          <li>
            <h4>&raquo; Unique Wallet System</h4>
          </li>
          <li>
            <h4>&raquo; Easy to use Cargo tracker</h4>
          </li>
          <li>
            <h4>&raquo; Carrier Rating</h4>
          </li>
          <li>
            <h4>&raquo; Easy Navigation</h4>
          </li>
          <li>
            <h4>&raquo; View Carriers Travelling photos</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
