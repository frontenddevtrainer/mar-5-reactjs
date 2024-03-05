function DateMessage() {
  const date = new Date().toDateString();
  return <p>Today is {date}.</p>;
}

export default DateMessage;
