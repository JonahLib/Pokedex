import {
  useQuery as useApolloQuery,
  DocumentNode,
  OperationVariables,
  QueryResult,
  QueryHookOptions,
} from "@apollo/client";

import { client } from "@src/client";

export const useQuery = <
  QueryReturnType,
  QueryVariables extends OperationVariables = OperationVariables
>(
  query: DocumentNode,
  options?: QueryHookOptions<QueryReturnType, QueryVariables>
): QueryResult<QueryReturnType, QueryVariables> => {
  return useApolloQuery(query, { ...options, client, errorPolicy: "all" });
};
