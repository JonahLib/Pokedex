import { ReactElement } from "react";
import StatBar from "../stat_bar";
import { PokemonCardProps } from "./types";
import PokemonType from "../type";

const PokemonCard = ({
  name,
  order,
  types,
  sprites,
  stats,
}: PokemonCardProps): ReactElement => {
  const renderLogo = (): ReactElement => {
    return (
      <div className="bg-gray-200 w-full rounded-t-2xl">
        <img
          src={sprites.front_shiny || ""}
          alt={`a-image-of-${name}`}
          className="object-contain w-[300px]"
        />
      </div>
    );
  };

  const renderOrder = (): ReactElement => {
    return <p className="font-bold">{`#${order}`}</p>;
  };

  const renderName = (): ReactElement => {
    return <h1 className="font-extrabold">{name}</h1>;
  };

  const renderTypes = (): ReactElement[] => {
    return types.map(({ type }, index: number) => {
      return <PokemonType key={index} type={type.name} />;
    });
  };

  const renderStats = () => {
    return (
      <div className="mt-4">
        {stats.map(({ base_stat, stat }, index) => (
          <StatBar key={index} baseStat={base_stat} stat={stat.name} />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2 w-[300px] h-[575px] rounded-2xl shadow-2xl sm:mt-4 lg:mt-8">
      {renderLogo()}
      <div className="flex justify-between px-3">
        {renderName()}
        {renderOrder()}
      </div>
      <ul className="flex justify-center w-full mt-4">{renderTypes()}</ul>
      {renderStats()}
    </div>
  );
};

export default PokemonCard;
