import React from "react";
import "./login.css";
import login_icon from "../../../images/icons/login.svg";
import { Link } from "react-router-dom";

const Login = () => {
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
              className="text-input"
              type="text"
              name="username"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="text-input"
              type="password"
              name="username"
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
};

export default Login;
