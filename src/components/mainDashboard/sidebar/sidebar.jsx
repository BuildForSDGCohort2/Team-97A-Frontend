import React from "react";
import logo from "../../../images/dashboard/CariGo.png";
import homeIcon from "../../../images/dashboard//home.png";
import packageIcon from "../../../images/dashboard//package.png";
import profileIcon from "../../../images/dashboard//profile.png";
import fileIcon from "../../../images/dashboard//file.png";
import sendIcon from "../../../images/dashboard//send.png";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-logo">
        <Link to="/">
          <img src={logo} alt="" className="icon" />
        </Link>
      </div>
      <div className="sidebar-menu">
        <div title="dashboard home" className="sidebar-menu-item">
          <Link to="/packages/all/">
            <img src={homeIcon} alt="" className="icon" />
          </Link>
        </div>
        <div title="my packages" className="sidebar-menu-item">
          <Link to="/packages/mine/">
            <img src={packageIcon} alt="" className="icon" />
          </Link>
        </div>
        <div title="My profile" className="sidebar-menu-item">
          <Link to="/profile/">
            <img src={profileIcon} alt="" className="icon" />
          </Link>
        </div>
        <div title="My wallet" className="sidebar-menu-item">
          <img src={fileIcon} alt="" className="icon" />
        </div>
        <div className="sidebar-menu-item">
          <img src={sendIcon} alt="" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
