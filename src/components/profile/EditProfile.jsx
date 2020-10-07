import React, { Component } from "react";
import idImg from "../../images/dashboard/id.png";

export class EditVerification extends Component {
  state = {};
  render() {
    const { onInputChange, data } = this.props;
    return (
      <React.Fragment>
        <div className="title">
          <h3>Edit Verification details</h3>
        </div>
        <div className="main">
          <div className="left">
            <form action="">
              <div className="input-group">
                <div className="input full">
                  <label htmlFor="bvn">NIN</label>
                  <input
                    onChange={onInputChange}
                    type="text"
                    name="NIN"
                    id="NIN"
                    value={data.NIN}
                  />
                </div>
              </div>
              <div className="input-group">
                <div className="input full">
                  <label htmlFor="id_type">Type of ID</label>
                  <select
                    value={data.id_type}
                    onChange={onInputChange}
                    name="id_type"
                    id="id_type"
                  >
                    <option value="Drivers License">Drivers License</option>
                    <option value="Voters card">Voters card</option>
                    <option value="Inpernational Passport">
                      Inpernational Passport
                    </option>
                  </select>
                </div>
              </div>
              <div className="input-group">
                <div className="input full">
                  <label htmlFor="">upload ID</label>
                  <input
                    onChange={onInputChange}
                    type="file"
                    name="upload_id"
                    id="upload_id"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="right">
            <img src={data.upload_id ? data.upload_id : idImg} alt="user ID" />
          </div>
        </div>
        <div onClick={this.props.onSubmit} className=" submit-group">
          <input className="submit" type="submit" value="Submit" />
        </div>
      </React.Fragment>
    );
  }
}

export class EditBank extends Component {
  render() {
    const { onInputChange, data } = this.props;
    return (
      <React.Fragment>
        <div className="title">
          <h3>Edit bank details</h3>
        </div>
        <div className="main col">
          <div className="input-group">
            <div className="input half">
              <label htmlFor="bvn">account Name</label>
              <input
                value={data.account_name}
                onChange={onInputChange}
                type="text"
                name="account_name"
                id="account_name"
              />
            </div>

            <div className="input half">
              <label htmlFor="bvn">Account Number</label>
              <input
                value={data.account_number}
                onChange={onInputChange}
                type="text"
                name="account_number"
                id="account_number"
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input half">
              <label htmlFor="bvn">BVN</label>
              <input
                value={data.BVN}
                onChange={onInputChange}
                type="text"
                name="BVN"
                id="BVN"
              />
            </div>
            <div className="input half">
              <label htmlFor="bank">Bank </label>
              <select
                value={data.bank}
                onChange={onInputChange}
                name="bank_name"
                id="bank"
              >
                <option value="Diamond Bank">Diamond Bank</option>
                <option value="First Bank">First Bank</option>
                <option value="Union Bank">Union Bank</option>
                <option value="UBA Bank">UBA Bank</option>
              </select>
            </div>
          </div>
        </div>
        <div onClick={this.props.onSubmit} className=" submit-group">
          <input className="submit" type="submit" value="Next" />
        </div>
      </React.Fragment>
    );
  }
}

export class EditPersonalDetails extends Component {
  state = {};
  render() {
    const { onInputChange, onSubmit } = this.props;
    const {
      first_name,
      last_name,
      phone_number,
      email,
      address,
    } = this.props.data;
    return (
      <React.Fragment>
        {" "}
        <div className="title">
          <h3>Edit personal details</h3>
        </div>
        <div className="main col">
          <div className="input-group">
            <div className="input half">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                value={first_name}
                onChange={onInputChange}
              />
            </div>
            <div className="input half">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                value={last_name}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input half">
              <label htmlFor="">Phone Number</label>
              <input
                type="text"
                name="phone_number"
                id="phone_number"
                value={phone_number}
                onChange={onInputChange}
              />
            </div>
            <div className="input half">
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input full">
              <label htmlFor="">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                value={address}
                onChange={onInputChange}
              />
            </div>
          </div>
        </div>
        <div className=" submit-group">
          <input
            onClick={onSubmit}
            className="submit"
            type="submit"
            value="Submit"
          />
        </div>
      </React.Fragment>
    );
  }
}
