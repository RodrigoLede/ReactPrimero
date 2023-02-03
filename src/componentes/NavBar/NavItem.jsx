import {Link} from "react-router-dom";

export default function NavItem ({href, children}){

    return(
        <li className="nav-item">
            <Link className="nav-link" to={href}>
                {children}
            </Link>
        </li>
    );
}