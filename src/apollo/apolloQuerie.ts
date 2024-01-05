import { gql } from '@apollo/client';

const GET_ALL_CHARACTERS = gql`
    query Character($page: Int) {
        characters(page: $page) {
            results {
                id
                name
                image
                status
                species
            }
        }
    }`

const GET_CHARACTER_BY_ID = gql`
query Character($id: ID!){
    character(id: $id) {
        name
        species
        status
        type
        gender
        origin{name}
        location {name}
        image
      },
    },
`;

export { GET_ALL_CHARACTERS, GET_CHARACTER_BY_ID };

