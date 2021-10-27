import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem/CartItem";
import { emptyCart } from "../../redux/actions/cartActions";

const Cart = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer.cart);
    const cartIsEmpty = () => {
        return (
            <Typography>
                You have no items in the cart,
                <Link to="/" className={classes.link}>
                    &nbsp;start adding some
                </Link>
                !
            </Typography>
        );
    };
    const renderCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} md={3} key={item.id}>
                        <CartItem item={item} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button
                        className={classes.emptyButton}
                        size="large"
                        type="button"
                        variant="contained"
                        color="secondary"
                        onClick={() => dispatch(emptyCart())}
                    >
                        Empty Cart
                    </Button>
                    <Button
                        className={classes.checkoutButton}
                        component={Link}
                        to="/checkout"
                        size="large"
                        type="button"
                        variant="contained"
                        color="primary"
                    >
                        Checkout
                    </Button>
                </div>
            </div>
        </>
    );

    if (!cart.line_items) return "Loading...";
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>
                Your Shopping Cart
            </Typography>
            {!cart.line_items.length ? cartIsEmpty() : renderCart()}
        </Container>
    );
};

export default Cart;
