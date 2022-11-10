import './App.css';
import { useEffect, useState } from "react"
import Todo from "./Todo";  //here i m importing a component from diff 
//file which i am gonna render inside my app function
// also a react component can only return one div 
// i cannot do like this, those two divs has to be enclosed inside a parent div
//  const ExApp = () => {
//   return (
//     <div>
//     <div></div>
//     <div></div>
//     </div>
//   );
//  }


function App() {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    // in set state here we can update the value in two ways
    //1 is this one with a call back where we get the snapshot 
    //of the previous value and this is also the recommended way -> 
    setNumber(previous => {
      return previous = previous + 1;
    })
    // 2 other way to update the value in set state is 
    //here we just take the variable and directly update it , one disadvantage here is that we dont have 
    // any idea about the previous value
    setNumber(number++);
  }
  const handleDecrement = () => {
    setNumber(previous => {
      return previous = previous - 1;
    })
  }

  return (
    <div className="App">
      {number}

      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>

      {/**** for rending a component inside other component we just have to write the name of 
       * component , also when ever we create a component the first letter must be capital react would
       * just not recognise it as a component
       */}

       <Todo/>
    </div>
  );
}

export default App;
