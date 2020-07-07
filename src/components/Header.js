import React from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  ROUTE_TO_CART,
  ROUTE_TO_CHECKOUT,
  ROUTE_TO_HOME,
} from "../Constants";
import { useBreakpoint } from "../hoc/BreakpointProvider";
import MobileMenu from "./MobileMenu";
import CartWidget from "./cart/CartWidget";

const menuItems = [
  [ROUTE_TO_HOME, Menu.HOME],
  [ROUTE_TO_CART, Menu.CART],
  [ROUTE_TO_CHECKOUT, Menu.CHECKOUT],
];

const menuLink = (link, text) => (
  <div key={text} className="navigation-item">
    <Link to={link}>{text}</Link>
  </div>
);

export const Header = () => {
  const breakpoint = useBreakpoint();
  return breakpoint.desktop ? (
    <div className={"navigation-header grid"}>
      <div className={"col-desk-9"}>
        {menuItems.map(([link, text]) => menuLink(link, text))}
      </div>
      <div className={"col-desk-3"}>
        <CartWidget />
      </div>
    </div>
  ) : (
    <div className={"grid"}>
      <MobileMenu />
      <CartWidget />
    </div>
  );
};
