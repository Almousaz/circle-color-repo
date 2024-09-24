import React from "react";
import "./ColorButtons.css";
import ColorButtom from "./ColorButtom";

const ColorButtons = ({ option, addCircle }) => {
  return (
    <div className="ColorButtons">
      {option.map((color) => (
        <ColorButtom color={color} addCircle={addCircle} />
      ))}
    </div>
  );
};

export default ColorButtons;
