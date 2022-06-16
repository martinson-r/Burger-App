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
        {cart.length == 0 && <p>Add some delicious burgers!</p>}
        {cart.cart.map((cartItem) => <div key={uuid()}><div key={uuid()} className="cartMenuItem" >{cartItem.itemName}, {cartItem.label.size} - {cartItem.label.price} </div><div className="cartMenuItem"><b>x</b></div></div>)}
        <PrimaryButton label="Check out" />
        <PrimaryButton label="Empty Cart" />
    </>
    )
}

export default Cart;
