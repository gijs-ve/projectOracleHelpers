import { Tier } from "./generic";
import { Letter } from "./letters";
import { Resource } from "./resources";
import { Room } from "./rooms";
import { Word } from "./words";

export type Operator<T extends "public" | "private" = "public"> =
  T extends "public" ? PrivateOperator : PublicOperator;

type PublicOperator = {
  id: string;
  userId: string;
  worldId: string;
  name: string;
  stars: number;
};

type PrivateOperator = PublicOperator & {
  words: Word[];
  letters: {
    [key in Tier]: Letter[];
  };
  resources: Resource[];
  rooms: Room[];
};
