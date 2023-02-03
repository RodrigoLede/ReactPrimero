import {Link} from "react-router-dom";

export default function NavItem ({to, children}){

    return(
        <li className="nav-item">
            <Link className="nav-bar_link" to={to}>
                {children}
            </Link>
        </li>
    );
}