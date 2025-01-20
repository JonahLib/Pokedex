import { POKEMON_TYPES } from "@constants/pokemon_types";
import { TypeProps } from "./types";
import clsx from "clsx";

const PokemonType = ({ type }: TypeProps) => {
  return (
    <div
      className={clsx(
        "w-20 h-5 mr-4 flex items-center justify-center",
        POKEMON_TYPES[type] || "bg-gray-200 text-black"
      )}
    >
      <p className={`font-bold`}>{type}</p>
    </div>
  );
};

export default PokemonType;
