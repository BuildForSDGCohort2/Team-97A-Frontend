import React from "react";

const Tracker = ({ tracker }) => {
  return (
    <div className="tracker">
      <div className="confirmed">
        <div className={tracker.is_confirmed ? "done circle" : "circle"}></div>
        <p>confirmed</p>
      </div>
      <div className="in-transit">
        <div className={tracker.in_transit ? "done circle" : "circle"}></div>
        <p>in-transit</p>
      </div>
      <div className="delivered">
        <div className={tracker.is_delivered ? "done circle" : "circle"}></div>
        <p>delivered</p>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Tracker;
