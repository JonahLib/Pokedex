import { POKEMON_TYPES } from "@src/constants/pokemon_types";

export type Type = keyof typeof POKEMON_TYPES;

export type TypeObject = { name: Type };
