import React from "react";

const InputField = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
