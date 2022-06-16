import "./modal.css";
import Cart from '../Cart';
import { useState } from "react";


const Modal = ({setIsVisible}) => {

    return (
        <div className="cartModal">
            {/* As soon as the user clicks out of the modal, we want this to close */}
            {/* <div className="close" onClick={() => setIsVisible(false)} /> */}
            <button onClick={() => setIsVisible(false)} >x</button>
            <Cart />
        </div>
    )

}

export default Modal;
