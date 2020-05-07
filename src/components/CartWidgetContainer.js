import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CartWidget from "./CartWidget";
import {Cart} from "./Cart";
import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import {connectCartWidgetToStore} from "../hoc/ConnectHolder";

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

const StyledBadge = withStyles((theme) => ({
    badge: {
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    }
}))(Badge);

function CartWidgetContainer(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <IconButton aria-describedby={id} onClick={handleClick} aria-label="cart" style={{outline: `none`}}>
                            <StyledBadge anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }} badgeContent={props.count} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
            <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Cart />
            </Popover>
            <LocalAtmIcon/> {props.total} руб.
        </>
    );
}
export default connectCartWidgetToStore(CartWidgetContainer)