import React from "react";
import { shallow } from "enzyme";
import LoansList from "./LoansList";
import LoanCard from "../LoanCard/LoanCard";

describe("<LoansList />", () => {
    
    const cards = [
        {
            id: 1,
            image: 'https://',
            title: 'Title',
            description: 'Description',
            fundingGoal: 1000,
            currentFunding: 700
        },
        {
            id: 2,
            image: 'https://',
            title: 'Title2',
            description: 'Description2',
            fundingGoal: 500,
            currentFunding: 500
        }
    ]

    it("should show empty cards message when the card list is empty", () => {
        const wrapper = shallow(<LoansList cards={[]} isLoading={false} />)

        expect(wrapper.text()).toBe("No cards found.")
    })

    it("should contain <LoansList />", () => {
        const wrapper = shallow(<LoansList cards={cards} isLoading={false} />)
        
        expect(wrapper.find(LoanCard).length).toEqual(2);
    })

})
