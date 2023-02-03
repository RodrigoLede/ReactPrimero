import {useState, useEffect} from "react";
import Flex from "../Flex/Flex";
import Producto from "./Producto";



export default function ItemListContainer() {

  const bikes = [
    {
    "id": 1,
    "title": "Buick",
    "price": 4584.09,
    "stock": 6,
    "category": "Riviera",
    "detail": "Brass",
    "img": "http://dummyimage.com/130x189.png/dddddd/000000"
  }, 
  {
    "id": 2,
    "title": "Mazda",
    "price": 3745.56,
    "stock": 8,
    "category": "Mazda6",
    "detail": "Aluminum",
    "img": "http://dummyimage.com/211x227.png/cc0000/ffffff"
  }, 
  {
    "id": 3,
    "title": "Hyundai",
    "price": 9319.8,
    "stock": 2,
    "category": "Tucson",
    "detail": "Vinyl",
    "img": "http://dummyimage.com/146x105.png/ff4444/ffffff"
  }, 
  {
    "id": 4,
    "title": "Pontiac",
    "price": 4291.61,
    "stock": 5,
    "category": "Bonneville",
    "detail": "Stone",
    "img": "http://dummyimage.com/212x238.png/ff4444/ffffff"
  }, 
  {
    "id": 5,
    "title": "Lincoln",
    "price": 6176.83,
    "stock": 5,
    "category": "LS",
    "detail": "Wood",
    "img": "http://dummyimage.com/141x142.png/dddddd/000000"
  }, 
  {
    "id": 6,
    "title": "Mazda",
    "price": 4786.26,
    "stock": 6,
    "category": "RX-7",
    "detail": "Wood",
    "img": "http://dummyimage.com/229x185.png/cc0000/ffffff"
  }, 
  {
    "id": 7,
    "title": "Oldsmobile",
    "price": 4609.36,
    "stock": 3,
    "category": "Silhouette",
    "detail": "Aluminum",
    "img": "http://dummyimage.com/115x110.png/cc0000/ffffff"
  }, 
  {
    "id": 8,
    "title": "Eagle",
    "price": 9501.73,
    "stock": 2,
    "category": "Summit",
    "detail": "Stone",
    "img": "http://dummyimage.com/122x184.png/dddddd/000000"
  }, 
  {
    "id": 9,
    "title": "Ford",
    "price": 138.77,
    "stock": 8,
    "category": "Econoline E250",
    "detail": "Aluminum",
    "img": "http://dummyimage.com/242x227.png/ff4444/ffffff"
  }, 
  {
    "id": 10,
    "title": "Geo",
    "price": 6184.32,
    "stock": 1,
    "category": "Prizm",
    "detail": "Vinyl",
    "img": "http://dummyimage.com/224x198.png/cc0000/ffffff"
  }

];

  return (
    <Flex>
        {bikes.map((itemIterado) => <Producto item={itemIterado} />)}
    </Flex>
  );
}

