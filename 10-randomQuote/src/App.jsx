import React from "react";

const App = () => {
  const quotes = [
    "Life is what happens when you're busy making other plans.",
    "The best way to predict the future is to invent it.",
    "The only way to do great work is to love what you do.",
    "If you want to live a happy life, tie it to a goal, not to people",
    "The purpose of our lives is to be happy.",
    "The most difficult thing is the decision to act, the rest is merely tenacity.",
    "The secret of getting ahead is getting started.",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  return <div>{quote}</div>;
};

export default App;
