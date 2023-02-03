import {Link} from "react-router-dom";

export default function NavItem ({href, children}){

    return(
        <li className="nav-item">
            <Link className="nav-bar_link" to={href}>
                {children}
            </Link>
        </li>
    );
}