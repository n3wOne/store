import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
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

const menuLink = (link, text) => (
  <Grid key={text} className="navigation-item" item>
    <Link to={link}>{text}</Link>
  </Grid>
);

export const Header = () => (
  <Grid
    key={"header"}
    container
    spacing={5}
    justify="center"
    alignItems={"center"}
    className={"navigation-header"}
  >
    {menuItems.map((item) => menuLink(item[0], item[1]))}
  </Grid>
);
