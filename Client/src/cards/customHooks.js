import { useQuery } from "@apollo/client";
import { AllCards } from "./graphql-Query";

export const useCards = (filter) => {
  const result = useQuery(AllCards, { variables: filter });
  return result;
};
