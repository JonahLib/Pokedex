import { gql } from "@apollo/client";

export const GET_POKEMON = gql`
  query GetPokemon($name: String!) {
    pokemon(name: $name) @rest(type: "Pokemon", path: "pokemon/{args.name}") {
      name
      order
      height
      weight
      abilities @type(name: "Ability") {
        ability @type(name: "AbilityInfo") {
          name
          url
        }
      }
      stats @type(name: "Stat") {
        base_stat
        stat @type(name: "StatInfo") {
          name
        }
      }
      types @type(name: "Type") {
        type @type(name: "TypeInfo") {
          name
        }
      }
      moves @type(name: "Move") {
        move @type(name: "MoveInfo") {
          name
          url
        }
      }
      species @type(name: "Species") {
        name
        url
      }
      habitat @type(name: "Habitat") {
        name
      }
      sprites @type(name: "Sprites") {
        front_default
        back_default
        front_shiny
        back_shiny
        other {
          home {
            front_default
          }
          dream_world {
            front_default
          }
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
