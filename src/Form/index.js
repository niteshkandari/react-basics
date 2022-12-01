import React from 'react'
import { useInput } from "./useInput";

const Index = () => {
    const [firstName, reset, bind] = useInput('');
    const [lastName, resetLname, bindLname] = useInput('');

    const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log({ firstName, lastName });
      reset();
      resetLname();
    };
  return (
    <form onSubmit={handleFormSubmit}>
    <input value={firstName} {...bind} />
    <input value={lastName} {...bindLname} />
    <button type={'submit'}>submit</button>
  </form>
  )
}

export default Index