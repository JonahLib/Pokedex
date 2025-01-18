import Card from "@src/components/card";
import { CardProps } from "@src/components/card/types";
import { ReactElement } from "react";

export default function Home() {
  const MOCK_DATA: CardProps[] = [
    {
      name: "Pikachu",
      image: "/pokedex.svg",
      order: 23,
      types: [{ name: "electric" }],
    },
    {
      name: "Charmander",
      image: "/pokedex.svg",
      order: 4,
      types: [{ name: "fire" }, { name: "flying" }],
    },
    {
      name: "Bulbasaur",
      image: "/pokedex.svg",
      order: 1,
      types: [{ name: "grass" }, { name: "poison" }],
    },
    {
      name: "Squirtle",
      image: "/pokedex.svg",
      order: 7,
      types: [{ name: "water" }],
    },
  ];

  const renderCards = (): ReactElement[] => {
    return MOCK_DATA.map(({ name, image, order, types }, index) => {
      return (
        <li key={index} className="w-[300px]">
          <Card image={image} name={name} order={order} types={types} />
        </li>
      );
    });
  };

  return (
    <ul className="pt-4 flex flex-col gap-8 items-center justify-between sm:flex-row sm:flex-wrap sm:max-w-[700px] lg:max-w-[1000px] m-auto">
      {renderCards()}
    </ul>
  );
}
