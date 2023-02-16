import { useContext } from "react";
import CartWidget from "./CartWidget";
import NavItem from "./NavItem";
import "./navbar.css";
import { Link } from "react-router-dom";
import { cartContext } from "../../storage/cartContext";
import Button from "../Button/Button";

function NavBar (props) {
    const context = useContext(cartContext);
    context.test();

    function handleSubmit(evt) {
        evt.preventDefault();
        let user = evt.target.elements[0].value;
        console.log(user);
        props.onLogin(user);
    }

    return(
        <nav>
           <ul className="nav-menu">
                <Link to ="/"> 
                    <img src="/imgs/Logo.jpg" alt="Logo tienda" />
                </Link>
                <NavItem Link to= "/category/Enduro">Enduro/All Mountain</NavItem>
                <NavItem Link to= "/category/DownHill">DownHill</NavItem>
                <NavItem Link to= "/category/E-Bikes">E-Bikes</NavItem>
                <Link to ="/cart">
                    <CartWidget img= "/imgs/Chart.jpg" />
                </Link>

                <Button onClick={props.onLogout}>Log Out</Button>

                <form onSubmit={handleSubmit}>
                    Iniciar sesión
                    <input name="user"></input> 
                </form>
            </ul>
        </nav>
    );  
}

export default NavBar;