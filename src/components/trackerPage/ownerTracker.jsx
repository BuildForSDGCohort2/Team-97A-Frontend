import React, { Component } from "react";
import closeIcon from "../../images/dashboard/close.png";
import profileImg from "../../images/dashboard/profile-photo1.png";
import TrackerAction from "./ownerTrackerAction";
import Tracker from "./tracker";
import DisplayPin from "./displayPin";
import Rating from "./rating";
import "./trackerPage.css";

class OwnerTracker extends Component {
  state = {
    rating: 0,
  };

  trackerStatus = () => {
    const tracker = { ...this.props.singlePackage.tracker };
    return tracker.is_delivered === true
      ? "is_delivered"
      : tracker.in_transit === true
      ? "in_transit"
      : tracker.is_confirmed === true
      ? "is_confirmed"
      : null;
  };

  trackerRef = React.createRef();

  changeRating = (newRating, name) => {
    this.setState({
      rating: newRating,
    });
    // send  new rating to backend here
  };

  handleDetailClose = () => {
    this.trackerRef.current.style.display = "none";
  };

  handleCancel = () => {};

  render() {
    const trackerStatus = this.trackerStatus();
    return (
      <div className="tracker-page" ref={this.trackerRef}>
        <div className="tracker-main animate">
          <h4 className="tracker-status">{trackerStatus}</h4>
          <img
            onClick={this.handleDetailClose}
            src={closeIcon}
            alt="close"
            className="close"
          />

          <div className="description">
            {trackerStatus === "is_confirmed" ? (
              <h4>Your package has been assigned to :</h4>
            ) : trackerStatus === "in_transit" ? (
              <h4>Your package has been assigned to :</h4>
            ) : trackerStatus === "in_delivered" ? (
              <h4>Package successfully delivered to :</h4>
            ) : (
              <h4>Your packaged has not yet been assigned</h4>
            )}
          </div>

          <div className="sender">
            <img src={profileImg} alt="profile" />
            <div className="sender-details">
              <div className="detail-container">
                <p className="label">First Name</p>
                <p className="detail">Jeremiah</p>
              </div>
              <div className="detail-container">
                <p className="label">Last Name</p>
                <p className="detail">Abdul</p>
              </div>
              <div className="detail-container">
                <p className="label">Phone Number</p>
                <p className="detail">09055808223</p>
              </div>
            </div>
          </div>

          {trackerStatus === "delivered" ? null : (
            <DisplayPin
              pin={{ ...this.props.singlePackage.security_code }}
              status={trackerStatus}
            />
          )}
          {/* <TrackerAction status={trackerStatus} onCancel={this.handleCancel} /> */}
          <Tracker tracker={{ ...this.props.singlePackage.tracker }} />
          <Rating
            rating={this.state.rating}
            trackerStatus={trackerStatus}
            changeRating={this.changeRating}
          />
        </div>
      </div>
    );
  }
}

export default OwnerTracker;
