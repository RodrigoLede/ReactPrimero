
export default function NavItem ({href, children}){

    return(
        <li>
            <a href={href}>
                {children}
            </a>
        </li>

    );
}