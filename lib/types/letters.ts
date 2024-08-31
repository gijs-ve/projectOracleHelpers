import { Letters } from "../world/letters";

type LetterKeys = (typeof Letters)[number];
export type Letter = {
  [key in LetterKeys]: number;
};
