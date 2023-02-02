import Button from "./Button/Button";

function Card(){

    const producto= {
        precio: 500,
        nombre: "Remera",
        descripcion: "La remera",
    };

    return(
        <div>
            <h3> {producto.nombre} </h3>
            <br />
            <h3>$ {producto.precio} </h3>
            <small>{producto.descripcion}</small>
            <Button />
        </div>
    )
}

export default Card;
