export const getOffset = (order: number): string => {
  const offsetMultiplier = Math.floor(order / 24);

  if (offsetMultiplier === 0) return "0";

  return (offsetMultiplier * 24).toString();
};
