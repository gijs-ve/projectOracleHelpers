import { Tier } from './generic';

//operatorId for unlockedWords
//slotId for words in inventory / slots
export type Word = {
    id: string;
    operatorId?: string;
    slotId?: string;
    text: string;
    tier: Tier | 4;
};
