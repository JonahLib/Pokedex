import { PokemonSprites, PokemonStat, Type } from "@src/typings/pokemon";

export type PokemonCardProps = {
  name: string;
  order: number;
  types: { type: { name: Type } }[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
};
