import React from "react";
import { NavLink } from 'react-router-dom';

const Menu = () => (
    <div>
        <NavLink to="users">Users</NavLink>
        <NavLink to="tasks">Tasks</NavLink>
    </div>
);

export default Menu;
