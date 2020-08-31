import React from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";
import bannerImage from "../../images/banner-1.svg";
import person from "../../images/person.svg";
import car from "../../images/car.svg";
import item from "../../images/package.svg";
import CountUp from "react-countup";

import HIW from "../howitworks/hiw";
import Features from "../features/features";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <div className="banner">
          <div className="banner-left">
            <h1>Waybilling</h1>
            <h2>made Easier</h2>
            <p className="intro">
              Ship your cargo equipment, items to any part of <br />
              the country with ease.
              <br />
              <br />
              we connect you with verified and <br />
              vetted carriers at competetive yet effective prices.
            </p>
            <Link to="/getstarted/" className="btn btn-lg btn-secondary">
              Get Started
            </Link>
          </div>
          <div className="banner-right">
            <img src={bannerImage} alt="banner" />
          </div>
        </div>

        <div className="stats">
          <div></div>
          <div className="stats-list">
            <span>
              <img src={person} alt="person icon" />
              <h3>
                <CountUp end={20} duration={5} />+
              </h3>
              <h4>Cargoe Owners</h4>
            </span>

            <span>
              <img src={car} alt="car icon" />
              <h3>
                <CountUp end={203} duration={5} />+
              </h3>
              <h4>Carriers</h4>
            </span>

            <span>
              <img src={item} alt="package icon" />
              <h3>
                <CountUp end={200} duration={5} />+
              </h3>
              <h4>Waybill Transactions</h4>
            </span>
          </div>
          <div></div>
        </div>
      </div>
      <HIW />
      <Features />
    </>
  );
};

export default LandingPage;
