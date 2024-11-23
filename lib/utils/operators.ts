import { PrivateOperator } from '../types';
import { generic } from './generic';

/**
 *
 * @param operator The operator to check
 * @returns
 */

const getAvailableSlots = ({ rooms, inventory }: PrivateOperator) => {
    return (
        rooms
            .map((room) => generic.getAvailableSlots(room))
            .reduce((acc, slots) => acc + slots, 0) + inventory.length
    );
};

/**
 *
 * @param operator The operator to check
 * @param word The word to check for as a string
 * @returns
 */

const hasWord = (operator: PrivateOperator, word: string) => {
    return operator.vocabulary.some(
        (vocabularyWord) => vocabularyWord.text === word,
    );
};

/**
 *
 * @param operator The operator to check
 * @param checkedCount The number of slots to check for, assuming 1x1 items
 * @returns
 */

const hasSlotsAvailable = (
    operator: PrivateOperator,
    checkedCount: number = 0,
) => {
    return getAvailableSlots(operator) > checkedCount;
};

export const operators = {
    getAvailableSlots,
    hasWord,
    hasSlotsAvailable,
};
