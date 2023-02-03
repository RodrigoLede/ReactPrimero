import {useState, useEffect} from "react";
import Card from "../Card";



export default function ItemListContainer() {

  const miEstilo={
    backgroundColor: "green",
    margin: "30px",
    padding: "50px",
    textAlign: "center",
  };

  return (
    <div style={miEstilo} className="catalogo">
        <Card img= "/imgs/Captura.jpg" title= "Stumpjumper" price= {500} detail= "Expert pro"/>
        <Card img= "/imgs/Captura1.jpg" title= "Enduro" price= {800} detail= "Expert pro"/>
        <Card img= "/imgs/Captura2.jpg" title= "Turbo Levo" price= {600} detail= "Expert pro"/>
      </div>
  )
}
