import React, { Component } from "react";
import APIClient from "../../services/dataService";
import DashboardTop from "./dashboardTop/dashboardTop";
import Sidebar from "./sidebar/sidebar";
import "./mainDashboard.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { toast } from "react-toastify";
import AllPackages from "./allPackages";
import MyPackages from "./myPackages";
import Profile from "../profile/Profile";
import Wallet from "./../wallet/Wallet";

class MainDashboard extends Component {
  state = {
    queries: { origin: "", destination: "" },
    packages: [],
    user: {},
    verification: {},
  };

  async componentDidMount() {
    const packages = await APIClient.getAllPackages();
    const user = await APIClient.getCurrentUser();
    this.setState({ verification: user.verification || {} });
    this.setState({ user: user || {} });
    this.setState({ packages: packages || [] });
  }

  /********************methods for allPackages component******************/

  getQueriedPackages = () => {
    // this logic gets all the packages in the state
    // if there is a search query string it filters the packages by the query string

    const allpackages = [...this.state.packages];
    const currentQueries = { ...this.state.queries };

    // filters packages by query string
    let queriedPackages = allpackages.filter(
      (item) =>
        item.destination.toLowerCase().indexOf(currentQueries.destination) !==
          -1 && item.origin.toLowerCase().indexOf(currentQueries.origin) !== -1
    );

    // filters out packages that have been assigned a carrier
    queriedPackages = queriedPackages.filter(
      (packages) => packages.carrier === null
    );

    return queriedPackages;
  };

  getUserPackages = () => {
    // This logic returns all the packages of the current user
    // and returns both the packages that the user has sent and carried in an object

    console.log(this.state.packages);
    const allPackages = [...this.state.packages];

    // packages that the user has sent
    const userSentPackages = allPackages.filter(
      (singlePackage) => singlePackage.owner === this.state.user.id
    );

    // packages that the user has carried
    const userCarriedPackages = allPackages.filter(
      (singlePackage) => singlePackage.carrier === this.state.user.id
    );

    return { userSentPackages, userCarriedPackages };
  };

  handleSearch = (e) => {
    const queries = { ...this.state.queries };
    queries[e.target.name] = e.target.value.toLowerCase();
    this.setState({ queries });
  };

  handlePackageClick = (id) => {
    this.props.history.push(`/package/${id}/`);
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    toast.warn("you have been logged out");
    this.props.history.push("/");
  };

  /*******************methods for profile****************************/

  handleProfileInput = (e) => {
    const user = { ...this.state.user };
    user[e.target.name] = e.target.value;
    this.setState({ user });
  };

  handleVerificationInput = (e) => {
    const modifiedVerification = { ...this.state.verification };
    if (e.target.type === "file") {
      const uploadedFile = e.target.files[0];
      modifiedVerification[e.target.name] = uploadedFile;
    } else {
      modifiedVerification[e.target.name] = e.target.value;
    }
    this.setState({ verification: modifiedVerification });
  };

  handleEditPersonalDetails = async () => {
    try {
      await APIClient.editUser(this.state.user);
      toast("Personal details updated successfully");
      this.props.history.push("/packages/profile/");
    } catch (e) {
      console.log(e.response);
    }
  };

  handleVerification = async () => {
    try {
      const user = { ...this.state.user };
      const verification = this.state.verification;
      verification.user = this.state.user.id;
      const data = new FormData();
      for (let key in verification) {
        data.append(key, verification[key]);
      }
      this.state.user.is_verified
        ? await APIClient.updateUserVerification(data, verification.id)
        : await APIClient.verifyUser(data);
      user.is_verified = true;
      this.setState({ user });
      this.props.history.push("/packages/profile/");
      toast("your have been verified successfully");
    } catch (e) {
      console.log(e.response);
      toast.error("could not verify you at this moment");
    }
  };

  render() {
    return localStorage.getItem("token") ? (
      <div className="dashboard-page">
        <Sidebar />
        <div className="main-dashboard">
          <DashboardTop user={this.state.user} onLogout={this.handleLogout} />
          <Switch>
            <Route
              path="/packages/all/"
              render={(props) => {
                return (
                  <AllPackages
                    {...props}
                    onPackageClick={this.handlePackageClick}
                    packages={this.getQueriedPackages()}
                    onSearch={this.handleSearch}
                    queries={this.state.queries}
                  />
                );
              }}
            />
            <Route
              path="/packages/mine/"
              render={(props) => {
                return (
                  <MyPackages
                    {...props}
                    onPackageClick={this.handlePackageClick}
                    packages={this.getUserPackages()}
                  />
                );
              }}
            />
            <Route
              path="/packages/profile/"
              render={(props) => {
                return (
                  <Profile
                    {...props}
                    user={this.state.user}
                    verification={this.state.verification}
                    onProfilelInput={this.handleProfileInput}
                    onVerificationInput={this.handleVerificationInput}
                    onEditPersonalDetails={this.handleEditPersonalDetails}
                    onVerify={this.handleVerification}
                  />
                );
              }}
            />
            <Route
              path="/packages/wallet/"
              render={(props) => {
                return <Wallet {...props} user={this.state.user} />;
              }}
            />
          </Switch>
        </div>
      </div>
    ) : (
      <Redirect to="/auth/login/" />
    );
  }
}

export default MainDashboard;
