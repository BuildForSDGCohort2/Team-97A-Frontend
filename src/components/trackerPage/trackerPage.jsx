import React, { Component } from "react";
import closeIcon from "../../images/dashboard/close.png";
import profileImg from "../../images/dashboard/profile-photo1.png";
import TrackerAction from "./trackerAction";
import Tracker from "./tracker";
import PinForm from "./pinForm";
import Rating from "./rating";
import "./trackerPage.css";

class TrackerPage extends Component {
  state = {
    tracker: { confirmed: true, inTransit: false, delivered: false },
    trackerStatus: "confirmed",
    pin: { pin1: "", pin2: "", pin3: "", pin4: "", pin5: "" },
    rating: 3,
  };

  handleDetailClose = () => {
    this.props.history.push("/packages/");
  };

  handlePinChange = (e) => {
    e.preventDefault();
    const pin = { ...this.state.pin };
    pin[e.target.name] = e.target.value;
    this.setState({ pin });
  };

  handleConfirmCollection = () => {
    console.log("confirming collection");
  };

  handleConfirmDelivery = () => {
    const pin = Object.values(this.state.pin).join("");
    console.log(pin);
    //send pin to backend here
  };

  render() {
    return (
      <div className="tracker-page">
        <div className="tracker-main animate">
          <h4 className="tracker-status">Pending </h4>
          <img
            onClick={this.handleDetailClose}
            src={closeIcon}
            alt="close"
            className="close"
          />

          <div className="description">
            {this.state.trackerStatus === "confirmed" ? (
              <h4>
                please call the owner to confirm your misssion and schedule
                pickup
              </h4>
            ) : this.state.trackerStatus === "inTransit" ? (
              <h4>please request delivery code from</h4>
            ) : (
              <h4>Package successfully delivered to</h4>
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
            onPinChange={this.handlePinChange}
            pin={this.state.pin}
            trackerStatus={this.state.trackerStatus}
          />
          <TrackerAction
            status={this.state.trackerStatus}
            onConfirmCollection={this.handleConfirmCollection}
            onConfirmDelivery={this.handleConfirmDelivery}
          />
          <Tracker tracker={this.state.tracker} />
          <Rating
            rating={this.state.rating}
            trackerStatus={this.state.trackerStatus}
          />
        </div>
      </div>
    );
  }
}

export default TrackerPage;
