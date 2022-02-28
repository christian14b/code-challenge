import React from "react";

const SelectFunding = ({ fundingOptions }) => {
    return (
        <div className='select-container'>
            <select className='select-list'>
                {fundingOptions.map((option) => (
                    <option key={option} value={option}>${option}</option>
                ))}
            </select>
            <div className="select-icon">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
            </div>
        </div>
    )
}

export default SelectFunding;
