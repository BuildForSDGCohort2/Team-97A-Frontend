import React, { Component } from "react";
import { Link } from "react-router-dom";
import passwordImg from "../../../images/unlock_key.svg";
import "./forgotPassword.css";

class ResetPassword extends Component {
  state = {
    data: { email: "" },
    error: { email: "" },
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
            <p>Forgot Password</p>
          </div>
          <div className="form-container">
            <form action="" method="post" className="reset-form">
              <h5>
                Please enter your registered email. A resetpassword link would
                sent.
              </h5>
              <div className="input-field">
                <input
                  onChange={this.handleChange}
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={this.state.data.password}
                />
              </div>
              <div className="reset-btn">
                <input
                  type="submit"
                  value="Send Link"
                  name="send-link"
                  id="send-link"
                />
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
