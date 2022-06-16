import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MenuCard from "../MenuCard";
import { getMenu } from "../../store/menu";
import uuid from "react-uuid";
import "./home.css";

function Home() {

    const dispatch = useDispatch();
    const menu = useSelector(state => state.menu.menu);

    useEffect(() => {
        dispatch(getMenu);
      }, [dispatch]);

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
                </div>
                <div className="menu">
                {/* For each category we have, render out a MenuCard */}
                {menu !== undefined && menu.menu?.map((item) =>
                    <MenuCard key={uuid()} menuItems={item}/>
                )}
            </div>
        </>

    );

}

export default Home;
