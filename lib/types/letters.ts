import { Letters } from "../world/letters";
import { Tier } from "./generic";

export type LetterKeys = (typeof Letters)[number];
export type Letter = {
  [key in LetterKeys]: number;
};

export type Letters = {
  [key in Tier]: Letter[];
};
