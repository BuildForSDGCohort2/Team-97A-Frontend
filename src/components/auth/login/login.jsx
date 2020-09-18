import React from "react";
import "./login.css";
import login_icon from "../../../images/icons/login.svg";
import { Link, Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        password: "",
      },

      loggedIn: localStorage.getItem("token") ? true : false,

      error: {
        email: "",
        password: "",
        generic: "",
      },

      loading: false,
    };
  }

  componentDidMount() {
    if (this.state.loggedIn) {
      fetch(
        `${window.location.protocol}://${window.location.host}/api/v1/accounts/obtain/`,
        {
          headers: {
            Authorization: `Authorization: Bearer ${localStorage.getItem(
              "token"
            )}`,
          },
        }
      )
        .then((res) => res.json())
        .then((json) => {
          this.setState({ username: json.username });
        });
    }
  }

  handleChange = (e) => {
    e.target.classList.contains("field-error") &&
      e.target.classList.remove("field-error");

    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const data = { ...this.state.data };
    data[fieldName] = fieldValue;
    this.setState({ data });
  };

  handleLogin = (e, data) => {
    e.preventDefault();

    this.setState({
      error: {
        email: "",
        password: "",
        generic: "",
      },
    });

    data = JSON.stringify(data);
    this.setState({ loading: true });
    fetch("http://localhost:8000/api/v1/accounts/obtain/", {
      method: "POST",
      body: data,
      headers: new Headers({ "content-type": "application/json" }),
    })
      .then((response) => {
        this.setState({ loading: false });
        return new Promise((resolve) =>
          response.json().then((json) =>
            resolve({
              status: response.status,
              json,
            })
          )
        );
      })
      .then(({ json, status }) => {
        switch (status) {
          case 400:
            this.setState({
              error: json,
            });
            break;
          case 401:
            this.setState({
              error: {
                ...this.state.error,
                generic: "Incorrect username or password",
              },
            });
            break;
          case 200:
            localStorage.setItem("token", json.access);
            this.setState({
              loggedIn: true,
              data: json,
            });
            break;
          default:
        }
      });
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ loggedIn: false, username: "" });
  };

  render() {
    return localStorage.getItem("token") ? (
      <Redirect to="/packages/all" />
    ) : (
      <div className="login">
        <div className="icon-container">
          <h2>Login</h2>
          <img alt="login into door" src={login_icon} />
        </div>
        <div className="login-form-container">
          <form
            method="post"
            className="login-form"
            onSubmit={(e) => this.handleLogin(e, this.state.data)}
          >
            <div>
              <h4>Sign into your account</h4>
              <h5>{this.state.error.generic}</h5>
            </div>
            <div>
              <input
                onChange={this.handleChange}
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="true"
                className={`text-input ${
                  this.state.error["email"] ? "field-error" : ""
                }`}
              />
              <span className="error-label">{this.state.error.email}</span>
            </div>
            <div>
              <input
                onChange={this.handleChange}
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="true"
                className={`text-input ${
                  this.state.error["email"] ? "field-error" : ""
                }`}
              />
              <span className="error-label">{this.state.error.password}</span>
            </div>
            <div>
              <input
                type="submit"
                className="btn-login"
                name="submit"
                value="Login"
                disabled={this.state.loading}
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
