import { slotTypes } from "../world/generic";
import { Loot } from "./loot";
import { Machine } from "./machines";
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
    refId: string; // machineId, wordId, lootId, stashid
    machine?: Machine;
    word?: Word;
    loot?: Loot;
}