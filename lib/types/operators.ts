import { Action } from './actions';
import { Slot } from './generic';
import { Letters } from './letters';
import { Resource } from './resources';
import { Room } from './rooms';
import { Word } from './words';

export type Operator<T extends 'public' | 'private' = 'public'> =
    T extends 'public' ? PrivateOperator : PublicOperator;

type PublicOperator = {
    id: string;
    userId: string;
    worldId: string;
    stars: number;
};

type PrivateOperator = PublicOperator & {
    letters: Letters;
    unlockedWords: Word[];
    resources: Resource[];
    rooms: Room[];
    inventory: Slot[];
    actions: Action[];
};
