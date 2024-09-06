import { Letters } from '../world/letters';
import { Tier } from './generic';

export type Letter = (typeof Letters)[number];
export type Letters = {
    [key in Letter]: number;
};

export type LetterTiers = {
    [key in Tier]: Letters;
};
