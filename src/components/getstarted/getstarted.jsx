import React, { Component } from "react";
import axios from "axios";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import CustomInput from "./customInput";
import { toast } from "react-toastify";
import carImg from "../../images/car.png";
import "./getstarted.css";

class GetStarted extends Component {
  state = {
    data: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      password1: "",
      password2: "",
    },
    errors: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      password1: "",
      password2: "",
    },
  };

  schema = {
    username: Joi.string().required().label("Username"),
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    phoneNumber: Joi.string().required().label("Phone number"),
    address: Joi.string().required().label("Address"),
    password1: Joi.string().min(5).required().label("password"),
    password2: Joi.string().min(5).required().label("password"),
  };

  handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const data = { ...this.state.data };
    data[fieldName] = fieldValue;
    let errors = { ...this.state.errors };
    const errorMessage = this.validateInput(e);
    errors[e.target.name] = errorMessage;
    this.setState({ data, errors });
  };

  handleSignup = (e) => {
    e.preventDefault();
    if (this.validate()) {
      let errors = {};
      errors = this.validate();
      this.setState({ errors });
    } else {
      this.userSignup(this.state.data);
    }
  };

  userSignup = async (data) => {
    const newData = {};
    newData.first_name = data.firstName;
    newData.last_name = data.lastName;
    newData.phone_number = data.phoneNumber;
    newData.username = data.username;
    newData.email = data.email;
    newData.address = data.address;
    newData.password1 = data.password1;
    newData.password2 = data.password2;
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/accounts/register/",
        newData
      );
      toast("account created successfully");
      this.props.history.push("/auth/login/");
    } catch (e) {
      const errors = {};
      for (let keys in e.response.data) {
        errors[keys] = e.response.data[keys];
        this.setState({ errors });
      }
    }
  };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, options);
    if (result.error) {
      const errors = {};
      for (let error of result.error.details) {
        errors[error.path[0]] = error.message;
      }
      return errors;
    } else {
      return null;
    }
  };

  validateInput = (e) => {
    let errorMessage = "";
    const result = Joi.validate(e.target.value, this.schema[e.target.name]);
    if (result.error) {
      errorMessage = result.error.details[0].message;
    }
    return errorMessage;
  };

  render() {
    return (
      <div className="getstarted" id="getstarted">
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
            <form
              action=""
              method="post"
              className="signup-form"
              onSubmit={this.handleSignup}
            >
              <div className="generic-error">
                {this.state.errors.non_field_errors}
              </div>
              <CustomInput
                name="username"
                label="Username"
                data={this.state.data.username}
                handleChange={this.handleChange}
                error={this.state.errors.username}
              />
              <CustomInput
                name="firstName"
                label="First name"
                data={this.state.data.firstName}
                handleChange={this.handleChange}
                error={this.state.errors.firstName}
              />
              <CustomInput
                name="lastName"
                label="Last name"
                data={this.state.data.lastName}
                handleChange={this.handleChange}
                error={this.state.errors.lastName}
              />
              <CustomInput
                name="phoneNumber"
                label="Phone number"
                data={this.state.data.phoneNumber}
                handleChange={this.handleChange}
                error={this.state.errors.phoneNumber}
              />
              <CustomInput
                name="email"
                label="Email"
                type="email"
                data={this.state.data.email}
                handleChange={this.handleChange}
                error={this.state.errors.email}
              />
              <CustomInput
                name="address"
                label="Address"
                data={this.state.data.address}
                handleChange={this.handleChange}
                error={this.state.errors.address}
              />
              <CustomInput
                name="password1"
                label="Password"
                type="password"
                data={this.state.data.password1}
                handleChange={this.handleChange}
                error={this.state.errors.password1}
              />
              <CustomInput
                name="password2"
                label="Confirm Password"
                type="password"
                data={this.state.data.password2}
                handleChange={this.handleChange}
                error={this.state.errors.password2}
              />

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
