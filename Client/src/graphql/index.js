import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://poke-garage.vercel.app/",
  cache: new InMemoryCache(),
});
