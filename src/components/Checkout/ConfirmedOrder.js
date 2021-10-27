import React from "react";
import {
    Divider,
    Typography,
    Button,
    CircularProgress,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const ConfirmedOrder = () => {
    const classes = useStyles();
    const { order, error } = useSelector((state) => state.checkoutReducer);
    if (error) {
        return (
            <>
                <Typography variant="h5">Error: {error}</Typography>
                <br />
                <Button
                    component={Link}
                    variant="outlined"
                    type="button"
                    to="/"
                >
                    Back to Home
                </Button>
            </>
        );
    }
    if (order.customer) {
        return (
            <>
                <div>
                    <Typography variant="h5">
                        Thank you for your purchase, {order.customer.firstname}
                        {order.customer.lastname}!
                    </Typography>
                    <Divider className={classes.divider} />
                    <Typography variant="subtitle2">
                        Order ref: {order.customer_reference}
                    </Typography>
                </div>
                <br />
                <Button
                    component={Link}
                    variant="outlined"
                    type="button"
                    to="/"
                >
                    Back to home
                </Button>
            </>
        );
    } else {
        return (
            <div className={classes.spinner}>
                <CircularProgress />
            </div>
        );
    }
};
export default ConfirmedOrder;
