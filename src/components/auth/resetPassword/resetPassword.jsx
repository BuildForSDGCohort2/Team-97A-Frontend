import React, { Component } from "react";
import { Link } from "react-router-dom";
import passwordImg from "../../../images/password.png";
import "./resetPassword.css";

class ResetPassword extends Component {
  state = {
    data: {
      password: "",
      password1: "",
    },
    error: {
      password: "",
      password1: "",
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
      <div className="reset-page">
        <div className="reset-page-left">
          <div className="reset-page-img-container">
            <img
              src={passwordImg}
              alt="reset-page-img"
              className="reset-page-img"
            />
          </div>
        </div>
        <div className="reset-page-right">
          <div className="form-header">
            <p>Reset Password</p>
          </div>
          <div className="form-container">
            <form action="" method="post" className="reset-form">
              <div className="input-field">
                <input
                  onChange={this.handleChange}
                  type="password"
                  placeholder="Enter new password"
                  name="password"
                  id="password"
                  value={this.state.data.password}
                />
              </div>
              <div className="input-field">
                <input
                  onChange={this.handleChange}
                  type="password"
                  placeholder="Confirm new password"
                  name="password1"
                  id="password1"
                  value={this.state.data.password1}
                />
              </div>
              <div className="reset-btn">
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

export default ResetPassword;
