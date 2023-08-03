import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import "./src/db.js";

const typeDefs = `#graphql
type Card{
    title:String
    price:Float
    stock:Boolean
    serie:String
    id:String
}

type Query{
  allCards:[Card]
  findCard:Card
}

type Mutation{
  addCard(title:String
  price:String
  stock:Boolean
  serie:String):Card
editCard(title:String):Card
}`;

//Resolvers

const resolvers = {
  Query: {
    allCards: () => Card,
    findCard: (root, args) => Card,
  },
  Mutation: {
    addCard: () => Card,
    editCard: () => Card,
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
