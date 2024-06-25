import React, { useState } from "react";

const App = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleToggle} />
      </label>
      <p>{isToggle ? "On" : "Off"}</p>
    </div>
  );
};

export default App;
