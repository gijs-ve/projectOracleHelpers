import { SlotObject } from "./objects";

export type Room = SlotObject<{
  operatorId: string;
  order: number;
}>;
