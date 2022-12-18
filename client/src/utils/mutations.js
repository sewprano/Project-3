import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($username: String!, $password: String!) {
    login(email: $username, password: $password) {
        token
        user {
            _id
            username
        }
    }
}`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
        tokenuser {
            _id
            username
        }
    }
}`;