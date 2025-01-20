"use client";

import Button from "@src/components/button";
import MovesCard from "@src/components/moves_card";
import Page from "@src/components/page";
import PokemonCard from "@src/components/pokemon_card";
import { getNextRoute } from "@src/helpers/routes";
import { useQuery } from "@src/hooks/use_query";
import { GET_POKEMON } from "@src/querys/pokemon";
import { GetPokemonVariables, PokemonData } from "@src/typings/pokemon";
import { useParams } from "next/navigation";

const PokemonPage = () => {
  const { name }: { name: string } = useParams();

  const { data, loading, error } = useQuery<PokemonData, GetPokemonVariables>(
    GET_POKEMON,
    {
      variables: { name },
    }
  );

  console.log(data);

  if (loading) return <p>...loading</p>;

  if (error) return <p>{`Error: ${error}`}</p>;

  const {
    name: pokemonName = "",
    order = 0,
    types = [],
    sprites = {
      front_default: "",
      back_default: "",
      front_shiny: "",
      back_shiny: "",
    },
    stats = [],
    moves = [],
  }: Partial<PokemonData["pokemon"]> = data?.pokemon ?? {};

  const renderBackButton = () => {
    return (
      <Button
        className="w-full max-w-[300px] text-center mb-6"
        link={getNextRoute("home")}
      >
        Back to Pokedex
      </Button>
    );
  };

  return (
    <Page>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <PokemonCard
            order={order}
            name={pokemonName}
            types={types}
            sprites={sprites}
            stats={stats}
          />
          <MovesCard moves={moves} />
        </div>
        {renderBackButton()}
      </div>
    </Page>
  );
};

export default PokemonPage;
