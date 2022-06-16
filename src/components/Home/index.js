import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MenuCard from "../MenuCard";
import Modal from "../Modal";
import { getMenu } from "../../store/menu";
import uuid from "react-uuid";
import "./home.css";

function Home() {

    const dispatch = useDispatch();
    const menu = useSelector(state => state.menu.menu);
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getMenu);
      }, [dispatch]);

    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <div className="container">
                    <header className="header">
                        <img src="/bobs_burgers_logo.png" alt="Bob's Burgers Logo" className="logo"></img>
                        <div className="contactInfo">
                            <div>123 Ocean Avenue, Ocean View, NJ, 07735</div>
                            <div>(123) 456-6789</div>
                        </div>
                    </header>
                    <div className="menu">
                        {console.log('cart.....', cart)}

                    <div className="cart-text" onClick={() => setIsVisible(true)}><b>View Cart</b></div>
                    <div className="cart-counter" onClick={() => setIsVisible(true)}>{cart.cart.length}</div>

                    <div className="cart" onClick={() => setIsVisible(true)}>View Cart</div>
                    {/* For each category we have, render out a MenuCard */}
                    {menu !== undefined && menu.menu?.map((item) =>

                        <MenuCard key={uuid()} menuItems={item}/>
                    )}

                </div>
            </div>
            {isVisible && <Modal setIsVisible={setIsVisible} />}
        </>

    );

}

export default Home;
