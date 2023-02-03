import { useState, useEffect } from "react";
import obtenerProductos from "../../services/mockService";
import Flex from "../Flex/Flex";
import Producto from "./Producto";

export default function ItemListContainer() {

  const [bikes, setBikes] = useState([])
  
  useEffect(
    () => {
      obtenerProductos ().then((respuesta) => {
        setBikes(respuesta);
      });
    },
    []
  );

  return (
    <Flex>
      {bikes.map((itemIterado) => {
      return <Producto key={itemIterado.id} item={itemIterado} />
      })}
    </Flex>
  );
}

