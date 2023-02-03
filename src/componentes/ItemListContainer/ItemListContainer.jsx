import {useState, useEffect} from "react";
import Flex from "../Flex/Flex";
import Producto from "./Producto";

export default function ItemListContainer() {

  const bikes = [
    {
      "id": 1,
      "title": "Stumpjumper",
      "price": 4584.09,
      "stock": 6,
      "category": "Riviera",
      "detail": "Brass",
      "img": "/imgs/Captura.jpg"
    }, 
    {
      "id": 2,
      "title": "Stumpjumper",
      "price": 3745.56,
      "stock": 8,
      "category": "Mazda6",
      "detail": "Aluminum",
      "img": "/imgs/Captura.jpg"
    }, 
    {
      "id": 3,
      "title": "Stumpjumper",
      "price": 9319.8,
      "stock": 2,
      "category": "Tucson",
      "detail": "Vinyl",
      "img": "/imgs/Captura.jpg"
    }, 
    {
      "id": 4,
      "title": "Enduro",
      "price": 4291.61,
      "stock": 5,
      "category": "Bonneville",
      "detail": "Stone",
      "img": "/imgs/Captura1.jpg"
    }, 
    {
      "id": 5,
      "title": "Enduro",
      "price": 6176.83,
      "stock": 5,
      "category": "LS",
      "detail": "Wood",
      "img": "/imgs/Captura1.jpg"
    }, 
    {
      "id": 6,
      "title": "Enduro",
      "price": 4786.26,
      "stock": 6,
      "category": "RX-7",
      "detail": "Wood",
      "img": "/imgs/Captura1.jpg"
    }, 
    {
      "id": 7,
      "title": "Turbo Levo",
      "price": 4609.36,
      "stock": 3,
      "category": "Silhouette",
      "detail": "Aluminum",
      "img": "/imgs/Captura2.jpg"
    }, 
    {
      "id": 8,
      "title": "Turbo Levo",
      "price": 9501.73,
      "stock": 2,
      "category": "Summit",
      "detail": "Stone",
      "img": "/imgs/Captura2.jpg"
    }, 
    {
      "id": 9,
      "title": "Turbo Levo",
      "price": 138.77,
      "stock": 8,
      "category": "Econoline E250",
      "detail": "Aluminum",
      "img": "/imgs/Captura2.jpg"
    }, 
  ];

  return (
    <Flex>
      {bikes.map((itemIterado) => {
      return <Producto key={itemIterado.id} item={itemIterado} />
      })}
    </Flex>
  );
}

