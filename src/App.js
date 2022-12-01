import './App.css';
// import { useSelector, useDispatch } from "react-redux";
// import { pizzaSlice } from "./redux-store-1/pizzaSlice";
// import ReducerComponent from './ReducerComponent';
import Form from "./Form/index";

function App() {
  // const pizza = useSelector(state => state.pizza)
  // useEffect(() => {}, [variable])
  // const dispatch = useDispatch();
  
  // const handleRemove = () => {
  //  const removedItem = window.prompt("please enter topping you want to remove")
  //  dispatch(pizzaSlice.actions.removeTopping(removedItem)); 
  // }

  // const count = useSelector(state => state.count);
  // const dispatch = useDispatch();

  // const handleUserGivenValue = () => {
  //   const usergivenValue = window.prompt("Enter number");
  //   if(usergivenValue) {
  //   dispatch({type:"ADD_USER_GIVEN_VALUE",payload:parseInt(usergivenValue)})
  //   }
  // }

  return (
    <div className="App">

    {/* <p className='title'>Redux</p>  
      {count}
    <button onClick={() => dispatch({type:"INCREMENT"})}>+</button>  
    <button onClick={() => dispatch({type:"DECREMENT"})}>-</button>
    <button onClick={handleUserGivenValue}>increment by user given value</button>
    <button onClick={() => dispatch({type:"RESET"})}>reset</button> */}
    {/* <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
   <p className='title'>useReducer hook </p>
   <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    */}
    {/* <ReducerComponent/>  */}
  
    
    
{/* 
    {pizza.toppings.map(topping => {
      return <div key={topping}>{topping}</div>
     })}
     <button onClick={() => dispatch(pizzaSlice.actions.addTopping("olives"))}>add olives</button>
     <button onClick={() => dispatch(pizzaSlice.actions.addTopping("red sauce"))}>add red sauce</button>
     <button onClick={() => dispatch(pizzaSlice.actions.addTopping("mozzarella"))}>add mozzarella</button>
     <button onClick={() => dispatch(pizzaSlice.actions.addTopping('chicken'))}>add chicken</button>
     <button onClick={() => dispatch(pizzaSlice.actions.addTopping("jalapeno"))}>add jalapeno</button>
     <button onClick={handleRemove}>remove topping</button>  */}


     {/* <p className='title'> custom hook </p>
     <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>*/}
     <Form/> 
    </div>
  );
}

export default App;
