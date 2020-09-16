import React from "react";

const Tracker = ({ tracker }) => {
  return (
    <div className="tracker">
      <div className="confirmed">
        <div className={tracker.confirmed ? "done circle" : "circle"}></div>
        <p>confirmed</p>
      </div>
      <div className="in-transit">
        <div className={tracker.inTransit ? "done circle" : "circle"}></div>
        <p>in-transit</p>
      </div>
      <div className="delivered">
        <div className={tracker.delivered ? "done circle" : "circle"}></div>
        <p>delivered</p>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Tracker;
