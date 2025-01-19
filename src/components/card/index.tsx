import { ReactElement } from "react";
import { CardProps } from "./types";
import Link from "next/link";
import { getNextRoute } from "@src/helpers/routes";

const Card = ({ order, name }: CardProps) => {
  const renderLogo = (): ReactElement => {
    return (
      <div className="bg-gray-200 w-full rounded-t-2xl">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${order}.png`}
          alt={`a-image-of-${name}`}
          className="w-[300px] h-[150px]"
        />
      </div>
    );
  };

  const renderOrder = (): ReactElement => {
    return <p className="font-bold">{`#${order}`}</p>;
  };

  const renderName = () => {
    return <h1 className="font-extrabold">{name}</h1>;
  };

  return (
    <Link
      className="flex flex-col gap-2 w-[300px] h-[200px] rounded-2xl shadow-2xl transition-transform ease-in-out hover:scale-105"
      href={getNextRoute("pokemon", { order: name })}
    >
      {renderLogo()}
      <div className="flex justify-between px-3">
        {renderName()}
        {renderOrder()}
      </div>
    </Link>
  );
};

export default Card;
