import React, { Component } from "react";
import closeIcon from "../../images/dashboard/close.png";
import "./newPackage.css";

class NewPackage extends Component {
  state = {
    data: {
      pickupAddress: "",
      dileveryAddress: "",
      dileveryPeriod: "",
      cost: "",
      category: "",
      weight: "",
      origin: "",
      destination: "",
      info: "",
      packageImage: "",
    },
  };

  handleDetailClose = () => {
    this.props.history.push("/packages/all");
  };

  handleInput = (e) => {
    const data = { ...this.state.data };
    data[e.target.name] = e.target.value;
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.data);
    // do some submit stuff here
    //
  };
  render() {
    const {
      pickupAddress,
      dileveryAddress,
      dileveryPeriod,
      cost,
      category,
      weight,
      origin,
      destination,
      info,
      packageImage,
    } = this.state.data;

    return (
      <div className="add-package-page">
        <div className="add-package-main animate">
          <h2 className="page-title">Add new Package </h2>
          <img
            onClick={this.handleDetailClose}
            src={closeIcon}
            alt="close"
            className="close"
          />
          <form onSubmit={this.handleSubmit} className="package-form">
            <div className="input-group">
              <div className="input">
                <label htmlFor="pickupAddress">Pick-up Address</label>
                <input
                  onInput={this.handleInput}
                  type="text"
                  name="pickupAddress"
                  id="pickupAddress"
                  value={pickupAddress}
                />
              </div>
            </div>
            <div className="input-group">
              <div className="input">
                <label htmlFor="dileveryAddress">Dilevery Address</label>
                <input
                  onInput={this.handleInput}
                  type="text"
                  name="dileveryAddress"
                  id="dileveryAddress"
                  value={dileveryAddress}
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input">
                <label htmlFor="dileveryPeriod">Dilevery Period</label>
                <span className="input-wrapper">
                  <input
                    onInput={this.handleInput}
                    type="text"
                    name="dileveryPeriod"
                    id="dileveryPeriod"
                    value={dileveryPeriod}
                  />
                  <span className="unit-container">Days</span>
                </span>
              </div>

              <div className="input">
                <label htmlFor="cost">cost</label>
                <span className="input-wrapper">
                  <input
                    onInput={this.handleInput}
                    type="text"
                    name="cost"
                    id="cost"
                    value={cost}
                  />
                  <span className="unit-container">NGN</span>
                </span>
              </div>
            </div>

            <div className="input-group">
              <div className="input">
                <label htmlFor="category">Category</label>
                <span className="input-wrapper">
                  <input
                    onInput={this.handleInput}
                    type="text"
                    name="category"
                    id="category"
                    value={category}
                  />
                </span>
              </div>

              <div className="input">
                <label htmlFor="weight">Weight</label>
                <span className="input-wrapper">
                  <input
                    onInput={this.handleInput}
                    type="text"
                    name="weight"
                    id="weight"
                    value={weight}
                  />
                  <span className="unit-container">KG</span>
                </span>
              </div>
            </div>

            <div className="input-group">
              <div className="input">
                <label htmlFor="origin">Origin</label>
                <span className="input-wrapper">
                  <input
                    onInput={this.handleInput}
                    type="text"
                    name="origin"
                    id="origin"
                    value={origin}
                  />
                </span>
              </div>

              <div className="input">
                <label htmlFor="destination">Destination</label>
                <span className="input-wrapper">
                  <input
                    onInput={this.handleInput}
                    type="text"
                    name="destination"
                    id="destination"
                    value={destination}
                  />
                </span>
              </div>
            </div>

            <div className="input-group">
              <div className="input">
                <label htmlFor="info">Other info</label>
                <input
                  onInput={this.handleInput}
                  type="text"
                  name="info"
                  id="info"
                  value={info}
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input">
                <label htmlFor="packageImage">Package Image</label>
                <input
                  onInput={this.handleInput}
                  type="file"
                  name="packageImage"
                  id="packageImage"
                  value={packageImage}
                />
              </div>
            </div>
            <div className="submit-group">
              <input className="submit" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewPackage;
