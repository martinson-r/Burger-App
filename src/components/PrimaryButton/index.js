import "./primaryButton.css";
import { useDispatch, useSelector } from "react-redux";
import { addMenuItemToCart } from "../../store/cart";

function PrimaryButton({ label, itemName }) {

    const dispatch = useDispatch();

    return (
        <>
            {/* Quick and dirty, but we know if the label has a size property then it is an item.
            Otherwise, it's something else. */}
            { label.size && <button className="primaryButton" onClick={() => dispatch(addMenuItemToCart({itemName, label}))}>{label.size} - {label.price}</button> }
            {!label.size && label === "Empty Cart" && <button className="primaryButton" >Empty Cart</button> }
            {!label.size && label === "Check out" && <button className="primaryButton">Check Out</button> }
        </>

    );

}

export default PrimaryButton;
