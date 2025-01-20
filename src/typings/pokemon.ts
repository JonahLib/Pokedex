import { MAX_STATS } from "@src/components/stat_bar/constants";
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

type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
};

export type PokemonStat = {
  base_stat: number;
  stat: {
    name: keyof typeof MAX_STATS;
  };
};

type PokemonType = {
  type: {
    name: keyof typeof POKEMON_TYPES;
  };
};

type PokemonMove = {
  move: {
    name: string;
    url: string;
  };
};

export type PokemonSprites = {
  front_default: string;
  back_default: string;
  front_shiny: string;
  back_shiny: string;
  other?: {
    home?: {
      front_default: string;
    };
    dream_world?: {
      front_default: string;
    };
  };
};

export type PokemonData = {
  pokemon: {
    name: string;
    order: number;
    height: number;
    weight: number;
    abilities: PokemonAbility[];
    stats: PokemonStat[];
    types: PokemonType[];
    moves: PokemonMove[];
    species: {
      name: string;
      url: string;
    };
    habitat: {
      name: string;
    } | null;
    sprites: PokemonSprites;
  };
};

export type GetPokemonVariables = {
  name: string;
};
