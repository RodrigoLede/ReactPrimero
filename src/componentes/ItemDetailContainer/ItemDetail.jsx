import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({
  title,
  img,
  category,
  price,
 }) {

  const [countInCart, setCountInCart] = useState(0);

  function handleAddToCart(count){
    console.log(`Agregaste al carrito ${count} unidades`);
    setCountInCart (count);
  }
  return (
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={img} alt={title} />
      </div>
      <div className="card-detail_detail">
        <h1>{title}</h1>
        <h4 className="priceTag">$ {price}</h4>
        <p>{category}</p>
    </div>
    {
      countInCart === 0 ?
        <ItemCount onAddToCart={handleAddToCart} />
      :
      <a href="/cart">Ir al Carrito</a>
    }
      </div>
  );
}

export default ItemDetail;