import React,{ useCallback } from "react";
import List from "./List";

const Index = () => {
  console.log("component index rendered");
  const [toggle, setToggle] = React.useState(false);
  const [value, setValue] = React.useState("");
  
  const getItem = useCallback(() => {
    return [value, value+1, value+2];
  },[value]);
  
  return (
    <div className="border h-screen">
      <div className="h-auto p-4 border border-black rounded-md w-1/2 mx-auto mt-20 grid place-items-center">
        <input
          type="number"
          className="border-2 p-2 w-full"
          placeholder="enter number"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
        <button onClick={() => setToggle(prev => !prev)}>switch</button>
        {toggle ? "bulb is on" : "bulb is off"}
        <List getItem={getItem}/>
      </div>
    </div>
  );
};
export default Index;
