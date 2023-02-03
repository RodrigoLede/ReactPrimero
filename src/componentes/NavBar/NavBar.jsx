import CartWidget from "./CartWidget";
import NavItem from "./NavItem";
import "./navbar.css";
import {Link} from "react-router-dom";

function NavBar (props) {


    return(
        <nav>
           <ul>
           <li>
                    <Link to="/">
                        <img src="/imgs/Logo.jpg" alt="Logo tienda" />
                    </Link>
                </li>
                <NavItem href="/"> Bicicletas de XC </NavItem>
                <NavItem href="/"> Bicicletas de All Moountain/Enduro </NavItem>
                <NavItem href="/"> Bicicletas Eléctricas</NavItem>
            </ul>
            <CartWidget img= "/imgs/Chart.jpg" />
        </nav>

    );

}

export default NavBar;