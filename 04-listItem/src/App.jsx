import React from "react";

const App = () => {
  const items = ["Item1", "Item2", "Item3", "Item4"];
  return (
    <ul>
      {items.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default App;
