import React, { useState } from 'react';
import './App.css';

function App() {
//   const [Car, setCar] = useState({
//     brand: "Dodge",
//     model: "Hellcat",
//     year: 2019,
//     color: "Black"
//   });

//   const Change =()=>{
//     setCar((prev)=>{return{...prev, color: "Grey", model: "Demon SRT", year: "2020", brand: "Challenger"}} )
//   }

    const[counter, setCounter]=useState(0)

    const Increment=()=>{
      setCounter(counter+4)
    }

  return (
    <div className="App">
      {/* <h1>My Favourite Car is {Car.brand}</h1>
      <h2>
        Its Colour is {Car.color} and Model is {Car.model}, Year: {Car.year}.
      </h2>
      <button onClick={Change}>Change</button> */}

      <h1>Count: {counter} </h1>
      <button onClick={Increment}>Increment</button>
    </div>
  );
}

export default App;
