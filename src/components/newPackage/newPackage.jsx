import React, { Component } from "react";
import APICLient from "../../services/dataService";
import closeIcon from "../../images/dashboard/close.png";
import "./newPackage.css";
import { toast } from "react-toastify";

class NewPackage extends Component {
  state = {
    user: {},
    data: {
      owner: "",
      carrier: "",
      name: "",
      category: "",
      delivery_period: "",
      description: "",
      dest_address: "",
      pick_address: "",
      destination: "",
      package_image: null,
      price: "",
      priority: "",
      weight: "",
      origin: "",
    },
  };

  async componentDidMount() {
    const user = await APICLient.getCurrentUser();
    this.setState({ user });
  }

  handleDetailClose = () => {
    this.props.history.push("/packages/all");
  };

  handleInput = (e) => {
    const data = { ...this.state.data };
    data[e.target.name] = e.target.value;
    this.setState({ data });
  };

  handleImageInput = (e) => {
    const package_image = e.target.files[0];
    const data = { ...this.state.data };
    data.package_image = package_image;
    this.setState({ data });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.user.is_verified) {
      const data = { ...this.state.data };
      data.owner = this.state.user.id;
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      try {
        const newPackage = await APICLient.createNewPackage(formData);
        console.log(newPackage);
        toast("Package added successfully");
        // push to checkout / payment page here when checkout page is implemented
        this.props.history.push(`/package/${newPackage.id}/`);
      } catch (error) {
        console.log(error.response);
        toast.warn("could not add this package");
      }
    } else {
      toast.error("you are not yet verified.");
    }
  };

  render() {
    const {
      name,
      category,
      delivery_period,
      description,
      dest_address,
      pick_address,
      destination,
      origin,
      price,
      priority,
      weight,
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
              <div className="input half">
                <label htmlFor="dest_address">Package name</label>
                <input
                  onChange={this.handleInput}
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                />
              </div>
              <div className="input half">
                <label htmlFor="description">priority</label>
                <select
                  onChange={this.handleInput}
                  name="priority"
                  id="priority"
                  value={priority}
                >
                  <option value="HIGH">HIGH</option>
                  <option value="MEDIUM">MEDIUM</option>
                  <option value="LOW">LOW</option>
                </select>
              </div>
            </div>
            <div className="input-group">
              <div className="input half">
                <label htmlFor="pick_address">Pick-up Address</label>
                <input
                  onChange={this.handleInput}
                  type="text"
                  name="pick_address"
                  id="pick_address"
                  value={pick_address}
                />
              </div>
              <div className="input half">
                <label htmlFor="dest_address">Dilevery Address</label>
                <input
                  onChange={this.handleInput}
                  type="text"
                  name="dest_address"
                  id="dest_address"
                  value={dest_address}
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input half">
                <label htmlFor="origin">Origin (city)</label>
                <span className="input-wrapper">
                  <input
                    onChange={this.handleInput}
                    type="text"
                    name="origin"
                    id="origin"
                    value={origin}
                  />
                </span>
              </div>

              <div className="input half">
                <label htmlFor="destination">Destination (city)</label>
                <span className="input-wrapper">
                  <input
                    onChange={this.handleInput}
                    type="text"
                    name="destination"
                    id="destination"
                    value={destination}
                  />
                </span>
              </div>
            </div>

            <div className="input-group">
              <div className="input half">
                <label htmlFor="delivery_period">Dilevery Period</label>
                <span className="input-wrapper">
                  <input
                    onChange={this.handleInput}
                    type="text"
                    name="delivery_period"
                    id="delivery_period"
                    value={delivery_period}
                  />
                  <span className="unit-container">Days</span>
                </span>
              </div>

              <div className="input half">
                <label htmlFor="cost">cost</label>
                <span className="input-wrapper">
                  <input
                    onChange={this.handleInput}
                    type="text"
                    name="price"
                    id="price"
                    value={price}
                  />
                  <span className="unit-container">NGN</span>
                </span>
              </div>
            </div>

            <div className="input-group">
              <div className="input half">
                <label htmlFor="category">Category</label>
                <select
                  onChange={this.handleInput}
                  name="category"
                  id="category"
                  value={category}
                >
                  <option value="CLOTHS">CLOTHS</option>
                  <option value="DOCUMENTS">DOCUMENTS</option>
                  <option value="GROCERY">GROCERY</option>
                  <option value="OTHERS">OTHERS</option>
                </select>
              </div>

              <div className="input half">
                <label htmlFor="weight">Weight</label>
                <span className="input-wrapper">
                  <input
                    onChange={this.handleInput}
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
              <div className="input full">
                <label htmlFor="description">Other info</label>
                <input
                  onChange={this.handleInput}
                  type="text"
                  name="description"
                  id="description"
                  value={description}
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input full">
                <label htmlFor="package_image">Package Image</label>
                <input
                  onChange={this.handleImageInput}
                  type="file"
                  name="package_image"
                  id="package_image"
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
