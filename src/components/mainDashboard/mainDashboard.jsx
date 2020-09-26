import React, { Component } from "react";
import { getAllPackages } from "../../services/dataService";
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
    data: [],
  };

  async componentDidMount() {
    const packages = await getAllPackages();
    this.setState({ data: packages || [] });
  }

  getQueriedPackages = () => {
    // this logic gets all the data in the state
    // if there is a search query string it filters the data by the query string

    const allData = [...this.state.data];
    const currentQueries = { ...this.state.queries };

    // filters packages by query string
    let queriedPackages = allData.filter(
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

    console.log(this.state.data);
    const allPackages = [...this.state.data];

    // packages that the user has sent
    const userSentPackages = allPackages.filter(
      (singlePackage) => singlePackage.owner === this.props.user.id
    );

    // packages that the user has carried
    const userCarriedPackages = allPackages.filter(
      (singlePackage) => singlePackage.carrier === this.props.user.id
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

  render() {
    return localStorage.getItem("token") ? (
      <div className="dashboard-page">
        <Sidebar />
        <div className="main-dashboard">
          <DashboardTop user={this.props.user} onLogout={this.handleLogout} />
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
                return <Profile {...props} user={this.props.user} />;
              }}
            />
            <Route
              path="/packages/wallet/"
              render={(props) => {
                return <Wallet {...props} user={this.props.user} />;
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
