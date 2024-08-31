import { wishTypes } from "../world/wishes";
import { Operator } from "./operators";

// todo: redesign Wish

export type WishType = (typeof wishTypes)[number];
export type Wish = {
  id: string;
  worldId: string;
  goalId: string;
  word: string;
  type: WishType;
  definition: string;
  attempts: number;
  wonBy: Omit<Operator, "worldId">[];
};
