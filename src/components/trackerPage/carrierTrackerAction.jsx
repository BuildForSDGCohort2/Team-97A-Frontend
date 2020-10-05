import React from "react";

const TrackerAction = ({ status, onConfirmCollection, onConfirmDelivery }) => {
  return status === "in_transit" ? (
    <div className="action" onClick={onConfirmDelivery}>
      <button className="action-btn">Confirm delivery</button>
    </div>
  ) : status === "is_confirmed" ? (
    <div className="action" onClick={onConfirmCollection}>
      <button className="action-btn">Confirm collection</button>
    </div>
  ) : null;
};

export default TrackerAction;
