import React from "react";
import {
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
} from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import {
    updateCartQuantity,
    removeFromCart,
} from "../../../redux/actions/cartActions";
const CartItem = ({ item }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.root}>
            <CardMedia
                image={item.image.url}
                alt={item.name}
                className={classes.media}
            />
            <div className={classes.cardContentAndActions}>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5">{item.name}</Typography>
                    <Typography variant="h5">
                        {item.line_total.formatted_with_symbol}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <div className={classes.buttons}>
                        <Button
                            type="button"
                            size="small"
                            onClick={() =>
                                dispatch(
                                    updateCartQuantity(
                                        item.id,
                                        item.quantity - 1
                                    )
                                )
                            }
                        >
                            -
                        </Button>
                        <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                        <Button
                            type="button"
                            size="small"
                            onClick={() =>
                                dispatch(
                                    updateCartQuantity(
                                        item.id,
                                        item.quantity + 1
                                    )
                                )
                            }
                        >
                            +
                        </Button>
                    </div>
                    <Button
                        variant="contained"
                        type="button"
                        color="secondary"
                        onClick={() => dispatch(removeFromCart(item.id))}
                    >
                        Remove
                    </Button>
                </CardActions>
            </div>
        </Card>
    );
};

export default CartItem;
