import CartWidget from "./CartWidget";

function NavBar (props) {


    return(
        <nav>
            <img src="/" alt="Logo" />
            <ul>
                <li>
                <a href="/"> Inicio </a>
                </li>
                <li>
                <a href="/"> Bicicletas de XC </a>
                </li>
                <li>
                <a href="/"> Bicicletas de All Moountain/Enduro</a>
                </li>
                <li>
                <a href="/"> Bicicletas Eléctricas</a>
                </li>
            </ul>
            <CartWidget />
        </nav>

    );

}

export default NavBar;