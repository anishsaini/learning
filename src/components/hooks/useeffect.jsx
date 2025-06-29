
import React, {useEffect, useState} from 'react';

function Effect() {
    const[count, setcounter]=useState(0)
    
    
    useEffect(()=>{
        setTimeout(()=>{
            setcounter((count)=> count+1)
        },1500)
    },[count]) //use empty array for only once
  
  return (
    <div className="App">
      <h1>UseEffect Hook Example</h1>
      <p>Renderd: {count}</p>
      <button >Add</button>
    </div>
  );
}


export default Effect;