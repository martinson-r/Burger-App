import "./menuCard.css";

const MenuCard = ({menuItems}) => {

    return (
        <div className="menuCard">
            {/* For each menu item we have, render out a MenuItem */}
            <div className="menuItemBox">
                <div className="menuItemBox__nameOfMenuItem">{menuItems.item}</div>

            </div>
        </div>
    );

}

export default MenuCard;
