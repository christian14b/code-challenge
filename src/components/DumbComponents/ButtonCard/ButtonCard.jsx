import React from "react";

const ButtonCard = ({ onClick }) => {
    return (
        <div className='btn-container'>
            <button className="btn" onClick={onClick}>Lend now</button>
        </div>
    )
}

export default ButtonCard;
