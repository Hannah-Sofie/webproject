// CustomButton.js
import React from "react";
import { useNavigate } from "react-router-dom";

function CustomButton({ text, bgcolor, color, path, className }) {
  let navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: bgcolor,
    color: color,
    borderRadius: "20px",
    cursor: "pointer",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "1em",
  };

  return (
    <button
      style={buttonStyle}
      onClick={() => navigate(path)}
      className={className}
    >
      {text}
    </button>
  );
}

export default CustomButton;
