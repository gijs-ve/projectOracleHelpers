import { Tier } from './generic';

//operatorId for unlockedWords
//slotId for words in inventory / slots
//worldId for expiredWords
export type Word = {
    id: string;
    operatorId?: string;
    slotId?: string;
    worldId?: string;
    text: string;
    tier: Tier | 4;
};
