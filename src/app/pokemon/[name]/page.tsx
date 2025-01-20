"use client";

import PokemonCard from "@src/components/pokemon_card";
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
  }: Partial<PokemonData["pokemon"]> = data?.pokemon ?? {};

  return (
    <div className="flex flex-col justify-center items-center">
      {
        <PokemonCard
          order={order}
          name={pokemonName}
          types={types}
          sprites={sprites}
          stats={stats}
        />
      }
    </div>
  );
};

export default PokemonPage;
