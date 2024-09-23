import React from "react";
import Circle from "./Circle";
import ColoredCircles from "./ColoredCircle";

function App() {
  return (
    <div>
      {/* <Circle color="peachpuff" idx={8} />
      <Circle color="lavender" idx={4} />
      <Circle color="thistle" idx={3} /> */}
      <ColoredCircles />
    </div>
  );
}

export default App;
