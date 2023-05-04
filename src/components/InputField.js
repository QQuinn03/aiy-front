import React from "react";

const InputField = ({ label, name, placeholder, required }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        className="form-control"
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputField;
