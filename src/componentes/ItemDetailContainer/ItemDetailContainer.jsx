import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getBike } from '../../services/mockService';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [bike, setBike] = useState([])
  let params = useParams();

  useEffect(() => {
      getBike(params.itemid)
      .then((respuesta) => {
        setBike(respuesta);
      })
      .catch((error) => alert(error));
    },
    []
  );

  return (
   <ItemDetail
      title={bike.title}
      img={bike.img}
      category={bike.category}
      price={bike.price}
    />
  );
}

export default ItemDetailContainer;