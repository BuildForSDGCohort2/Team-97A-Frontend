import React from "react";

const TrackerAction = ({ status, onConfirmCollection, onConfirmDelivery }) => {
  return status === "in_transit" ? (
    <div className="action" onClick={onConfirmDelivery}>
      <botton className="action-btn">Confirm delivery</botton>
    </div>
  ) : status === "is_confirmed" ? (
    <div className="action" onClick={onConfirmCollection}>
      <botton className="action-btn">Confirm collection</botton>
    </div>
  ) : null;
};

export default TrackerAction;
