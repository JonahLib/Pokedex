import Image from "next/image";
import { ReactElement } from "react";
import { CardProps } from "./types";
import Link from "next/link";
import { getNextRoute } from "@src/helpers/routes";
import Type from "@components/type";

const Card = ({ image, order, name, types }: CardProps) => {
  const renderLogo = (): ReactElement => {
    return (
      <div className="bg-gray-200 w-full rounded-t-2xl">
        <Image
          src={image}
          alt={`a-image-of-${name}`}
          width={300}
          height={100}
          className="w-[300px] h-[100px]"
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

  const renderTypes = () => {
    return types.map(({ name }, index) => <Type key={index} type={name} />);
  };

  return (
    <Link
      className="flex flex-col gap-2 w-[300px] h-[200px] rounded-2xl shadow-2xl transition-transform ease-in-out hover:scale-105"
      href={getNextRoute("pokemon", { order: order.toString() })}
    >
      {renderLogo()}
      <div className="flex justify-between px-3">
        {renderName()}
        {renderOrder()}
      </div>
      <ul className="flex justify-end w-full mt-4">{renderTypes()}</ul>
    </Link>
  );
};

export default Card;
