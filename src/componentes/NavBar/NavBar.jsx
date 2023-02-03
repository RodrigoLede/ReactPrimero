import CartWidget from "./CartWidget";
import NavItem from "./NavItem";

function NavBar (props) {


    return(
        <nav>
           <ul>
           <li>
                    <a href="/">
                        <img src="/imgs/Logo.jpg" alt="Logo tienda" />
                    </a>
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