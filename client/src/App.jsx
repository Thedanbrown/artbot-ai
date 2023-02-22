import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Checkout, Home, LoginSignup, Profile, UpdateInfo } from "./pages";
import { Header } from "./components";
import { Footer } from "./components"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      //authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
  // fetchOptions: {
  //   mode: "no-cors",
  // },
});
const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <main className="sm:p-8 px-4 py-8 w-full bg-[#f7f7ff] min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login-signup" element={<LoginSignup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/update" element={<UpdateInfo />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
