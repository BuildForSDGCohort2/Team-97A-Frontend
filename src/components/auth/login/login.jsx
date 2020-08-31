import React from "react";
import "./login.css";
import login_icon from "../../../images/icons/login.svg";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    data: {
      email: "",
      password: "",
    },

    error: {
      email: "",
      password: "",
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
      <div className="login">
        <div className="icon-container">
          <h2>Login</h2>
          <img alt="login into door" src={login_icon} />
        </div>
        <div className="login-form-container">
          <form method="post" className="login-form">
            <div>
              <h4>Sign into your account</h4>
            </div>
            <div>
              <input
                onChange={this.handleChange}
                className="text-input"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                onChange={this.handleChange}
                className="text-input"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div>
              <input
                type="submit"
                className="btn-login"
                name="submit"
                value="Login"
              />
            </div>
            <div className="sub-login-area">
              <span>
                <Link to="/getstarted/">Register</Link>
              </span>
              <span>
                <Link to="/auth/forgot_password/">Forgot password ?</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
