import { AlphabetLetters } from '../world/letters';
import { Tier } from './generic';

export type Letter = (typeof AlphabetLetters)[number];
export type Letters = {
    [key in Letter]: number;
};

export type LettersTier = {
    [key in Tier]: Letters;
};
