import React, { useState } from "react";
import "./components/components.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AppComponent from "./components/App";

const App = () => {
    const client = new ApolloClient({
        uri: process.env.REACT_APP_KIVA_ENDPOINT,
        cache: new InMemoryCache()
    });

    return (
        <ApolloProvider client={client}>
            <AppComponent />
        </ApolloProvider>
    );
}

export default App;
