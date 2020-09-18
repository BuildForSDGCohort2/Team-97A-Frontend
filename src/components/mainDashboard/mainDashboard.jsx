import React, { Component } from "react";
import { getAllPackages } from "../../services/fakeDataService";
import DashboardTop from "./dashboardTop/dashboardTop";
import Sidebar from "./sidebar/sidebar";
import "./mainDashboard.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { toast } from "react-toastify";
import AllPackages from "./allPackages";
import MyPackages from "./myPackages";

class MainDashboard extends Component {
  state = {
    queries: { origin: "", destination: "" },
    data: getAllPackages(),
    user: {
      id: 1,
    },
  };

  getQueriedPackages = () => {
    // this logic get all the data in the state
    // if there is a search query string it filters the data by the query string
    const allData = [...this.state.data];
    const currentQueries = { ...this.state.queries };
    let queriedPackages = allData.filter(
      (item) =>
        item.destination.toLowerCase().indexOf(currentQueries.destination) !==
          -1 && item.origin.toLowerCase().indexOf(currentQueries.origin) !== -1
    );
    return queriedPackages;
  };

  getUserPackages = () => {
    // This logic all the packages
    // and returns both the packages that the user has sent and recieved in an object
    // in line 44 below
    const allPackages = [...this.state.data];

    const userSentPackages = allPackages.filter(
      (singlePackage) => singlePackage.carrier.id === this.state.user.id
    );

    const userCarriedPackages = allPackages.filter(
      (singlePackage) => singlePackage.sender.id === this.state.user.id
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
    toast.warn("you have been logged out");
    this.props.history.push("/");
  };

  render() {
    return localStorage.getItem("token") ? (
      <div className="dashboard-page">
        <Sidebar />
        <div className="main-dashboard">
          <DashboardTop onLogout={this.handleLogout} />
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
          </Switch>
        </div>
      </div>
    ) : (
      <Redirect to="/auth/login/" />
    );
  }
}

export default MainDashboard;
