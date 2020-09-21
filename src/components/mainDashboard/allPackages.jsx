import React, { Component } from "react";
import PackageTable from "./table/table";
import TableTop from "./tableTop/tableTop";

class AllPackages extends Component {
  state = {};
  render() {
    const { onPackageClick, packages, onSearch, queries } = this.props;
    return (
      <div className="dashboard-body">
        <TableTop onSearch={onSearch} queries={queries} />
        <PackageTable
          onPackageClick={onPackageClick}
          packages={packages}
          numPerPage={5}
        />
      </div>
    );
  }
}

export default AllPackages;
