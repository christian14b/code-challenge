import React from "react";
import { shallow } from "enzyme";
import LoanCard from "./LoanCard";

describe("<LoanCard />", () => {

    const card = {
        id: 1,
        name: 'Title',
        geocode: {
            country: {
                name: 'Peru'
            }
        },
        image: {
            url: 'https://'
        },
        whySpecial: 'Description',
        loanAmount: '1000',
        loanFundraisingInfo: {
            fundedAmount: '700'
        }
    }

    it("should contain <LoanCard /> title", () => {
        const wrapper = shallow(<LoanCard card={card} />)

        expect(wrapper.find('h2').text()).toBe("Title");
    })

    it("should contain <LoanCard /> country", () => {
        const wrapper = shallow(<LoanCard card={card} />)

        expect(wrapper.find('h4').text()).toBe("Peru");
    })

    it("should contain <ProgressBar />", () => {
        const wrapper = shallow(<LoanCard card={card} />)

        expect(wrapper.find('ProgressBar').length).toEqual(1);
    })

    it("should not contain <ProgressBar />", () => {
        const card2 = {
            id: 2,
            name: 'Title',
            geocode: {
                country: {
                    name: 'Peru'
                }
            },
            image: {
                url: 'https://'
            },
            whySpecial: 'Description',
            loanAmount: '1000',
            loanFundraisingInfo: {
                fundedAmount: '1000'
            }
        }
        const wrapper = shallow(<LoanCard card={card2} />)

        expect(wrapper.find('ProgressBar').length).toEqual(0);
    })

    it("should contain <SelectFunding />", () => {
        const wrapper = shallow(<LoanCard card={card} />)

        expect(wrapper.find('SelectFunding').length).toEqual(1);
    })
})
