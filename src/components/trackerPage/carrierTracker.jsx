import React, { Component } from "react";
import closeIcon from "../../images/dashboard/close.png";
import APIClient from "../../services/dataService";
import TrackerAction from "./carrierTrackerAction";
import Tracker from "./tracker";
import PinForm from "./pinForm";
import Rating from "./rating";
import DisplayPerson from "./displayPerson";

class CarrierTracker extends Component {
  state = { owner: {}, reciever: {} };

  async componentDidMount() {
    try {
      const owner = await APIClient.getSingleUser(
        this.props.singlePackage.owner
      );

      const reciever = {
        first_name: this.props.singlePackage.recievers_first_name,
        last_name: this.props.singlePackage.recievers_last_name,
        phone_number: this.props.singlePackage.recievers_phone_number,
      };

      this.setState({ owner, reciever });
    } catch (e) {}
  }

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
          <h4 className="tracker-status">{trackerStatus}</h4>
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

          <DisplayPerson
            person={
              trackerStatus === "in_transit" || trackerStatus === "is_delivered"
                ? this.state.reciever
                : this.state.owner
            }
          />

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
