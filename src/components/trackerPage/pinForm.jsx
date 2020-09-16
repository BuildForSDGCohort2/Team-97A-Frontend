import React from "react";

const PinForm = ({ onPinChange, pin, trackerStatus }) => {
  return trackerStatus === "inTransit" ? (
    <div className="pin-input">
      <input
        maxLength={1}
        type="text"
        name="pin1"
        id="pin1"
        placeholder="-"
        value={pin.pin1}
        onInput={onPinChange}
      />
      <input
        maxLength={1}
        type="text"
        name="pin2"
        id="pin2"
        placeholder="-"
        value={pin.pin2}
        onInput={onPinChange}
      />
      <input
        maxLength={1}
        type="text"
        name="pin3"
        id="pin3"
        placeholder="-"
        value={pin.pin3}
        onInput={onPinChange}
      />
      <input
        maxLength={1}
        type="text"
        name="pin4"
        id="pin4"
        placeholder="-"
        value={pin.pin4}
        onInput={onPinChange}
      />
      <input
        maxLength={1}
        type="text"
        name="pin5"
        id="pin5"
        placeholder="-"
        value={pin.pin5}
        onInput={onPinChange}
      />
    </div>
  ) : null;
};

export default PinForm;
