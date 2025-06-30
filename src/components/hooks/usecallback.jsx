import React, { useCallback } from 'react';
import Ref from './ref';

const Callback = () => {
    const[counter, setCounter] = React.useState(0);
    const value = () => {
        setCounter(counter+1)
    }

    const newfn = useCallback((counter) => {}, [counter]); // when [counter] is change callback will be called
  return (
    
    <div className='App'>
        <Ref newfn={newfn}/>      // and re render the component
      <h1>Counter: {counter}</h1>
      <button onClick={value} >ADD</button>
    </div>
  );
};

export default Callback;