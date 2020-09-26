import React from "react";

const DisplayPin = ({ pin, status }) => {
  return status === "is_delivered" ? null : (
    <div className="display-pin">
      <h3>Delivery code</h3>
      <div className="pin-holder">
        <div>{pin[0]}</div>
        <div>{pin[1]}</div>
        <div>{pin[2]}</div>
        <div>{pin[3]}</div>
        <div>{pin[4]}</div>
      </div>
      <p>
        Please do not share this code with anyone EXCEPT the reciepient of the
        package
      </p>
    </div>
  );
};

export default DisplayPin;
