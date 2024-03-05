import { useState } from "react";
import "./App.css";
import DateMessage from "./components/date";
import ProductListing from "./components/listing";

function App() {
  const classNames = "heading title";
  const message = "Hello World!!!";
  const showDateMessage = false;
  return (
    <>
      <div className={classNames}>{message}</div>
      {showDateMessage ? <DateMessage /> : <div>No date message</div>}
      <ProductListing />
    </>
  );
}

export default App;
