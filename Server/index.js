import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { port } from "./src/config.js";
import "./src/db.js";
import {
  createCards,
  findCards,
  populateCards,
  updateCard,
} from "./src/service/card.service.js";

const typeDefs = `#graphql
type Card{
    name:String!
    price:Int!
    stock:Boolean!
    type:String!
    id:String!
    discount:Int!
    image:String!
    finalPrice:Int!
}
type Response{
  totalDocs: Int!
    totalPages:Int
    prevPage:String
    nextPage:String
    page:String
    hasNextPage:Boolean
    hasPrevPage:Boolean
    prevLink: String
    nextLink: String
    payload:[Card],
}
type CardList {
  docs: [Card]
}
type QueryParamsInput{
  type:String
}
type Query{
  allCards(type:String, name:String, page:String, limit:Int, sort:String ):Response
}

type Mutation{
  populateCard:String
  createCard(price:Int,stock:Boolean,type:String,image:String,name:String,finalPrice:Int):String
editCard(price:Int,stock:Boolean,id:String):String
}`;

//Resolvers

const resolvers = {
  Query: {
    allCards: async (root, args) => {
      return await findCards(args);
    },
  },
  Mutation: {
    populateCard: async (root, args) => await populateCards(),
    createCard: async (root, args) => await createCards(args),
    editCard: async (root, args) => await updateCard(args),
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});
const { url } = await startStandaloneServer(server, {
  listen: { port },
});

console.log(`🚀  Server ready at: ${url}`);
