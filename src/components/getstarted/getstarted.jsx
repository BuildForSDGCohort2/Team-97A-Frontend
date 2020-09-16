import React, { Component } from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import { register } from "../../services/authService";
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

  handleSignup = async (e) => {
    e.preventDefault();

    if (this.validate()) {
      // if there are errors add the errors to ths.state.errors
      let errors = {};
      errors = this.validate();
      this.setState({ errors });
    } else {
      // if there are no errors then register new user
      try {
        const response = await register(this.state.data);
        toast("account created successfully");
        this.props.history.push("/auth/login/");
      } catch (e) {
        const errors = {};
        for (let key in e.response.data) {
          errors[key] = e.response.data[key];
          this.setState({ errors });
        }
      }
    }
  };

  validate = () => {
    //validates all input fields
    //returns an error object if there are errors and null if there is no
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
    // validates single input field
    // returns an error message is there is an error and null if there is no error
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
