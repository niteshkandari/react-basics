import React from 'react';
import HocWrapper from './HocWrapper';

export default function Counter() {
  const ClickComponent = HocWrapper(ClickCounter); 
  // console.log(ClickComponent)
return (
  <>
    {HocWrapper(ClickCounter)}
    {HocWrapper(HoverCounter)}
  </>
);
}

const ClickCounter = ({ increment, counter }) => {
return <button onClick={increment}>click {counter}</button>;
};

const HoverCounter = ({ increment, counter }) => {
return <h1 onMouseOver={increment}>hover {counter}</h1>;
};

