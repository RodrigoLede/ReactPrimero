import React from 'react'
import { useState } from 'react'

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
    
    <div style={{display: "flex" , border: "solid 1px black", padding:"15px"}}>
        <button onClick= { mostrarMensaje }> Agrega al Carrito </button>
        <button disabled= { count === 1} onClick={handleRestar}> - </button>
        <p>{count}</p>
        <button disabled= { count === props.stock} onClick={handleSumar}> + </button>
    </div>
  )
}
