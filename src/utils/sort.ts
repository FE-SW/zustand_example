// const patternNumber = /[0-9]/;
const patternCapitalLetter = /[A-Z]/;
const patternSmallLetter = /[a-z]/;
const patternHangul = /[가-힣]/;

const orderLevelDesc = [
  patternCapitalLetter,
  patternSmallLetter,
  patternHangul,
];

export const getLevel = (letter: string) => {
  const index = orderLevelDesc.findIndex((pattern) => pattern.test(letter));
  return index;
};
