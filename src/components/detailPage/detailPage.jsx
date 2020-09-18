import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getSinglePackage } from "../../services/fakeDataService";
import closeIcon from "../../images/dashboard/close.png";
import packageImg from "../../images/dashboard/package1.png";
import "./detailPage.css";

class DetailPage extends Component {
  state = {
    data: getSinglePackage(),
  };

  componentDidMount() {}
  detailRef = React.createRef();

  handleDetailClose = () => {
    this.props.history.push("/packages/all");
    this.detailRef.current.style.display = "none";
  };

  render() {
    const {
      id,
      name,
      pickupAddress,
      deliveryAddress,
      deliveryPeriod,
      cost,
      weight,
      origin,
      destination,
      info,
    } = this.state.data;
    return (
      <div className="package-detail-page" ref={this.detailRef}>
        <div className="package-detail-main animate">
          <h2 className="package-sn">Package - {id}</h2>
          <img
            onClick={this.handleDetailClose}
            src={closeIcon}
            alt="close"
            className="close"
          />
          <h2 className="page-title">Package detail</h2>
          <div className="row">
            <div className="detail-left">
              <div className="detail-row">
                <p className="label">Pickup address</p>
                <p className="detail">{pickupAddress}</p>
              </div>
              <div className="detail-row">
                <p className="label">Delivery address</p>
                <p className="detail">{deliveryAddress}</p>
              </div>
              <div className="long-detail-row">
                <div className="detail-row-left">
                  <p className="label">Delivery period</p>
                  <p className="detail">
                    {deliveryPeriod}
                    <span className="unit">days</span>
                  </p>
                </div>
                <div className="detail-row-right">
                  <p className="label">Cost</p>
                  <p className="detail">
                    {cost}
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
                <p className="detail">{info}</p>
              </div>
            </div>
            <div className="detail-right">
              <img src={packageImg} alt="package" />
              <button className="accept-btn">Accept Mission </button>
              {/* display conditionally if user is package carrier or owner */}
              <Link to={`/package/${id}/tracker/`}>
                <p>Tracker</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPage;
