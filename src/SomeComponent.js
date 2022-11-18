import React, { useState, useEffect } from "react";

export default function SomeComponent() {
  const [timer, setTimer] = useState(0);
  var interval;

  useEffect(() => {
    interval = setInterval(() => {
      setTimer(timer => timer+1);
    }) 
    return () => clearInterval(interval);
  })
  const stop = () => {
    clearInterval(interval);
  };
  return (
    <div className="box-wrapper">
      <span>{timer}</span>
      {/* <button onClick={}>start</button> */}
      <button onClick={stop}>stop</button>
      <button onClick={() => setTimer(0)}>clear</button>
    </div>
  );
}
