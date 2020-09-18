import React, { Component } from "react";
import closeIcon from "../../images/dashboard/close.png";
import profileImg from "../../images/dashboard/profile-photo1.png";
import TrackerAction from "./ownerTrackerAction";
import Tracker from "./tracker";
import DisplayPin from "./displayPin";
import Rating from "./rating";

class OwnerTracker extends Component {
  state = {
    tracker: { confirmed: true, inTransit: true, delivered: true },
    trackerStatus: "delivered",
    pin: "54345",
    rating: 0,
  };

  changeRating = (newRating, name) => {
    this.setState({
      rating: newRating,
    });
    // send  new rating to backend here
  };

  handleDetailClose = () => {
    this.props.history.push("/packages/");
  };

  handleCancel = () => {};

  render() {
    return (
      <div className="tracker-page">
        <div className="tracker-main animate">
          <h4 className="tracker-status">{this.state.trackerStatus}</h4>
          <img
            onClick={this.handleDetailClose}
            src={closeIcon}
            alt="close"
            className="close"
          />

          <div className="description">
            {this.state.trackerStatus === "confirmed" ? (
              <h4>Your package has been assigned to :</h4>
            ) : this.state.trackerStatus === "inTransit" ? (
              <h4>Your package has been assigned to :</h4>
            ) : (
              <h4>Package successfully delivered to :</h4>
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
          {this.state.trackerStatus === "delivered" ? null : (
            <DisplayPin pin={this.state.pin} />
          )}
          <TrackerAction
            status={this.state.trackerStatus}
            onCancel={this.handleCancel}
          />
          <Tracker tracker={this.state.tracker} />
          <Rating
            rating={this.state.rating}
            trackerStatus={this.state.trackerStatus}
            changeRating={this.changeRating}
          />
        </div>
      </div>
    );
  }
}

export default OwnerTracker;
