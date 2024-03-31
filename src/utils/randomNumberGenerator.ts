export const randomNumberGenerator = (min: number, max: number) => {
  return Math.trunc(Math.random() * (max - min) + min);
};
