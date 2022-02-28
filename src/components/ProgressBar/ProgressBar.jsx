import React, { useEffect, useState } from "react";

const ProgressBar = ({fundingGoal, currentFunding}) => {
    const [goalPercentage, setGoalPercentage] = useState('0%');

    useEffect(() => {
        setGoalPercentage(String(Math.ceil(Number(currentFunding) / Number(fundingGoal) * 100)) + '%');
    }, [fundingGoal, currentFunding])

    return (
        <>
            <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: goalPercentage }}></div>
            </div>
            <p className="progress-information">${fundingGoal - currentFunding} to go</p>
        </>
    )
}

export default ProgressBar;
