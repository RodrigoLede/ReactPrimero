import CartWidget from "./CartWidget";
import NavItem from "./NavItem";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar () {

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
            </ul>
        </nav>
    );

}

export default NavBar;