import React, { Component } from "react";
import closeIcon from "../../images/dashboard/close.png";
import profileImg from "../../images/dashboard/profile-photo1.png";
import TrackerAction from "./carrierTrackerAction";
import Tracker from "./tracker";
import PinForm from "./pinForm";
import Rating from "./rating";

class CarrierTracker extends Component {
  state = {};

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

  handleTrackerClose = () => {
    this.trackerRef.current.style.display = "none";
  };

  render() {
    const trackerStatus = this.trackerStatus();
    return (
      <div className="tracker-page " ref={this.trackerRef}>
        <div className="tracker-main animate">
          <h4 className="tracker-status">Pending </h4>
          <img
            onClick={this.handleTrackerClose}
            src={closeIcon}
            alt="close"
            className="close"
          />

          <div className="description">
            {trackerStatus === "is_delivered" ? (
              <h4>Package successfully delivered to</h4>
            ) : trackerStatus === "in_transit" ? (
              <h4>please request delivery code from</h4>
            ) : (
              <h4>
                please call the owner to confirm your misssion and schedule
                pickup
              </h4>
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

          <PinForm
            onPinChange={this.props.onPinChange}
            pin={this.props.pin}
            trackerStatus={trackerStatus}
          />
          <TrackerAction
            status={trackerStatus}
            onConfirmCollection={this.props.onConfirmCollection}
            onConfirmDelivery={this.props.onConfirmDelivery}
          />
          <Tracker tracker={{ ...this.props.singlePackage.tracker }} />
          <Rating rating={this.state.rating} trackerStatus={trackerStatus} />
        </div>
      </div>
    );
  }
}

export default CarrierTracker;
