import React, { useState } from "react";
import Circle from "./Circle";
import ColorButtons from "./ColorButton";

const ColoredCircles = () => {
  const [circles, setCircles] = useState([]);
  //   console.log(circles);

  function getRandom(min = 0, max = 100) {
    return Math.random() * (max - min) + min;
  }

  const addCircle = (color) => {
    setCircles((circles) => [
      ...circles,
      { color, x: getRandom(), y: getRandom() },
    ]);
  };

  // const changePosition = idx => {
  //   setCircles(circles => {
  //     const copy = [...circles];
  //     copy[idx].x = getRandom();
  //     copy[idx].y = getRandom();
  //     return copy
  //   })
  // }

  const changePosition = (idx) => {
    console.log(idx);
    setCircles((circles) =>
      circles.map((cir, i) =>
        i === idx ? { ...cir, x: getRandom(), y: getRandom() } : cir
      )
    );
  };

  return (
    <div>
      <ColorButtons
        addCircle={addCircle}
        option={["peachpuff", "lightsteelblue", "paleturquoise"]}
      />
      {/* <ColorButtons addCircle = {addCircle} option = {['orange' , 'magenta','teal']} /> */}

      {circles.map(({ color, x, y }, idx) => (
        <Circle
          changePosition={changePosition}
          color={color}
          idx={idx}
          key={idx}
          x={x}
          y={y}
        />
      ))}
    </div>
  );
};

export default ColoredCircles;
