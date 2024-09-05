import { Slot } from "./generic";
import { DataObject } from "./objects";

export type Room = DataObject<{
  operatorId: string;
  order: number;
  slots: Slot[];
}>;
