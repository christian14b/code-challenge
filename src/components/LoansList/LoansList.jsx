import React from "react";
import LoanCard from "../LoanCard/LoanCard";

const LoansList = ({cards}) => {
    
    if(!cards.length) {
        return (
            <div>
                No cards found.
            </div>
        )
    }

    return (
        <div className="cards-container">
            {cards.map((card) => (
                <LoanCard key={card.id} card={card} />
            ))}
        </div>
    )

}

export default LoansList;
