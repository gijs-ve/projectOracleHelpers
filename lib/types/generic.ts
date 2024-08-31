import { slotTypes } from "../world/generic";
import { Loot } from "./loot";
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
    lootId?: string;
    machine?: Machine;
    word?: Word;
    loot?: Loot;
}

export type Cost<K extends ResourceType = ResourceType> = {
    [key in K]?: number;
};