import React from "react";
import StarRatings from "react-star-ratings";
import profilePhoto from "../../../images/dashboard/profile-photo.png";
import verifiedImg from "../../../images/dashboard/verified.png";
import notificationIcon from "../../../images/dashboard/notification.png";
import powerIcon from "../../../images/dashboard/power.png";
import "./dashboardTop.css";
import { Link } from "react-router-dom";

const DashboardTop = ({ onLogout, user }) => {
  return (
    <React.Fragment>
      <div className="dashboard-top">
        <div className="dashboard-top-left">
          <Link to="/profile/" className="profile-link">
            <div className="profile-photo-container">
              <img src={profilePhoto} alt="" className="profile-photo" />
            </div>
            <div className="user-details">
              <div className="user">
                <div className="greeting">
                  <span>Welcome !</span>
                  <span className="user-name">
                    {user.first_name} {user.last_name}
                  </span>
                </div>
                <div className={user.is_verified ? "verified" : "hide"}>
                  <img
                    src={verifiedImg}
                    alt={user.is_verified ? "verified" : "not verified"}
                  />
                </div>
              </div>
              <div className="user-rating">
                <StarRatings
                  rating={4}
                  starRatedColor="#2AD2BE"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="dashboard-top-right">
          <div className="top-icon-container">
            <img
              src={notificationIcon}
              alt="notification icon"
              className="notification-icon"
            />
          </div>
          <div className="top-icon-container" onClick={onLogout}>
            <img src={powerIcon} alt="power icon" className="power-icon" />
          </div>
        </div>
      </div>
      <div className={!user.is_verified ? "not-verified-warning" : "hide"}>
        you are not yet verified!! <span> click here to verify</span>
      </div>
    </React.Fragment>
  );
};

export default DashboardTop;
