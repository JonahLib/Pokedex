import { gql } from "@apollo/client";

export const GET_POKEMON = gql`
  query GetPokemon($name: String!) {
    pokemon(name: $name) @rest(type: "Pokemon", path: "pokemon/{args.name}") {
      name
      order
      sprites @type(name: "Sprites") {
        front_default
      }
      types @type(name: "Type") {
        type @type(name: "TypeInfo") {
          name
        }
      }
    }
  }
`;

export const GET_ALL_POKEMON = gql`
  query GetAllPokemon($limit: Int!, $offset: Int!) {
    pokemons(limit: $limit, offset: $offset)
      @rest(
        type: "PokemonList"
        path: "pokemon?limit={args.limit}&offset={args.offset}"
      ) {
      count
      next
      previous
      results {
        name
      }
    }
  }
`;
