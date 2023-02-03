import CartWidget from "./CartWidget";
import NavItem from "./NavItem";
import "./navbar.css";
import {Link} from "react-router-dom";

function NavBar () {

    const links = ["CrossCountry (XC)", "Enduro/All Mountain", "DownHill (DH)", "E-Bikes"];

    return(
        <nav>
           <ul className="nav-menu">
            <Link to="/">
                    <img src="/imgs/Logo.jpg" alt="Logo tienda" />
                </Link>
            {links.map((elemento) => (
                <NavItem key={elemento} href="/">{elemento}</NavItem>))}   
            {<CartWidget img= "/imgs/Chart.jpg" />}
            </ul>
        </nav>
    );

}

export default NavBar;