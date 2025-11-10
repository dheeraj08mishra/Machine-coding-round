import React from "react";

const CustomButton = ({
  children,
  label,
  disabled,
  onClick,
  variant = "primary",
}) => {
  return (
    <button
      role="button"
      aria-disabled={disabled || false}
      disabled={disabled || false}
      onClick={!disabled ? onClick : undefined}
      className={`btn btn-${variant}`}
    >
      {children} {label}
    </button>
  );
};

export default React.memo(CustomButton);
