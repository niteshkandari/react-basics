import React, {  createContext, useContext } from "react";
import SomeComponent from "./SomeComponent";
import "./App.css";
import SomeComponent2 from "./SomeComponent2";
import SomeComponent3  from "./SomeComponent3";

let data = "";
export let Context = createContext(data);
function App() {
   data = "hello"
  // const [state, setState] = React.useState(true);

  return( 
  <Context.Provider value={data}>
    <SomeComponent3 />
  </Context.Provider>
  )
}

export default App;





{/* <div className={`${state ? 'app-wrapper' : ""}`}>
<div className="app">
  <button onClick={() => setState((p) => !p)}>toggle</button>
  <br />
  <br />
  {/* {state && <SomeComponent />} */}
  {/* <SomeComponent2/> */}
// </div>
// </div> */}