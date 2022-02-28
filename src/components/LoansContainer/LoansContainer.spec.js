import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";

import LoansContainer from "./LoansContainer";
import { mount } from "enzyme";

import waitForExpect from "wait-for-expect";
import { act } from "react-dom/test-utils";

const typeDefs = `
  input LoanSearchFiltersInput {
      sector: Int!
  }

  type LoanFundraisinginfo {
      fundedAmount: String!
  }

  type Image {
      url(customSize: String!): String!
  }

  type Country {
    name: String!
  }

  type Geocode {
    country: Country!
  }

  type Loan {
    id: Int!
    name: String!
    geocode: Geocode!
    loanAmount: String!
    image: Image!
    loanFundraisingInfo: LoanFundraisinginfo!
    whySpecial: String!
  }

  type Values {
    values: [Loan]!
  }

  type Lend {
    loans(limit: Int!, offset: Int!, filters: LoanSearchFiltersInput!): Values!
  }

  type Query {
      lend: Lend!
  }
`;

const schema = makeExecutableSchema({ typeDefs });

const mockSchema = addMocksToSchema({
  schema,
  mocks: {
    Lend: () => ({
        "loans": {
            "values": [{
                "id": 10,
                "name": "Airis",
                "geocode": {
                  "country": {
                    "name": "Peru"
                  }
                },
                "loanAmount": "300.00",
                "image": {
                    "url": "gasgfdsafads"
                },
                "loanFundraisingInfo": {
                  "fundedAmount": "150.00"
                },
                "whySpecial": "It helps this borrower grow their business."
            }
          ]
        }
    })
  },
});

const client = new ApolloClient({
  link: new SchemaLink({ schema: mockSchema }),
  cache: new InMemoryCache({
    addTypename: false
  }),
});


describe("<LoansContainer />", () => {
    it("should render the Loan", async () => {

        const limit = 1;
        const offset = 0;
        const filters = { sector: 1 };

        const wrapper = mount(
            <ApolloProvider client={client}>
                <LoansContainer limit={limit} offset={offset} filters={filters}/>
            </ApolloProvider>
        )

        await act(() =>
            waitForExpect(() => {
                wrapper.update()
                expect(wrapper.find('h2').text()).toBe("Airis")
            })
        )
    });
})
