import Button from "./Button/Button";

export default function Card(props){

    return(
        <div>
            <h2>{props.title}</h2>
            <br />
            <img height= "270px" src={props.img} alt={props.title} />
            <h3>${props.price}</h3>
            <small>{props.detail}</small>
            <Button padding= "16px" >Tócame</Button>
        </div>
    );
}

