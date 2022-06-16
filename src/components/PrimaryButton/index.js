import './primaryButton.css';

function PrimaryButton({ label, itemName }) {

    return (
        <>
        <button className="primaryButton">{label.size} - {label.price}</button>
        </>

    );

}

export default PrimaryButton;
