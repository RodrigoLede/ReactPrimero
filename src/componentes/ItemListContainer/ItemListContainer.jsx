import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import obtenerProductos, { getBikebyCategory } from "../../services/mockService";
import Flex from "../Flex/Flex";
import Producto from "./Producto";

function ItemListContainer() {

  const [bikes, setBikes] = useState([])
  let {categoryid} =  useParams();

  useEffect(() => {
    if (!categoryid) {
      obtenerProductos ()
      .then((respuesta) => {
        setBikes(respuesta);
      });
    }
    else {
      getBikebyCategory(categoryid)
      .then((respuesta) => {
        setBikes(respuesta);
      });
    }
    },
    [categoryid]
  );

  return (
    <Flex>
      {bikes.map((itemIterado) => {
      return <Producto key={itemIterado.id} item={itemIterado} />
      })}
    </Flex>
  );
}

export default ItemListContainer;

