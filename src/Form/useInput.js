import React from 'react';

export const useInput = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);

  const reset = () => setValue('');

  const bind = {
    value,
    onChange: (e) => setValue(e.target.value),
  };
  return [value, reset, bind];
};
