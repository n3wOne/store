import React from "react"
import { Navigation } from "./Navigation"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const menuItems = [
        ["/", "Home"],
        ["/cart", "Cart"],
        ["/checkout", "Checkout"]
    ];

const menuButton = (link, text)=><Grid item><Link to={link}><Button color={"primary"}>{text}</Button></Link></Grid>;

export const Header = () => (
  <Grid container spacing={5} xs={12} justify="center" alignItems={"center"} className={"header"}>
      { menuItems.map(item => menuButton(item[0], item[1])) }
  </Grid>
)
