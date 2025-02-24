import { Nullable, NullableReactElement } from "@src/typings/utils";
import { filteredPokemon, SearchModalProps } from "./types";
import { GET_ALL_POKEMON } from "@src/querys/pokemon";
import { PokemonList } from "@src/typings/pokemon";
import { useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import SearchCard from "@components/search_card";

const SearchModal = ({
  isOpen,
  onClose,
}: SearchModalProps): NullableReactElement => {
  const [search, setSearch] = useState("");
  const [filteredPokemon, setFilteredPokemon] =
    useState<Nullable<filteredPokemon[]>>(null);

  const { data, loading, error } = useQuery<
    { pokemons: PokemonList },
    { limit: number; offset: number }
  >(GET_ALL_POKEMON, {
    variables: { limit: 801, offset: 0 },
  });

  useEffect(() => {
    if (!loading && search !== "" && data) {
      const pokemons = data.pokemons.results;

      const sortPokemon = pokemons
        .map((pokemon, index) => ({ ...pokemon, originalIndex: index }))
        .filter((pokemon) => {
          return pokemon.name.includes(search);
        });

      setFilteredPokemon(sortPokemon);
    }
  }, [data, loading, search]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  const renderSearchCard = () => {
    if (!filteredPokemon) return null;

    return filteredPokemon.map(({ name, originalIndex }) => (
      <li
        className="w-full max-w-[700px] z-[100]"
        key={`${name}-${originalIndex}`}
      >
        <SearchCard name={name} order={originalIndex + 1} />
      </li>
    ));
  };

  if (error) return <p>{`Error: ${error}`}</p>;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center z-[100] pt-6 px-4 gap-2"
      onClick={onClose}
    >
      <input
        className="py-4 pl-4 max-w-[700px] w-full rounded-lg text-lg font-bold"
        type="text"
        value={search}
        onChange={(e) => onInputChange(e)}
        onClick={handleInputClick}
      />
      <ul
        className="w-full flex flex-col items-center gap-2 overflow-y-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {renderSearchCard()}
      </ul>
    </div>
  );
};

export default SearchModal;
