import React from "react";

const Component = (props) => {
  const { children, onClick, className } = props;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Component;
