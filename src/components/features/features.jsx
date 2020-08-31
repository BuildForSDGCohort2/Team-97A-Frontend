import React from "react";
import "./features.css";
import screen from "../../images/screen.svg";

import { useHistory } from "react-router-dom";
import useAnchors from "../../utils/useAnchors";

const Features = () => {
  const history = useHistory();
  useAnchors(history, 750);

  return (
    <div className="features" id="features">
      <div></div>
      <div className="screen-container">
        <img alt="demo screen" src={screen} className="screen" />
        <h2>Features</h2>
      </div>
      <div></div>
      <div>
        <ul className="feature-list">
          <li>
            <h4>&raquo; Unique wallet system</h4>
          </li>
          <li>
            <h4>&raquo; Easy to use Cargo tracker</h4>
          </li>
          <li>
            <h4>&raquo; Carrier rating</h4>
          </li>
          <li>
            <h4>&raquo; Easy navigation</h4>
          </li>
          <li>
            <h4>&raquo; Social space for travellers</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
