import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    Paper,
    Stepper,
    Step,
    StepLabel,
    Typography,
    CssBaseline,
} from "@material-ui/core";
import useStyles from "./styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import ConfirmedOrder from "./ConfirmedOrder";
import { generateCheckoutToken } from "../../redux/actions/checkoutActions";
const Checkout = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const steps = ["Shipping address", "Payment details"];
    const [activeStep, setActiveStep] = useState(0);
    const nextStep = () =>
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () =>
        setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const cart = useSelector((state) => state.cartReducer.cart);
    // Generating Checkout Token
    useEffect(() => {
        if (cart.id) {
            dispatch(generateCheckoutToken(cart.id));
        } else {
            history.push("/");
        }
    }, [dispatch, cart, history]);

    const Form = () => {
        if (activeStep === 0) {
            return <AddressForm nextStep={nextStep} />;
        } else if (activeStep === 1) {
            return <PaymentForm backStep={backStep} nextStep={nextStep} />;
        } else if (activeStep === steps.length) {
            return <ConfirmedOrder />;
        }
    };
    return (
        <>
            <CssBaseline />
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper
                        activeStep={activeStep}
                        className={classes.stepper}
                    >
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <Form />
                </Paper>
            </main>
        </>
    );
};

export default Checkout;
