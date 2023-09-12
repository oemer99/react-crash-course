import React, { useState } from "react";


function Counter(){
    const [counter, setCounter] = useState(0)

    // function incrementCounter() {
    //     setCounter((prevCounter) => prevCounter + 1)
    // }

    // function decrementCounter() {
    //     setCounter((prevCounter) => prevCounter - 1)
        
    // }

    return (
        <div className="count">
    <button className="minus" onClick={() =>setCounter(counter - 1)}>-</button>
    {counter}
    <button className="plus" onClick={() => setCounter(counter + 1)}>+</button>
    </div>
)
}
