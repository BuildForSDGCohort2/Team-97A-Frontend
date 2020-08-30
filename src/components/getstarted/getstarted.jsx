import carImg from "../../images/car.png";
import React, { Component } from "react";
import "./getstarted.css";
import { Link } from "react-router-dom";
import CustomInput from "./customInput";

class GetStarted extends Component {
  state = {
    data: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
      password1: "",
      address: "",
      state: "",
    },
    errors: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
      password1: "",
      address: "",
      state: "",
    },
  };

  handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const data = { ...this.state.data };
    data[fieldName] = fieldValue;
    this.setState({ data });
    console.log(data);
  };

  render() {
    return (
      <div className="getstarted">
        <div className="getstarted-left">
          <h1 className="intro">
            Sign up as a <span>Carrier</span>
          </h1>
          <h1 className="intro-sm">Sign up</h1>
          <div className="getstarted-img-container">
            <img src={carImg} alt="getstarted-img" className="getstarted-img" />
          </div>
        </div>
        <div className="getstarted-right">
          <div className="form-container">
            <form action="" method="post" className="signup-form">
              <CustomInput
                name="first_name"
                label="First name"
                data={this.state.data.first_name}
                handleChange={this.handleChange}
              />
              <CustomInput
                name="last_name"
                label="Last name"
                data={this.state.data.last_name}
                handleChange={this.handleChange}
              />
              <CustomInput
                name="phone_number"
                label="Phone number"
                data={this.state.data.phone_number}
                handleChange={this.handleChange}
              />
              <CustomInput
                name="email"
                label="Email"
                type="email"
                data={this.state.data.email}
                handleChange={this.handleChange}
              />
              <CustomInput
                name="password"
                label="Password"
                type="password"
                data={this.state.data.password}
                handleChange={this.handleChange}
              />
              <CustomInput
                name="password1"
                label="Confirm Password"
                type="password"
                data={this.state.data.password1}
                handleChange={this.handleChange}
              />

              <CustomInput
                name="address"
                label="Address"
                data={this.state.data.address}
                handleChange={this.handleChange}
              />

              <div className="inp-grp">
                <select
                  onChange={this.handleChange}
                  name="state"
                  id=""
                  value={this.state.data.state}
                >
                  <option value="abia">Abia</option>
                  <option value="adamawa">Adamawa</option>
                  <option value="bauchi">Bauchi</option>
                  <option value="benue">Benue</option>
                  <option value="crossriver">Cross-river</option>
                  <option value="delta">Delta</option>
                </select>
              </div>

              <div className="signup-btn">
                <input type="submit" value="Signup" name="signup" id="signup" />
              </div>
              <div className="login-prompt">
                <p className="password-forgot">
                  Already have an account?
                  <Link style={{ marginLeft: ".5em" }} to="/auth/login/">
                    sign-in here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default GetStarted;
