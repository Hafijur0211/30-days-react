import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      // .then((json) => console.log(json));
      .then((json) => setData(json));
  });
  return (
    <div>
      {data ? (
        <div>
          <h1>Title : {data.title}</h1>
          <h2>Body : {data.body}</h2>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default App;
