import React, { useRef } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import logo from "./images/logo.svg";
import LandingPage from "./components/langinPage/landingPage";
import Login from "./components/auth/login/login";
import FAQs from "./components/faqs/faqs";
import GetStarted from "./components/getstarted/getstarted";
import Footer from "./components/footer/footer";
import ResetPassword from "./components/auth/resetPassword/resetPassword";
import ForgotPassword from "./components/auth/forgotPassword/forgotPassword";
import MainDashboard from "./components/mainDashboard/mainDashboard";
import "./app.css";

function App() {
  const nav = React.useRef(null);
  const navLinks = useRef([]);
  navLinks.current = [];

  const ellipsis = React.useRef(null);

  // make a list of refs for use in entry animation of navlinks
  const addNavItemRef = (element) => {
    if (element && !navLinks.current.includes(element)) {
      navLinks.current.push(element);
    }
  };

  const handleEllipse = () => {
    // show and hide the ellipsis toggler
    nav.current.classList.toggle("nav-active");

    // entry animation for nav items
    navLinks.current.forEach((link, i) => {
      link.style.animation = link.style.animation
        ? ""
        : (link.style.animation = `showLinks 0.5s ease forwards ${i / 8}s`);
    });

    // animate ellipses to X when active
    ellipsis.current.classList.toggle("toggler-ellipsis");
  };

  // update the following list to add nav item
  const navLinkItems = [
    { path: "/#hiw", text: "How it works" },
    { path: "/#features", text: "Features" },
    { path: "/faqs/", text: "FAQs" },
    { path: "/auth/login/", text: "Login" },
    { path: "/getstarted/", text: "Get Started", className: "btn btn-primary" },
  ];

  return (
    <Router>
      <div className="App" id="top">
        {/* <nav className="nav">
          <div className="logo">
            <Link to="/#top">
              <img src={logo} width="139" alt="site logo" />
            </Link>
          </div>

          <ul className="nav-links" ref={nav}>
            {navLinkItems.map((item, key) => {
              return (
                <li ref={addNavItemRef} key={key}>
                  <Link to={item.path} className={item.className}>
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className="ellipsis"
            ref={ellipsis}
            onClick={() => handleEllipse()}
          >
            <div className="ellipse-1"></div>
            <div className="ellipse-2"></div>
            <div className="ellipse-3"></div>
          </div>
        </nav> */}

        <Route exact={true} path="/" component={LandingPage} />
        <Route path="/faqs/" component={FAQs} />
        <Route path="/dashboard/" component={MainDashboard} />
        <Route path="/auth/login/" component={Login} />
        <Route path="/auth/reset_password/" component={ResetPassword} />
        <Route path="/auth/forgot_password/" component={ForgotPassword} />
        <Route path="/getstarted/" component={GetStarted} />

        {/* footer component */}

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
