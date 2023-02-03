import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./card.css";

export default function Item(props){
    const {title, price, img, detail, id} = props.item;

    return(
        <div className="item-card">
            <div className="item-card_header">
                <h2>{title}</h2>
            </div>
            <div className="item-card_img">    
                <img src={img} alt={title} />
            </div>
            <div className="item-card_detail">
                <h3 className="item-card_price">$ {price}</h3>
                <small>{detail}</small>
            </div>
            <Link to= {'/detalle/${id}'}>  
                <Button padding= "16px" >
                    Tócame
                </Button>
            </Link>
            <br />
        </div>
    );
}

