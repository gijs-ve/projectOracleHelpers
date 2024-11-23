import { slotTypes } from '../world/generic';
import { Item } from './items';
import { Machine } from './machines';
import { ResourceType } from './resources';
import { Word } from './words';

//tier 1: 1-3 letters
//tier 2: 4-5 letters
//tier 3: 6+ letters
export type Tier = 1 | 2 | 3;

export type SlotType = (typeof slotTypes)[number];
export type Slot = {
    id: string;
    roomId?: string;
    operatorId?: string;
    stashId?: string;
    type: SlotType;
    machineId?: string;
    wordId?: string;
    itemId?: string;
    machine?: Machine;
    word?: Word;
    item?: Item;
} & Coordinates;

export type Coordinates = {
    x: number;
    y: number;
};

export type Cost<K extends ResourceType = ResourceType> = {
    [key in K]?: number;
};
