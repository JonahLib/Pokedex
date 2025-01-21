import { Nullable } from "@src/typings/utils";

export const capitaliseString = (string: string): Nullable<string> => {
  if (!string) return null;

  return string.charAt(0).toUpperCase() + string.slice(1);
};
