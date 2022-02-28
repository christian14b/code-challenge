import React from "react";
import { shallow } from "enzyme";
import ProgressBar from "./ProgressBar";

describe("<ProgressBar />", () => {
    const fundingGoal = 100;
    const currentFunding = 40;

    it("should have width prop as the percentage number", () => {
        const wrapper = shallow(<ProgressBar fundingGoal={fundingGoal} currentFunding={currentFunding} />)

        expect(wrapper.find('p').text()).toBe(`$${fundingGoal - currentFunding} to go`);
    })
})
