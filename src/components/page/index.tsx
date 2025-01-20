"use client";

import { ReactElement, useState } from "react";
import ApolloWrapper from "../apollo_provider";
import Header from "../header";
import { PageProps } from "./types";
import SearchModal from "../search_modal";

const Page = ({ children }: PageProps): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ApolloWrapper>
      <Header openSearch={() => setIsModalOpen(true)} />
      <div className="pt-28 w-full">{children}</div>
      <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </ApolloWrapper>
  );
};

export default Page;
