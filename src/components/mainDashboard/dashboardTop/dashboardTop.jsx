import React from "react";
import profilePhoto from "../../../images/dashboard/profile-photo.png";
import ratingImg from "../../../images/dashboard/rating.png";
import verifiedImg from "../../../images/dashboard/verified.png";
import notificationIcon from "../../../images/dashboard/notification.png";
import powerIcon from "../../../images/dashboard/power.png";
import "./dashboardTop.css";

const DashboardTop = () => {
  return (
    <div className="dashboard-top">
      <div className="dashboard-top-left">
        <div className="profile-photo-container">
          <img src={profilePhoto} alt="" className="profile-photo" />
        </div>
        <div className="user-details">
          <div className="user">
            <div className="greeting">
              <span>Welcome !</span>
              <span className="user-name">Jeremiah Abdul</span>
            </div>
            <div className="verified">
              <img src={verifiedImg} alt="verified" />
            </div>
          </div>
          <div className="user-rating">
            <img src={ratingImg} alt="" className="rating" />
          </div>
        </div>
      </div>
      <div className="dashboard-top-right">
        <div className="top-icon-container">
          <img
            src={notificationIcon}
            alt="notification icon"
            className="notification-icon"
          />
        </div>
        <div className="top-icon-container">
          <img src={powerIcon} alt="power icon" className="power-icon" />
        </div>
      </div>
    </div>
  );
};

export default DashboardTop;
