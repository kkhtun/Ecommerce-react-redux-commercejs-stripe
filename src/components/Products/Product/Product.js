import React from "react";
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

import { addToCart } from "../../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product.id, 1));
    };
    return (
        <Card className={classes.root}>
            <CardMedia
                image={product.image.url}
                title={product.title}
                className={classes.media}
            />
            <div className={classes.cardContentAndActions}>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography varient="h5" component="h2" gutterBottom>
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    <Typography
                        dangerouslySetInnerHTML={{
                            __html: product.description,
                        }}
                        variant="body2"
                        component="p"
                        color="textSecondary"
                    />
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton
                        aria-label="Add To Cart"
                        onClick={handleAddToCart}
                    >
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </div>
        </Card>
    );
};

export default Product;
