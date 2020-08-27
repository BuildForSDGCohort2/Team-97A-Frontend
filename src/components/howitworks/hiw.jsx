import React from "react";
import "./hiw.css";
import step_1 from "../../images/steps/1.svg";
import step_2 from "../../images/steps/2.svg";
import step_3 from "../../images/steps/3.svg";
import step_4 from "../../images/steps/4.svg";

const HIW = () => {
  return (
    <div className="hiw">
      <div></div>
      <div>
        <ul className="steps">
          <li>
            <h2>How it Works</h2>
            <img alt="step 1" src={step_1} />
            <h4>Post your Cargo</h4>
          </li>
          <li>
            <img alt="step 2" src={step_2} />
            <h4>Accept Bid</h4>
          </li>
          <li>
            <img alt="step 3" src={step_3} />
            <h4>
              Deliver Cargo
              <br />
              to Carrier
            </h4>
          </li>
          <li>
            <img alt="step 4" src={step_4} />
            <h4>
              Cargo get to <br />
              its destination Safely
            </h4>
          </li>
        </ul>
        <div className="step-line"></div>
        <ul className="step-line-numbers">
          <li>
            <h4>1</h4>
          </li>
          <li>
            <h4>2</h4>
          </li>
          <li>
            <h4>3</h4>
          </li>
          <li>
            <h4>4</h4>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default HIW;
