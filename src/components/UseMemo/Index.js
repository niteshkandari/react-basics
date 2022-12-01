import React, { useState, useMemo } from "react";

const Index = () => {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(false);

  const changedNumber = useMemo(() => slowFunction(number), [number]);

  return (
    <div
      className={`grid place-items-center h-screen  ${
        toggle ? "bg-yellow-400" : "bg-emerald-500"
      }`}
    >
      <button
        className="border text-white inline-flex items-center justify-center rounded-md p-2.5"
        onClick={() => setToggle((prev) => !prev)}
      >
        toggle theme
      </button>
      <input
        className="p-2 text-black border-2 border-green-400 rounded-md"
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <h1>{changedNumber}</h1>
    </div>
  );
};

const slowFunction = (number) => {
  console.log("slow function calling");
  for (let i = 0; i <= 1000000000; i++) {}
  return  number + 2;
};

export default Index;
