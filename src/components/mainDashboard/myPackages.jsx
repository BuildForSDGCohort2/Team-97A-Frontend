import React, { Component } from "react";
import PackageTable from "./table/table";

class MyPackages extends Component {
  state = {};
  render() {
    const { onPackageClick, packages } = this.props;
    return (
      <div className="dashboard-body">
        <h4 className="my-packages-header">My packages (sender)</h4>
        <PackageTable
          onPackageClick={onPackageClick}
          packages={packages.userSentPackages}
          numPerPage={3}
        />
        <h4 className="my-packages-header">My packages (carrier)</h4>
        <PackageTable
          onPackageClick={onPackageClick}
          packages={packages.userCarriedPackages}
          numPerPage={3}
        />
      </div>
    );
  }
}

export default MyPackages;
