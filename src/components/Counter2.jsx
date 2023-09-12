import React, { useState } from "react";


function Counter2(){
    const [cart, setCart] = useState({item: "apple", 
    quantity: 0})

    function removeApple(){
        // 1. Use callback to get the previous value
        // 2. Spread out all the properties of the prev states
        // 3. Only change the property that you need to change

        // 1:04:16
        setCart(prevCart => ({...prevCart, quantity: prevCart.quantity - 1}))
    }

    function addApple(){
        setCart(prevCart => ({...prevCart, quantity: prevCart.quantity + 1}))
    }

    return (
        <div>
    <button onClick={removeApple}>-</button>
    {cart.quantity}
    {cart.item}
    <button onClick={addApple}>+</button>
    </div>
)
}

export default Counter2
