/*import React from "react";

const InputField = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div className="form-group mb-3">
      <label>{label}</label>
      <input
        type={type}
        className="form-control"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputField; */

import React from "react";

const InputField = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div className="form-group mb-3">
      <label>{label}</label>
      <input
        type={type}
        className="form-control"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputField;

