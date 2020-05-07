import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

import { connectCartWidgetToStore } from "../hoc/ConnectHolder"
import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";

const StyledBadge = withStyles((theme) => ({
    badge: {
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    }
}))(Badge);

function CartWidget(props) {
    return (
        <Grid container xs={12} justify={"center"} alignItems={"center"}>
            <Grid item>
            <IconButton aria-label="cart"  style={{outline: `none`}}>
                <StyledBadge anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }} badgeContent={props.count} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
            </Grid>
            <Grid item>
                <LocalAtmIcon/> {props.total} руб.
            </Grid>
            </Grid>
    );
}


export default connectCartWidgetToStore(CartWidget)