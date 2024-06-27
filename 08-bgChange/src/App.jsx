import React, { useState } from "react";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleClick = () => {
    const newColor = backgroundColor === "white" ? "green" : "yellow";
    setBackgroundColor(newColor);
  };
  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor,
        cursor: "pointer",
        textAlign: "center",
        width: "500px",
        height: "500px",
        alignItems: "center",
      }}
    >
      Click me to change color
    </div>
  );
};

export default App;
