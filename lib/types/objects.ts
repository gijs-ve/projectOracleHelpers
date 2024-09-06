import { Slot } from "./generic";

export type DataObject<T> = {
  id: string;
  ref: string;
  xSize: number;
  ySize: number;
} & T;

export type CoordinatedObject<T> = DataObject<T> & {
  x: number;
  y: number;
};

export type SlotObject<T> = CoordinatedObject<T> & {
  slots: Slot[]
}

type Ids = "id" | "worldId" | "operatorId" | "roomId" | "slotId" | "lootId"
type DataKeys =
  | "machines"
  | "letters"
  | "resources"
  | "rooms"
  | "words"
  | "x"
  | "y"
  | "slots"
  | "order"
export type WorldObject<T extends DataObject<Y>, Y = {}> = Omit<T, Ids | DataKeys> & {name: string}
