import React from "react";

const ColorButtom = ({ color, addCircle }) => {
  return (
    <button
      onClick={() => addCircle(color)}
      className="ColorButtons-btn"
      style={{ backgroundColor: color }}
    >
      {color}
    </button>
  );
};

export default ColorButtom;
