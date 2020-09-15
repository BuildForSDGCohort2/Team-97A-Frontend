import React, { Component } from "react";
import closeIcon from "../../images/dashboard/close.png";
import "./newPackage.css";

class NewPackage extends Component {
  state = {};

  handleDetailClose = () => {
    this.props.history.push("/packages/");
    //this.detailRef.current.style.display = "none";
  };

  render() {
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
        </div>
      </div>
    );
  }
}

export default NewPackage;
