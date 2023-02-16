import { Link } from "react-router-dom";

const NavItem = ({ to, children }) => {

    return (
        <li className="nav-item">
            <Link className="nav-bar_link" to={to}>
                {children}
            </Link>
        </li>
    );
};

export default NavItem;