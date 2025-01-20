import { Nullable } from "@src/typings/utils";

export const capitaliseStat = (stat: string): Nullable<string> => {
  if (stat === "hp") return stat.toUpperCase();

  if (stat === "special-attack") return "SP ATK";

  if (stat === "special-defense") return "SP DEF";

  if (stat === "attack") return "ATK";

  if (stat === "defense") return "DEF";

  if (stat === "speed") return "SPD";

  return null;
};
