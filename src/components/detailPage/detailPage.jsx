import React, { Component } from "react";
import closeIcon from "../../images/dashboard/close.png";
import APICLient from "../../services/dataService";
import OwnerTracker from "./../trackerPage/ownerTracker";
import CarrierTracker from "../trackerPage/carrierTracker";
import { toast } from "react-toastify";
import "./detailPage.css";

class DetailPage extends Component {
  state = {
    singlePackage: {},
    inputPin: { pin1: "", pin2: "", pin3: "", pin4: "", pin5: "" },
  };
  trackerRef = React.createRef();

  async componentDidMount() {
    const packageID = this.props.match.params.id;
    const singlePackage = await APICLient.getSinglePackage(packageID);
    this.setState({ singlePackage: singlePackage });
  }

  detailRef = React.createRef();

  handleDetailClose = () => {
    this.props.history.push("/packages/all/");
    // this.detailRef.current.style.display = "none";
  };

  handlePinChange = (e) => {
    e.preventDefault();
    const inputPin = { ...this.state.inputPin };
    inputPin[e.target.name] = e.target.value;
    this.setState({ inputPin });
  };

  handleConfirmCollection = async () => {
    const originalPackage = { ...this.state.singlePackage };
    const modifiedPackage = { ...this.state.singlePackage };
    try {
      const tracker = { ...this.state.singlePackage.tracker };
      tracker.in_transit = true;
      modifiedPackage.tracker = tracker;
      this.setState({ singlePackage: modifiedPackage });

      const newTracker = await APICLient.updateTracker(tracker);
      console.log("confirming collection", newTracker);
      toast("collection confirmed");
    } catch (e) {
      this.setState({ singlePackage: originalPackage });
      toast.warn("could not confirm delivery at this point");
    }
  };

  handleConfirmDelivery = async () => {
    const pin = Object.values(this.state.inputPin).join("");
    if (pin === this.state.singlePackage.security_code) {
      const originalPackage = { ...this.state.singlePackage };
      const modifiedPackage = { ...this.state.singlePackage };
      try {
        const tracker = { ...this.state.singlePackage.tracker };
        tracker.is_delivered = true;
        modifiedPackage.tracker = tracker;
        this.setState({ singlePackage: modifiedPackage });

        //update tracker to confirmed
        await APICLient.updateTracker(tracker);
        toast("Delivery confirmed");

        // transfer money from owner's wallet to carrier
        APICLient.transerFunds(modifiedPackage);
      } catch (e) {
        this.setState({ singlePackage: originalPackage });
        toast.warn("could not confirm delivery at this moment");
      }
    } else {
      toast.error("incorrect pin");
    }
  };

  handleAcceptMission = async () => {
    const originalPackage = { ...this.state.singlePackage };
    const modifiedPackage = { ...this.state.singlePackage };
    const packagePayload = {};
    packagePayload.id = originalPackage.id;
    packagePayload.carrier = this.props.user.id;
    modifiedPackage.carrier = this.props.user.id;
    try {
      this.setState({ singlePackage: modifiedPackage });
      await APICLient.updatePackage(packagePayload);
      toast("you have been assigned this package");
    } catch (e) {
      console.log(e.response);
      this.setState({ singlePackage: originalPackage });
      toast.error("could not assign this package to you");
    }
  };

  render() {
    const {
      id,
      name,
      priority,
      pick_address,
      dest_address,
      delivery_period,
      price,
      weight,
      origin,
      destination,
      description,
      package_image,
      owner,
      carrier,
    } = this.state.singlePackage;
    return (
      <div className="package-detail-page" ref={this.detailRef}>
        <div className="package-detail-main animate">
          <h3 className="package-sn">Package - {id}</h3>
          <img
            onClick={this.handleDetailClose}
            src={closeIcon}
            alt="close"
            className="close"
          />
          <h3 className="page-title">Package detail</h3>
          <div className="row">
            <div className="detail-left">
              <div className="long-detail-row">
                <div className="detail-row-left">
                  <p className="label">Name</p>
                  <p className="detail">{name}</p>
                </div>
                <div className="detail-row-right">
                  <p className="label">Priority</p>
                  <p className={priority + " detail detail-priority"}>
                    {priority}
                  </p>
                </div>
              </div>
              <div className="detail-row">
                <p className="label">Pickup address</p>
                <p className="detail">{pick_address}</p>
              </div>
              <div className="detail-row">
                <p className="label">Delivery address</p>
                <p className="detail">{dest_address}</p>
              </div>
              <div className="long-detail-row">
                <div className="detail-row-left">
                  <p className="label">Delivery period</p>
                  <p className="detail">
                    {delivery_period}
                    <span className="unit">days</span>
                  </p>
                </div>
                <div className="detail-row-right">
                  <p className="label">price</p>
                  <p className="detail">
                    {price}
                    <span className="unit">NGN</span>
                  </p>
                </div>
              </div>
              <div className="long-detail-row">
                <div className="detail-row-left">
                  <p className="label">Name</p>
                  <p className="detail">{name}</p>
                </div>
                <div className="detail-row-right">
                  <p className="label">Weight</p>
                  <p className="detail">
                    {weight} <span className="unit">KG</span>
                  </p>
                </div>
              </div>
              <div className="long-detail-row">
                <div className="detail-row-left">
                  <p className="label">Origin</p>
                  <p className="detail">{origin}</p>
                </div>
                <div className="detail-row-right">
                  <p className="label">Destination</p>
                  <p className="detail">{destination}</p>
                </div>
              </div>
              <div className="detail-row">
                <p className="label">other info</p>
                <p className="detail">{description}</p>
              </div>
            </div>
            <div className="detail-right">
              <img src={package_image} alt="package" />

              {/* show tracker prompt only when user is the owner or carrier */}
              {this.props.user.id === owner ||
              this.props.user.id === carrier ? (
                <p
                  className="show-tracker"
                  onClick={() => {
                    document.querySelector(".tracker-page").style.display =
                      "flex";
                  }}
                >
                  Tracker{" "}
                  {this.props.user.id === owner
                    ? "(Belongs to you)"
                    : "(Assigned to you)"}
                </p>
              ) : (
                <button
                  className="accept-btn"
                  onClick={this.handleAcceptMission}
                >
                  Accept Mission
                </button>
              )}

              {/* display different tracker conditionally if user is package carrier or owner */}
              {this.props.user.id === owner ? (
                <OwnerTracker singlePackage={{ ...this.state.singlePackage }} />
              ) : this.props.user.id === carrier ? (
                <CarrierTracker
                  singlePackage={{ ...this.state.singlePackage }}
                  onConfirmCollection={this.handleConfirmCollection}
                  onConfirmDelivery={this.handleConfirmDelivery}
                  onPinChange={this.handlePinChange}
                  pin={this.state.inputPin}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPage;
