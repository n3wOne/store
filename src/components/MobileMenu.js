import React, { useState } from "react";
import "../styles/menu-style.scss";
import { Link } from "react-router-dom";
import {
  Menu,
  ROUTE_TO_CART,
  ROUTE_TO_CHECKOUT,
  ROUTE_TO_HOME,
} from "../Constants";

const menuItems = [
  [ROUTE_TO_HOME, Menu.HOME],
  [ROUTE_TO_CART, Menu.CART],
  [ROUTE_TO_CHECKOUT, Menu.CHECKOUT],
];

const MobileMenu = () => {
  const [showMenu, hideMenu] = useState(false);
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input
          type="checkbox"
          checked={showMenu}
          onChange={(e) => hideMenu(e.target.checked)}
        />
        <span />
        <span />
        <span />
        <div className={"grid"}>
          <ul id="menu">
            {menuItems.map(([link, text]) => (
              <li key={text}>
                <Link onClick={() => hideMenu(false)} to={link}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileMenu;
