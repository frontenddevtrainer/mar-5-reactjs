import { useState } from "react";
import "./App.css";
import DateMessage from "./components/date";

function App() {
  const classNames = "heading title";
  const message = "Hello World!!!";
  const showDateMessage = true
  return (
    <>
      <div className={classNames}>{message}</div>
      {showDateMessage && <DateMessage />}
    </>
  );
}

export default App;
