import React from "react";

import "./form-input.styles.css";

const FormInput = ({ handleChange, label, color, ...otherProps }) => (
  <div className="group">
    {label && <label>{label}</label>}
    <input
      className={`${color ? "forminput-color" : ""} forminput`}
      onChange={handleChange}
      {...otherProps}
    />
    {/* {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null} */}
  </div>
);

export default FormInput;
