import React from "react";
import profileImg from "../../images/dashboard/profile-photo1.png";

const DisplayPerson = ({ person }) => {
  return (
    <div className="sender">
      <img src={profileImg} alt="profile" />
      <div className="sender-details">
        <div className="detail-container">
          <p className="label">First Name</p>
          <p className="detail">{person.first_name}</p>
        </div>
        <div className="detail-container">
          <p className="label">Last Name</p>
          <p className="detail">{person.last_name}</p>
        </div>
        <div className="detail-container">
          <p className="label">Phone Number</p>
          <p className="detail">{person.phone_number}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayPerson;
