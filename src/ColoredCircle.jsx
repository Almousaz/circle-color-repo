import React, { useState } from "react";
import Circle from "./Circle";

const ColoredCircles = () => {
  const [circles, setCircles] = useState([
    "cornflowerblue",
    "peachpuff",
    "lavender",
  ]);
  console.log(circles);

  const addCircle = () => {
    setCircles((circles) => [...circles, "magenta"]);
  };

  return (
    <div>
      {circles.map((color, idx) => (
        <Circle color={color} idx={idx} key={idx} />
      ))}
      <button onClick={addCircle}>ADD</button>
    </div>
  );
};

export default ColoredCircles;
