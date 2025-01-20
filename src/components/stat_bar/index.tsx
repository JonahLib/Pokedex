import { ReactElement } from "react";
import { StatBarProps } from "./types";
import { MAX_STATS } from "./constants";
import { capitaliseStat } from "./helpers";

const StatBar = ({ stat, baseStat }: StatBarProps): ReactElement => {
  const renderStateName = (): ReactElement => {
    return (
      <h3 className="font-bold w-3/4">{`${capitaliseStat(
        stat
      )}: ${baseStat}`}</h3>
    );
  };

  const renderStatBar = (): ReactElement => {
    const widthPercentage = (baseStat / MAX_STATS[stat]) * 100;
    return (
      <div className="w-full">
        <div
          className="max-w-[120px] h-5 bg-cyan-400 rounded-md"
          style={{ width: `${widthPercentage}%` }}
        />
      </div>
    );
  };

  return (
    <div className="flex items-center justify-start gap-4 w-full pl-2">
      {renderStateName()}
      {renderStatBar()}
    </div>
  );
};

export default StatBar;
