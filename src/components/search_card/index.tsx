import { ReactElement } from "react";
import { CardProps } from "../card/types";
import Link from "next/link";
import { getNextRoute } from "@src/helpers/routes";

const SearchCard = ({ order, name }: CardProps) => {
  const renderLogo = (): ReactElement => {
    return (
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${order}.png`}
        alt={`a-image-of-${name}`}
        className="object-contain w-[100px] h-[80px] m-auto"
      />
    );
  };

  const renderOrder = (): ReactElement => {
    return <p className="font-bold pr-4">{`#${order + 1}`}</p>;
  };

  const renderName = (): ReactElement => {
    return <h1 className="font-extrabold">{name}</h1>;
  };

  return (
    <Link
      className="bg-white rounded-xl flex w-full max-w-[700px] h-[80px] items-center justify-between"
      href={getNextRoute("pokemon", { name: name })}
    >
      <div className="flex justify-start items-center">
        {renderLogo()}
        {renderName()}
      </div>
      {renderOrder()}
    </Link>
  );
};

export default SearchCard;
