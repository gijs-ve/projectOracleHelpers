import { Letters } from "../world/letters";

export type LetterKeys = (typeof Letters)[number];
export type Letter = {
  [key in LetterKeys]: number;
};
