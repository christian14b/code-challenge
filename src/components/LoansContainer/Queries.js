import { gql } from "@apollo/client";

export const GET_LOANS_QUERY = gql`
  query Query($limit: Int!, $offset: Int!, $filters: LoanSearchFiltersInput ) {
        lend {
            loans(limit: $limit, offset: $offset, filters: $filters) {
                values { 
                    id
                    name
                    geocode {
                        country {
                            name
                        }
                    }
                    loanAmount
                    image {
                        url(customSize: "w480h300")
                    }
                    loanFundraisingInfo {
                        fundedAmount
                    }
                    whySpecial
                }
            }
        }
    }
`;
