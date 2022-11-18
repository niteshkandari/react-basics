import React, { useState, useRef, createRef } from "react";
import { Component1 } from "./Component1";

const  SomeComponent3 = (props) => {
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");
  const inputRef = useRef("");
  let inputRef2 = createRef("");

  console.log("page rendered");
  console.log(inputRef,"ref");

  const showUseRef = () => {
    console.log(inputRef.current.value);
    inputRef2.current = inputRef.current.value;
  };

  const showCreateRef = () => {
    console.log(inputRef2);
  };
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const Onfocus = () => inputRef.current.focus();
  const OnBlur = () => {
    console.log(inputRef.current.blur);
  inputRef.current.blur(); 
}
  return (
    <div className="">
      <button onClick={handleToggle}>{toggle ? "on" : "off"}</button>
      <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={showUseRef}>show use ref value</button>
      <button onClick={showCreateRef}>show create ref value</button>
      <button onClick={Onfocus}>focus</button>
      <button onClick={OnBlur}>blur</button>
      <Component1></Component1>
    </div>
  );
}

export default SomeComponent3;
