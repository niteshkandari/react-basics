import React, { useState } from "react";

const Todo = () => {
  const [toDoList, setTodoList] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  const handleAddToDoList = () => {
    // const oldList = [...toDoList];
    // oldList.push(
    //   Object.assign({}, { value, id: Math.floor(Math.random() * 100000) })
    // );
    // setTodoList([...oldList]);

    const newEntry = {
      value: value,
      id: 1,
    };
    
    setTodoList(previous => [...previous, newEntry]);
    
    console.log(toDoList);
    // console.log(toDoList);
    // setTodoList(toDoList);
  };

  const handleDeleteElement = (id) => {
    const oldList = [...toDoList];
    setTodoList((previousState) => {
      return (previousState = oldList.filter((data) => data.id != id));
    });
  };

  const cssCenter = {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  };
  
  return (
    <div>
      {/**in jsx its not necessary to close and input and img tag
       * like this <input></input>
       */}
      <input value={value} onChange={(e) => handleChange(e)} />
      <button onClick={handleAddToDoList}>add</button>
      {/******jus like in angular we have ng for, for looping in an array and showing the data
       * here we can just do inside a jsx and and use map method since its return type is and array
       * we can see the changes in the ui , so when ever i click on add button it updates the toDoList array
       * and since it is a useState the whole ui will re render again
       */}
      {toDoList.length > 0 &&
        toDoList.map((data) => {
          //also i can directly write styles in and element it just that i have to pass it like and object
          return (
            <div
              style={cssCenter}
              key={data.id}
            >
              <div
                style={cssCenter}
              >
                value : {data.value} <br />
                id : {data.id}
              </div>
              <span
                style={{
                  fontWeight: 900,
                  fontSize: 20,
                  color: "red",
                  cursor: "pointer",
                }}
                onClick={() => handleDeleteElement(data.id)}
              >
                X
              </span>
              {/*onClick of the span element i m calling the function  handleDelete inside a empty arrow
              function beacuse i need to pass a value to the function 
              if i do like this onClik={handleDelet(data.id)} it will immedidately execute the function
               */}
            </div>
          ); //here also i cannot return multiple children it must be surrounded by one parent element
        })}
    </div>
  );
};

export default Todo;
