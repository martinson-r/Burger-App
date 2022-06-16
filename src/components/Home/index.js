import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./home.css";

function Home() {

    return (
        <div className="container">
            <header className="header">
                <img src="/bobs_burgers_logo.png" alt="Bob's Burgers Logo" className="logo"></img>
                <div className="contactInfo">
                    <div>123 Ocean Avenue, Ocean View, NJ, 07735</div>
                    <div>(123) 456-6789</div>
                </div>
            </header>
        </div>
    );

}

export default Home;
