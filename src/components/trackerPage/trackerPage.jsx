import React, { Component } from "react";
import closeIcon from "../../images/dashboard/close.png";
import profileImg from "../../images/dashboard/profile-photo1.png";
import TrackerAction from "./trackerAction";
import Tracker from "./tracker";
import "./trackerPage.css";
import e from "express";

class TrackerPage extends Component {
  state = {
    tracker: { confirmed: true, inTransit: false, delivered: false },
    status: "inTransit",
    pin: { pin1: "", pin2: "", pin3: "", pin4: "", pin5: "" },
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
    console.log("confirming delivery");
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
            <h4>
              please call the owner to confirm your misssion and schedule pickup
            </h4>
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
          <div className="pin-input">
            <input
              type="number"
              name="pin1"
              id="pin1"
              placeholder="-"
              value={this.state.pin.pin1}
              onInput={this.handlePinChange}
            />
            <input
              type="number"
              name="pin2"
              id="pin2"
              placeholder="-"
              value={this.state.pin.pin2}
              onInput={this.handlePinChange}
            />
            <input
              type="number"
              name="pin3"
              id="pin3"
              placeholder="-"
              value={this.state.pin.pin3}
              onInput={this.handlePinChange}
            />
            <input
              type="number"
              name="pin4"
              id="pin4"
              placeholder="-"
              value={this.state.pin.pin4}
              onInput={this.handlePinChange}
            />
            <input
              type="number"
              name="pin5"
              id="pin5"
              placeholder="-"
              value={this.state.pin.pin5}
              onInput={this.handlePinChange}
            />
          </div>
          <TrackerAction
            status={this.state.status}
            onConfirmCollection={this.handleConfirmCollection}
            onConfirmDelivery={this.handleConfirmDelivery}
          />
          <Tracker tracker={this.state.tracker} />
        </div>
      </div>
    );
  }
}

export default TrackerPage;
