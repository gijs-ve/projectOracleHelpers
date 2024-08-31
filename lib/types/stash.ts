import { Slot } from "./generic";
import { SlotObject } from "./objects";


export type Stash = SlotObject<{
    slots: Slot[];
    roomId?: string;
}>
