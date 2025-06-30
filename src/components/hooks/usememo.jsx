import React, { useMemo } from 'react';


function Memo(params) {


    const[Counter, setCounter] = React.useState(0);
    const[Number, setNumber] = React.useState(0);

    function cube(num){
        console.log("cube function called")
        return (num*num*num);
    }
    const result = useMemo(()=>{return (cube(Number))}, [Number]);

  return (
    <div className='App'>
        <input type="number" value={Number} onChange={(e)=>{setNumber(e.target.value)}} />
      <h1>Cube of the no: {result}</h1>
      <button onClick={()=>{setCounter(Counter+1)}}>counter++</button>
      <h1>Counter: {Counter}</h1>
    </div>
  );
};

export default Memo;