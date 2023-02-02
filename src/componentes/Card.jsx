import Button from "./Button/Button";

function Card(props){
    

    return(
        <div>
            <h3>{props.title}</h3>
            <br />
            <img height= "270px" src={props.img} alt={props.title} />
            <h3>${props.price}</h3>
            <small>{props.detail}</small>
            <Button text= "Tócame"/>
        </div>
    );
}

export default Card;
