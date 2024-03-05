import { useState } from "react";
import "./App.css";

function App() {
  const classNames = "heading title";
  const message = "Hello World!!!";
  const date = new Date().toDateString();

  return (
    <>
      <div className={classNames}>{message}</div>
      <p>Today is {date}.</p>
    </>
  );
}

export default App;
