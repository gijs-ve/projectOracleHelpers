import { Operator } from "./operators";
import { OracleType } from "./oracles";

// todo: redesign Wish


export type Wish = {
  id: string;
  oracleId: string;
  goalId: string;
  word: string;
  type: OracleType;
  description: string;
  attempts: number;
  wonBy: Omit<Operator, "worldId">[];
};
