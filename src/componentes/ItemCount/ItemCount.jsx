import React from 'react'
import { useState } from 'react'
import "./itemcount.css";

export default function ItemCount({ onAddToCart }) {

    const[count, setCount] = useState(1);
       
    function handleSumar () {
        if (count < 8 )
            setCount (count +1)
        else
            setCount (8) 
    }

    function handleRestar () {
        setCount (count -1)
    }
   
  return (
    
    <div className="itemcount_container">
        <div className="itemcount_btns">
            <button onClick= {() => onAddToCart(count)}> Agrega al Carrito </button>
        </div>
        <div className="itemcount_control">
            <button disabled= { count === 1} onClick={handleRestar}> - </button>
            <p className="itemcount_count">{count}</p>
            <button disabled= { count === 8} onClick={handleSumar}> + </button>
        </div>
    </div>
  )
}
