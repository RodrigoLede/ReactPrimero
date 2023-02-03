import React from 'react'
import { useState } from 'react'
import "./itemcount.css";

export default function ItemCount(props) {

    const[count, setCount] = useState(1);
       
    function handleSumar () {
        if (count < props.stock)
            setCount (count +1)
        else
            setCount (props.stock) 
    }

    function handleRestar () {
        setCount (count -1)
    }
    function mostrarMensaje() {
        alert("Usted ha agragado "+ count + " producto/s al carrito")
    }
  return (
    
    <div className="itemcount_container">
        <div className="itemcount_btns">
            <button onClick= { mostrarMensaje }> Agrega al Carrito </button>
        </div>
        <div className="itemcount_control">
            <button disabled= { count === 1} onClick={handleRestar}> - </button>
            <p className="itemcount_count">{count}</p>
            <button disabled= { count === props.stock} onClick={handleSumar}> + </button>
        </div>
    </div>
  )
}
