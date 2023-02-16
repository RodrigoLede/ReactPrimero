import React, { useState } from "react";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({title, img, category, price, onAddToCart }) {
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
      <ItemCount onAddToCart={onAddToCart} />
      <a href="/cart"> 
        <Button> Ir al Carrito </Button>
      </a>
    </div>
  );
}

export default ItemDetail;