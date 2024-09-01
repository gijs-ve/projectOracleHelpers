import { slotTypes } from "../world/generic";
import { Item } from "./items";
import { Machine } from "./machines";
import { ResourceType } from "./resources";
import { Word } from "./words";

export type Tier = 1 | 2 | 3;

export type SlotType = typeof slotTypes[number] 
export type Slot = {
    roomId?: string;
    operatorId?: string;
    stashId?: string;
    x: number;
    y: number;
    type: SlotType
    machineId?: string;
    wordId?: string;
    itemId?: string;
    machine?: Machine;
    word?: Word;
    item?: Item;
}

export type Cost<K extends ResourceType = ResourceType> = {
    [key in K]?: number;
};