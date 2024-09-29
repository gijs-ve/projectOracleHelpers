import { itemTypes } from '../world/items';
import { Cost } from './generic';
import { CoordinatedObject } from './objects';

export type ItemType = (typeof itemTypes)[number];
type BaseItemObject<T extends ItemType> = CoordinatedObject<{
    slotId: string;
    type: T;
    amount: number;
}>;

type ItemObject<T extends ItemType> = T extends 'chest'
    ? BaseItemObject<T> & { lootId: string; costs: Cost[] }
    : T extends 'documents'
    ? BaseItemObject<T> & { ref: string }
    : BaseItemObject<T>;

export type Item<T extends ItemType = ItemType> = ItemObject<T>;
