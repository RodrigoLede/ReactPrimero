import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";

function ItemDetail({
  title,
  img,
  category,
  price,
  onAddToCart,
  isInCart,
  stockUpdated,
}) {
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
    <ItemCount stock={8} />
    </div>
  );
}

export default ItemDetail;