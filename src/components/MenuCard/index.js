import "./menuCard.css";
import PrimaryButton from "../PrimaryButton";
import uuid from "react-uuid";

const MenuCard = ({menuItems}) => {

    return (
        <div className="menuCard">
            {/* For each menu item we have, render out a MenuItem */}
            <div className="menuItemBox">
                <div className="menuItemBox__nameOfMenuItem">{menuItems.item}</div>
                <div>{menuItems.options.map(option => <PrimaryButton key={uuid()} label={option} itemName={menuItems.item}></PrimaryButton>)}</div>
            </div>
        </div>
    );

}

export default MenuCard;
