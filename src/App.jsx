import { useState } from "react";
import "./App.css";
import DateMessage from "./components/date";

function App() {
  const classNames = "heading title";
  const message = "Hello World!!!";
  return (
    <>
      <div className={classNames}>{message}</div>
      {/* <DateMessage></DateMessage> */}
      {/* or */}
      <DateMessage/>
    </>
  );
}

export default App;
