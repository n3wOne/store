import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = (props) => {
  const {
    autoComplete,
    fullWidth,
    id,
    label,
    name,
    value,
    required,
    onChange,
  } = props;
  const [focusClass, setFocusClass] = useState("");

  const handleFocus = () =>
    setFocusClass({ label: "InputLabel-shrink focused", div: "focused" });

  const handleBlur = (event) =>
    !event.target.value
      ? setFocusClass("")
      : setFocusClass({
          label: focusClass.label.replace(/focused/g, ""),
          div: focusClass.div.replace(/focused/g, ""),
        });

  return (
    <div className={`FormControl-root ${fullWidth ? "fullwidth" : ""}`}>
      <label
        className={`InputLabel-formControl ${focusClass.label}`}
        htmlFor={id}
        id={`${id}-label`}
      >
        {label}
        {required && (
          <span aria-hidden="true" className="formLabel-root">
            *
          </span>
        )}
      </label>
      <div
        className={`input-underline InputBase-root ${
          fullWidth ? "fullwidth" : ""
        } ${focusClass.div}`}
      >
        <input
          onChange={onChange}
          aria-invalid="false"
          autoComplete={autoComplete}
          id={id}
          name={name}
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="InputBase-input"
          value={value}
        />
      </div>
    </div>
  );
};

export default TextField;

TextField.propTypes = {
  autoComplete: PropTypes.string,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};
