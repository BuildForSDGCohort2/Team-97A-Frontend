import React, { Component } from "react";
import paginate from "./../../utils/paginate";
import { getAllPackages } from "../../services/fakeDataService";
import DashboardTop from "./dashboardTop/dashboardTop";
import Sidebar from "./sidebar/sidebar";
import PackageTable from "./table/table";
import TableTop from "./tableTop/tableTop";
import "./mainDashboard.css";

class MainDashboard extends Component {
  state = {
    queries: { origin: "", destination: "" },
    data: getAllPackages(),
    currentPage: 1,
    totalPages: 0,
  };

  componentDidMount() {
    const totalPages = Math.ceil(this.state.data.length / 6);
    console.log(totalPages);
    this.setState({ totalPages });
  }

  getDisplayData = () => {
    const allData = [...this.state.data];
    const currentQueries = { ...this.state.queries };
    let displayData = allData.filter(
      (item) =>
        item.destination.toLowerCase().indexOf(currentQueries.destination) !==
          -1 && item.origin.toLowerCase().indexOf(currentQueries.origin) !== -1
    );
    displayData = paginate(displayData, this.state.currentPage, 6);
    return displayData;
  };

  handlePaginate = (dir) => {
    let currentPage = this.state.currentPage;
    currentPage = dir === "next" ? currentPage + 1 : currentPage - 1;
    this.setState({ currentPage });
  };

  handleSearch = (e) => {
    const queries = { ...this.state.queries };
    queries[e.target.name] = e.target.value.toLowerCase();
    this.setState({ queries });
    const currentPage = 1;
    this.setState({ currentPage });
  };

  handlePackageClick = (id) => {
    this.props.history.push(`/packages/${id}/`);
  };

  render() {
    const displayData = this.getDisplayData();
    return (
      <div className="dashboard-page">
        <Sidebar />
        <div className="main-dashboard">
          <DashboardTop />
          <div className="dashboard-body">
            <TableTop
              onSearch={this.handleSearch}
              queries={this.state.queries}
            />
            <PackageTable
              onPackageClick={this.handlePackageClick}
              onPaginate={this.handlePaginate}
              data={displayData}
              dataSize={this.state.data.length}
              currentPage={this.state.currentPage}
              totalPages={this.state.totalPages}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainDashboard;
