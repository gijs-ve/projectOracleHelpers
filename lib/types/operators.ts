import { Action } from './actions';
import { Slot } from './generic';
import { Letters } from './letters';
import { Resource } from './resources';
import { Room } from './rooms';
import { Word } from './words';

export type Operator<T extends 'public' | 'private' = 'public'> =
    T extends 'public' ? PublicOperator : PrivateOperator;

export type PublicOperator = {
    id: string;
    userId: string;
    worldId: string;
    stars: number;
};

export type PrivateOperator = PublicOperator & {
    letters: {
        1: Letters;
        2: Letters;
        3: Letters;
    };
    unlockedWords: Word[];
    resources: Resource[];
    rooms: Room[];
    inventory: Slot[];
    actions: Action[];
};
