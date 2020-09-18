import React, { Component } from "react";
import CarrierTracker from "./carrierTracker";
import OwnerTracker from "./ownerTracker";
import "./trackerPage.css";

class TrackerPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* display conditionally is user is carrier  */}
        <CarrierTracker history={this.props.history} />
        {/* display conditionally is user is owner  */}
        <OwnerTracker history={this.props.history} />
      </React.Fragment>
    );
  }
}

export default TrackerPage;
