import React, { useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { getBike } from '../../services/mockService';
import { cartContext } from "../../storage/cartContext";
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {
  const [bike, setBike] = useState({ title: "loading", price: "--,--" });

  let params = useParams();
  const { addToCart } = useContext(cartContext);

  function handleAddToCart(count) {
    const bikeAndCount = {...bike, count: count};
    addToCart(bikeAndCount);
  }

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
      onAddToCart= {handleAddToCart}
      title={bike.title}
      img={bike.img}
      category={bike.category}
      price={bike.price}
    />
  );
}

export default ItemDetailContainer;