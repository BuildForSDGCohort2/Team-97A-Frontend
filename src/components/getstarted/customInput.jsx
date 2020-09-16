import React from "react";

const CustomInput = ({ name, label, type, data, handleChange, error }) => {
  return (
    <div className="inp-grp">
      <input
        onChange={handleChange}
        type={type}
        placeholder={label}
        name={name}
        id={name}
        value={data[name]}
      />
      <small className="error">{error}</small>
    </div>
  );
};

export default CustomInput;
