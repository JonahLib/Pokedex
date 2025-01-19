"use client";

import { ApolloProvider } from "@apollo/client";
import { client } from "@src/client";
import { ApolloWrapperProps } from "./types";
import { ReactElement } from "react";

const ApolloWrapper = ({ children }: ApolloWrapperProps): ReactElement => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
