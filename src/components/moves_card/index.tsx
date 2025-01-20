import { ReactElement } from "react";
import { MovesCardProps } from "./types";

const MovesCard = ({ moves }: MovesCardProps): ReactElement => {
  const renderMoveList = () => {
    return moves.map(({ move }) => (
      <li key={move.name} className="py-4 pl-2 border-b border-black">
        <p className="font-bold">{move.name}</p>
      </li>
    ));
  };

  return (
    <ul
      className="flex flex-col gap-2 w-[300px] h-[575px] rounded-2xl shadow-2xl sm:mt-4 lg:mt-8 overflow-y-auto"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        overflowY: "auto",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {renderMoveList()}
    </ul>
  );
};

export default MovesCard;
