import React, { useContext } from 'react'
import { Context } from "./App";

export const Component2 = (props) => {
    console.log(props,"props")
   const data =  useContext(Context);
    console.log(data);
  return (
    <div>{props.children}</div>
  )
}
