import React from "react";
import { NavLink } from 'react-router-dom';

const Menu = () => (
        <ul className="nav flex-column">
             <li class="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/tasks">Tasks</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/users">Users</NavLink>
            </li>
        </ul>
);

export default Menu;
