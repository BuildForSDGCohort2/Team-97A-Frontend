import React, { Component } from "react";
import idImg from "../../images/dashboard/id.png";
import closeIcon from "../../images/dashboard/close.png";

export class Modal extends Component {
  render() {
    return (
      <div className="edit-page">
        <div className="edit-modal">
          <img
            // onClick={this.handleDetailClose}
            src={closeIcon}
            alt="close"
            className="close"
          />
          {this.props.children}
          <div className=" submit-group">
            <input className="submit" type="submit" value="Submit" />
          </div>
        </div>
      </div>
    );
  }
}

export class EditVerification extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="title">
          <h3>Edit bank details</h3>
        </div>
        <div className="main col">
          <div className="input-group">
            <div className="input full">
              <label htmlFor="bvn">Bank verification details</label>
              <input type="text" name="" />
            </div>
          </div>
          <div className="input-group">
            <div className="input full">
              <label htmlFor="bvn">Bank verification details</label>
              <input type="text" name="" />
            </div>
          </div>
          <div className="input-group">
            <div className="input full">
              <label htmlFor="bvn">Bank verification details</label>
              <select name="bank" id="bank">
                <option value="Diamond Bank">Diamond Bank</option>
                <option value="First Bank">First Bank</option>
                <option value="Union Bank">Union Bank</option>
                <option value="UBA Bank">UBA Bank</option>
              </select>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class EditBank extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="title">
          <h3>Edit bank details</h3>
        </div>
        <div className="main col">
          <div className="input-group">
            <div className="input full">
              <label htmlFor="bvn">Bank verification details</label>
              <input
                // onInput={this.handleInput}
                type="text"
                name="bvn"
                id="bvn"
                // value={}
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input full">
              <label htmlFor="bvn">Bank verification details</label>
              <input
                // onInput={this.handleInput}
                type="text"
                name="bvn"
                id="bvn"
                // value={}
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input full">
              <label htmlFor="bvn">Bank verification details</label>
              <select name="bank" id="bank">
                <option value="Diamond Bank">Diamond Bank</option>
                <option value="First Bank">First Bank</option>
                <option value="Union Bank">Union Bank</option>
                <option value="UBA Bank">UBA Bank</option>
              </select>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EditBank;
