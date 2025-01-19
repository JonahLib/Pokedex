import { POKEMON_TYPES } from "@src/constants/pokemon_types";

export type Type = keyof typeof POKEMON_TYPES;

export type TypeObject = { name: Type };

export interface Pokemon {
  name: string;
}

export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}
