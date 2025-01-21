"use client";

import Button from "@src/components/button";
import Card from "@src/components/card";
import Page from "@src/components/page";
import { useQuery } from "@src/hooks/use_query";
import { GET_ALL_POKEMON } from "@src/querys/pokemon";
import { Pokemon, PokemonList } from "@src/typings/pokemon";
import { NullableReactElement } from "@src/typings/utils";
import { ReactElement, useState } from "react";

export default function Home(): ReactElement {
  const [queryOffset, setOffset] = useState(0);

  const { data, loading, error } = useQuery<
    { pokemons: PokemonList },
    { limit: number; offset: number }
  >(GET_ALL_POKEMON, {
    variables: { limit: 24, offset: queryOffset },
  });

  if (loading || !data) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pokemons: Pokemon[] = data?.pokemons?.results || [];

  const renderCards = (): ReactElement[] => {
    return pokemons.map((pokemon, index: number) => {
      return (
        <li key={index} className="w-[300px]">
          <Card name={pokemon?.name} order={queryOffset + index + 1} />
        </li>
      );
    });
  };

  const renderNextButton = (): NullableReactElement => {
    if (queryOffset + 24 >= data.pokemons.count) return null;

    return (
      <Button
        className="w-full max-w-[350px]"
        onClick={() => {
          setOffset(queryOffset + 24);
        }}
      >
        Load More
      </Button>
    );
  };

  const renderBackButton = (): NullableReactElement => {
    if (queryOffset === 0) return null;
    return (
      <Button
        theme="secondary"
        className="w-full max-w-[350px]"
        onClick={() => {
          setOffset(queryOffset - 24);
        }}
      >
        Back
      </Button>
    );
  };

  return (
    <Page>
      <main className="w-full flex flex-col gap-6">
        <ul className="pt-4 flex flex-col gap-8 items-center justify-between sm:flex-row sm:flex-wrap sm:max-w-[700px] lg:max-w-[1000px] m-auto">
          {renderCards()}
        </ul>
        <div className="w-full flex justify-center items-center gap-6 mb-4 flex-col-reverse sm:flex-row">
          {renderBackButton()}
          {renderNextButton()}
        </div>
      </main>
    </Page>
  );
}
