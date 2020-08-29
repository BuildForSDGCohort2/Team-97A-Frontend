import React from "react";

const CustomInput = ({ name, label, type, data, handleChange }) => {
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
    </div>
  );
};

export default CustomInput;
