import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import logo from "./images/logo.svg";

import LandingPage from "./components/langinPage/landingPage";
import Login from "./components/auth/login/login";
import HIW from "./components/howitworks/hiw";
import Features from "./components//features/features";
import FAQs from "./components/faqs/faqs";
import GetStarted from "./components/getstarted/getstarted";
import Footer from "./components/footer/footer";
import ResetPassword from "./components/auth/resetPassword/resetPassword";
import ForgotPassword from "./components/auth/forgotPassword/forgotPassword";
import "./app.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <ul className="nav-links">
            <Link to="/">
              <div className="logo">
                <img src={logo} width="139" alt="site logo" />
              </div>
            </Link>

            <li>
              <Link to="/hiw/">How it works</Link>
            </li>
            <li>
              <Link to="/features/">Features</Link>
            </li>
            <li>
              <Link to="/faqs/">FAQs</Link>
            </li>
          </ul>

          <ul className="navlinks-auth">
            <li>
              <Link to="/auth/login/">Login</Link>
            </li>
            <li>
              <Link to="/getstarted/" className="btn btn-primary">
                Get Started
              </Link>
            </li>
          </ul>
        </nav>

        <Route exact={true} path="/" component={LandingPage} />
        <Route path="/hiw/" component={HIW} />
        <Route path="/features/" component={Features} />
        <Route path="/faqs/" component={FAQs} />
        <Route path="/auth/login/" component={Login} />
        <Route path="/auth/reset_password/" component={ResetPassword} />
        <Route path="/auth/forgot_password/" component={ForgotPassword} />
        <Route path="/getstarted/" component={GetStarted} />

        {/* footer component */}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
