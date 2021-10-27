import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    InputLabel,
    Select,
    MenuItem,
    Button,
    Grid,
    Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import CustomTextField from "./CustomTextField";
import {
    fetchShippingCountries,
    fetchShippingSubdivisions,
    fetchShippingOptions,
    setShippingCountry,
    setShippingSubdivision,
    setShippingOption,
    setShippingData,
} from "../../redux/actions/checkoutActions";

const AddressForm = ({ nextStep }) => {
    const methods = useForm();
    const dispatch = useDispatch();

    const {
        token,
        shippingCountries,
        shippingCountry,
        shippingSubdivisions,
        shippingSubdivision,
        shippingOptions,
        shippingOption,
    } = useSelector((state) => state.checkoutReducer);

    useEffect(() => {
        if (token.id) {
            dispatch(fetchShippingCountries(token.id));
        }
    }, [token, dispatch]);

    useEffect(() => {
        if (shippingCountry && token.id) {
            dispatch(fetchShippingSubdivisions(token.id, shippingCountry));
        }
    }, [shippingCountry, dispatch, token]);

    useEffect(() => {
        if (shippingSubdivision && token.id) {
            dispatch(
                fetchShippingOptions(
                    token.id,
                    shippingCountry,
                    shippingSubdivision
                )
            );
        }
    }, [shippingSubdivision, dispatch, token, shippingCountry]);
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Shipping Address
            </Typography>
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit((data) => {
                        dispatch(
                            setShippingData({
                                ...data,
                                shippingCountry,
                                shippingSubdivision,
                                shippingOption,
                            })
                        );
                        nextStep();
                    })}
                >
                    <Grid container spacing={3}>
                        <CustomTextField name="firstName" label="First Name" />
                        <CustomTextField name="lastName" label="Last Name" />
                        <CustomTextField name="address1" label="Address" />
                        <CustomTextField name="email" label="Email" />
                        <CustomTextField name="city" label="City" />
                        <CustomTextField name="zip" label="ZIP/Postal Code" />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select
                                value={shippingCountry}
                                fullWidth
                                onChange={(e) =>
                                    dispatch(setShippingCountry(e.target.value))
                                }
                            >
                                {shippingCountries.map((country) => (
                                    <MenuItem
                                        key={country.code}
                                        value={country.code}
                                    >
                                        {country.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select
                                value={shippingSubdivision}
                                fullWidth
                                onChange={(e) =>
                                    dispatch(
                                        setShippingSubdivision(e.target.value)
                                    )
                                }
                            >
                                {shippingSubdivisions.map((subdivision) => (
                                    <MenuItem
                                        key={subdivision.code}
                                        value={subdivision.code}
                                    >
                                        {subdivision.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select
                                value={shippingOption}
                                fullWidth
                                onChange={(e) =>
                                    dispatch(setShippingOption(e.target.value))
                                }
                            >
                                {shippingOptions.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {`${option.description} - (${option.price.formatted_with_symbol})`}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <br />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Button component={Link} to="/cart" variant="outlined">
                            Back To Cart
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Next
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </>
    );
};

export default AddressForm;
