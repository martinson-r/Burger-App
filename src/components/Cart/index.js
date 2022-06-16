import PrimaryButton from "../PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { removeItemFromCart } from "../../store/cart";
import "./cart.css";

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    let subtotal = [];
    cart.cart.forEach((cartItem) => subtotal.push(cartItem.label.price));

    return (
    <>
        <h3>MY CART</h3>
        {cart.length == 0 && <p>Add some delicious burgers!</p>}

        {cart.cart.map((cartItem) => <div key={uuid()}><div key={uuid()} className="cartMenuItem" >{cartItem.itemName}, {cartItem.label.size} - {cartItem.label.price} </div><div className="cartMenuItem" onClick={() => dispatch(removeItemFromCart(cartItem))}><b>x</b></div></div>)}
        <h5>SubTotal:</h5>
        {console.log('subtotal', subtotal)}
        <p>{subtotal.reduce((previousValue, currentValue) => previousValue + currentValue, 0)}</p>
        <PrimaryButton label="Check out" />
        <PrimaryButton label="Empty Cart" />
    </>
    )
}

export default Cart;
