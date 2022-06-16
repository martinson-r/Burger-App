import PrimaryButton from "../PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import "./cart.css";

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
    <>
        <h3>MY CART</h3>

        <PrimaryButton label="Check out" />
        <PrimaryButton label="Empty Cart" />
    </>
    )
}

export default Cart;
