import React from "react";
import LoansContainer from "../components/LoansContainer/LoansContainer";

const Borrowers = () => {
    const limit = 12;
    const offset = 0;
    const filters = { sector: 1 };

    return (
        <div className="container">
            <LoansContainer limit={limit} offset={offset} filters={filters} />
        </div>
    )
}

export default Borrowers;
