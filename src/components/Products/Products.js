import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Product from "./Product/Product";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productActions";
const Products = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productsReducer.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container spacing={4} justifyContent="center">
                {products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;
