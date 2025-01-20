import { MAX_STATS } from "./constants";

export type StatBarProps = {
  stat: keyof typeof MAX_STATS;
  baseStat: number;
};
