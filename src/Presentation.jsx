import React from "react";

const Presentation = (props) => {
  const { data, data2, setValue } = props;
  return (
    <>
      <h1>number: {data}</h1>
      <h1>number2: {data2}</h1>
      <button onClick={() => setValue(0)}>0</button>
    </>
  );
};

export default Presentation;
