import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Badge,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
    const classes = useStyles();
    const location = useLocation();
    const totalItems = useSelector((state) =>
        state.cartReducer.cart.total_items
            ? state.cartReducer.cart.total_items
            : 0
    );
    return (
        <AppBar className={classes.appBar} position="fixed" color="inherit">
            <Toolbar>
                <Typography
                    component={Link}
                    to="/"
                    className={classes.title}
                    variant="h6"
                    color="inherit"
                >
                    CommerceJS
                </Typography>
                <div className={classes.grow} />
                {location.pathname === "/" && (
                    <div>
                        <IconButton
                            component={Link}
                            to="/cart"
                            aria-label="Show Cart Items"
                            color="inherit"
                        >
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
