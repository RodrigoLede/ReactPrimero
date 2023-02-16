import React, {useContext } from "react";
import { cartContext } from "../../storage/cartContext";


function CartWidget (props) {

    const contexto = useContext(cartContext);

    return(
        <>
            <img src={props.img} alt="Carrito"/>
            <span>{contexto.getTotalItemsInCart()}</span>
        </>
    );
}

export default CartWidget;