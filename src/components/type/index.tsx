import { POKEMON_TYPES } from "@constants/pokemon_types";
import { TypeProps } from "./types";

const Type = ({ type }: TypeProps) => {
  return (
    <div
      className={`w-20 h-5 mr-4 flex items-center justify-center ${POKEMON_TYPES[type]}`}
    >
      <p className="p-0 m-0 font-bold">{type}</p>
    </div>
  );
};

export default Type;
