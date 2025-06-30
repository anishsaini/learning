import React, { useEffect, useRef } from 'react';


const Ref = () => {
//     const[count, setCount] = React.useState(0);
//     const render = useRef(0)

//     useEffect(()=>{
//         render.current = render.current + 1
//     })
    const click = useRef()
    
    
    const btnclick = ()=>{
        console.log(click.current.value)
        click.current.style.background = "red"
    }
    console.log("Ref component rendered")

  return (
    <div className="App">
        {/* <button onClick={()=>{setCount(prev=>prev+1)}}>+1</button>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(prev=>prev-1)}}>-1</button>
        <h1>Render Count: {render.current}</h1>  */}
        <input type="text"ref={click}/>
        <button onClick={btnclick}>click</button>

    </div>
  );
}


export default React.memo(Ref);