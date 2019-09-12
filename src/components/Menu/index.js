import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

function Menu(props) {
  return (
    <ul id="menu">
      <li>
        <NavLink exact to="/">posts</NavLink>
      </li>
      <li>
        <NavLink to="/favorites">favorites</NavLink>
      </li>
    </ul>
  );
}

export default Menu;
