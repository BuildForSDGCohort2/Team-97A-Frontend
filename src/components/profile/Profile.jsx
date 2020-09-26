import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import {
  faUserCircle,
  faShieldAlt,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

import Sidebar from "../mainDashboard/sidebar/sidebar";
import DashboardTop from "../mainDashboard/dashboardTop/dashboardTop";
import "./Profile.css";
import Card from "./Card";

const user = {
  fullname: "Jane Doe",
  phone: "07000000000",
  email: "info@carigo.com",
  address: "No. 12, Kikero Street, Lagos",

  bank: {
    accountName: "Jane Doe",
    accountNumber: "01200023923",
    bankName: "Access Bank",
  },

  verification: {
    bvn: false,
    nin: true,
  },
};

const Profile = (props) => (
  <div className="dashboard-body">
    <h4>Profile</h4>
    <div className="profile-body">
      <div className="profile-left">
        <Card title="Personal Data" topColor="blue">
          <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
          <h5>{props.user.first_name + " " + props.user.last_name}</h5>
          <h5>{props.user.phone_number}</h5>
          <h5>{props.user.email}</h5>
          <h5>{props.user.address}</h5>
          <FontAwesomeIcon icon={faShieldAlt} className="shield-icon" />
        </Card>
      </div>
      <div className="profile-right">
        <Card title="Bank Detail" topColor="#FF6584">
          <h5>{user.bank.accountName}</h5>
          <h5>{user.bank.accountNumber}</h5>
          <h5>{user.bank.bankName}</h5>
        </Card>
        <Card title="Verification" topColor="#40DA86">
          <span>
            <h5>BVN</h5>
            <FontAwesomeIcon
              icon={user.verification.bvn ? faCheckCircle : faTimesCircle}
              size="lg"
              color="#5ED8A2"
            />
          </span>
          <span>
            <h5>Identification</h5>
            <FontAwesomeIcon
              icon={user.verification.nin ? faCheckCircle : faTimesCircle}
              size="lg"
              color="#5ED8A2"
            />
          </span>
        </Card>
        <Card title="Security" topColor="#6C63FF">
          <span>
            <h5>Password</h5>
            <FontAwesomeIcon icon={faLock} size="lg" color="#6C63FF" />
          </span>
        </Card>
      </div>
    </div>
  </div>
);
export default Profile;
