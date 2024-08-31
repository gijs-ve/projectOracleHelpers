import { Slot } from "./generic";
import { Machine } from "./machines";
import { SlotObject } from "./objects";

export type Room = SlotObject<{
  name: string;
  operatorId: string;
}>;
