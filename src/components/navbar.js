import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
const ikon =
<FontAwesomeIcon className="ikon" icon={faChevronDown} />
return (

<nav className="navbar">
    <ul>
        <div className="dropdown">
            <li>
                <Link to="/Velkommen" title="Velkommen">Velkommen {ikon}</Link>
            </li>

            <div className="dropdown-indhold">
                <p>undermenu</p>
                <div className="dropdown-indhold2">
                <p>undermenu 2</p>
                <p>undermenu 2</p>
               
            </div>
                <p>undermenu</p>
                <p>undermenu</p>
                <p>undermenu</p>
            </div>
        </div>
        <li>
            <NavLink to="/Verdensballetten" title="Verdensballetten">Verdensballetten {ikon}</NavLink>
        </li>
        <li>
            <NavLink to="/Nyheder" title="Nyheder">Nyheder</NavLink>
        </li>
        <li>
            <NavLink to="/Events og mødefaciliteter" title="Events og mødefaciliteter">Events og mødefaciliteter
                {ikon}</NavLink>
        </li>
        <li>
            <NavLink to="/Hvad siger vores gæster" title="Hvad siger vores gæster">Hvad siger vores gæster</NavLink>
        </li>
        <li>
            <NavLink to="/Om Møllerup Gods" title="Om Møllerup Gods">Om Møllerup Gods {ikon}</NavLink>
        </li>
        <li>
            <NavLink to="/Kontakt os" title="Kontakt os">Kontakt os</NavLink>
        </li>
        <li>
            <NavLink to="/AddNewsConst" title="AddNewsConst">Tilføj Nyheder</NavLink>
        </li>
    </ul>
</nav>

);
}

export default Navbar;