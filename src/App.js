import React, { useEffect } from "react";
import { Cart, Navbar, Products, Checkout } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCart } from "./redux/actions/cartActions";
const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Products />
                    </Route>
                    <Route path="/cart" exact>
                        <Cart />
                    </Route>
                    <Route path="/checkout" exact>
                        <Checkout />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
