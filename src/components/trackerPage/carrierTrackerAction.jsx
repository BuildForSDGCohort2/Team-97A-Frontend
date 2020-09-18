import React from "react";

const TrackerAction = ({ status, onConfirmCollection, onConfirmDelivery }) => {
  return status === "confirmed" ? (
    <div className="action" onClick={onConfirmCollection}>
      <botton className="action-btn">Confirm collection</botton>
    </div>
  ) : status === "inTransit" ? (
    <div className="action" onClick={onConfirmDelivery}>
      <botton className="action-btn">Confirm delivery</botton>
    </div>
  ) : null;
};

export default TrackerAction;
