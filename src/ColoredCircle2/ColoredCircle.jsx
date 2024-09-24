import React, { useState } from "react";
import Circle from "./Circle";
import ColorButtons from "./ColorButton";

const ColoredCircles = () => {
  const [circles, setCircles] = useState([]);
  //   console.log(circles);

  

  const addCircle = (color) => {
    setCircles((circles) => [
      ...circles,
       color ]);
  };

 

  return (
    <div>
      <ColorButtons
        addCircle={addCircle}
        option={["peachpuff", "lightsteelblue", "paleturquoise"]}
      />
      {/* <ColorButtons addCircle = {addCircle} option = {['orange' , 'magenta','teal']} /> */}

      {circles.map((color, idx) => (
        <Circle
          color={color}
          idx={idx}
          key={idx}
        />
      ))}
    </div>
  );
};

export default ColoredCircles;
