import { TypeObject } from "@typings/pokemon";

export type CardProps = {
  image: string;
  order: number;
  name: string;
  types: TypeObject[];
};
