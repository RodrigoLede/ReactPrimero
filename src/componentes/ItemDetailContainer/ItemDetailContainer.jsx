import React, { useState, useEffect } from "react";
import { getBike } from '../../services/mockService';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  const [bike, setBike] = useState([])
  
  useEffect(
    () => {
      getBike().then((respuesta) => {
        setBike(respuesta);
      });
    },
    []
  );

  return (
   <ItemDetail
      title={bike.title}
      img={bike.img}
      category={bike.category}
      price={bike.price}/>
  );
}
