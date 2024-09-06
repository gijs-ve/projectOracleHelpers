import { actionTypes } from '../world/actions';
import { Tier } from './generic';
import { Letter } from './letters';
import { MachineType } from './machines';
import { ResourceType } from './resources';
import { Word } from './words';

export type ActionType = (typeof actionTypes)[number];

export type Action<T extends ActionType = ActionType> = T extends 'makeWord'
    ? MakeWordAction
    : T extends 'makeLetter'
    ? MakeLetterAction
    : T extends 'demolishWord'
    ? DemolishWordAction
    : T extends 'demolishLetter'
    ? DemolishLetterAction
    : T extends 'makeMachine'
    ? MakeMachineAction
    : RawAction;

type RawAction = {
    id: string;
    type: ActionType;
    startedAt: Date;
    finishedAt: Date;
};

type MakeWordAction = RawAction & {
    letters: Letter[];
};

type MakeLetterAction = RawAction & {
    letter: string;
};

type DemolishWordAction = RawAction & {
    word: Word;
};

type DemolishLetterAction = RawAction & {
    letter: Letter;
};

type MakeMachineAction = RawAction & {
    type: MachineType;
    resourceType?: ResourceType;
    tier: Tier;
};
