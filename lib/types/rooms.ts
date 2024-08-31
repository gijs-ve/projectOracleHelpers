import { Machine } from "./machines";

export type Room = DataObject<{
  name: string;
  worldId: string;
  operatorId: string;
  xSize: number;
  ySize: number;
  machines: Machine[];
}>;
