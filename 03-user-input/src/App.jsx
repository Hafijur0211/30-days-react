import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <p>user Input: {input} </p>
    </div>
  );
};

export default App;
