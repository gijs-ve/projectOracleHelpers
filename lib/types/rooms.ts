import { SlotObject } from "./objects";

export type Room = SlotObject<{
  name: string;
  operatorId: string;
}>;
