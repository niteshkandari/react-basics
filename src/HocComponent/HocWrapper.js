import React from 'react';

export default function HocWrapper(OriginalComponent) {
  const ModifiedComponent = () => {
    const [counter, setCounter] = React.useState(0);
    const increment = () => {
      setCounter((prev) => prev + 1);
    };
    return <OriginalComponent increment={increment} counter={counter} />;
  };
  return <ModifiedComponent />;
}
