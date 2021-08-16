import { gql } from "@apollo/client";

export const LOG_IN = gql`
    mutation ($input: LoginUserInput!) {
        login(input: $input) {
            expiresIn
            accessToken
            refreshToken
        }
    }
`;

export const REFRESH_TOKEN = gql`
    mutation ($input: RefreshAccessTokenInput!) {
        refresh(input: $input) {
            expiresIn
            accessToken
            refreshToken
        }
    }
`;

export const GET_LEAGUES = gql`
    query {
        leagues {
            id
            name
            minScore
            maxScore
            events {
                name
                eventStartDateTime
            }
        }
    }
`;

export const ADD_LEAGUE = gql`
    mutation ($input: LeagueInput!) {
        createLeague(input: $input) {
            id
        }
    }
`;
