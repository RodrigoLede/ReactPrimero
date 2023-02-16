import ItemCount from "../ItemCount/ItemCount";


function ItemDetail({
  title,
  img,
  category,
  price,
 }) {

  function handleAddToCart(count){
    console.log(`Agregaste al carrito ${count} unidades`)
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
      <ItemCount onAddToCart={handleAddToCart} />
    </div>
  );
}

export default ItemDetail;