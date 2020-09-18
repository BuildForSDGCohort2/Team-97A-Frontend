import React from "react";

const TrackerAction = ({ status, onCancel }) => {
  return status === "confirmed" ? (
    <div className="action">
      <botton className="action-btn">Delivered to Carrier</botton>
      <botton className="action-btn" id="cancel-btn" onClick={onCancel}>
        Cancelled
      </botton>
    </div>
  ) : null;
};

export default TrackerAction;
