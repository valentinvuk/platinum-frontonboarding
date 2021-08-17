import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { notification } from "antd";
import { isTtlValid } from "./utils/isTtlValid";
import { getLocalByKey } from "./utils/getLocalByKey";

export const httpLink = new HttpLink({
    uri: process.env.REACT_APP_API_URL,
});

export const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    const local = getLocalByKey("ttlExpiry");
    if (local) {
        const ttlExpiry = JSON.parse(local);

        if (isTtlValid(ttlExpiry)) {
            notification.open({
                message: "TTL expiry",
                description: "TTL expires in less than 5min",
            });
            //TODO: useMutation(REFRESH_TOKEN)
        }
    }
    return forward(operation);
});

export const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message }) => {
            return notification.open({
                message: "GraphQL error",
                description: message,
            });
        });
    if (networkError) {
        notification.open({
            message: "Network error",
            description: networkError.message,
        });
    }
});

export const client = new ApolloClient({
    link: ApolloLink.from([authLink, errorLink, httpLink]),
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
