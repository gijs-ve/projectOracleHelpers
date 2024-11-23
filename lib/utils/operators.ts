import { constants } from '../constants';
import { Coordinates, PrivateOperator } from '../types';
import { generic } from './generic';

/**
 * Get the amount of available slots for an operator
 *
 * @param operator The operator to check
 * @returns
 */

const getAvailableSlotCount = ({ rooms, inventory }: PrivateOperator) => {
    return (
        rooms
            .map((room) => generic.getAvailableSlotCount(room))
            .reduce((acc, slots) => acc + slots, 0) + inventory.length
    );
};

/**
 * Get the available inventory slots for an operator as an array of coordinates
 *
 * @param operator The operator to check
 * @returns
 */

const getAvailableInventorySlots = (
    operator: PrivateOperator,
): Coordinates[] => {
    const { x: inventoryXSize, y: inventoryYSize } =
        constants.operators.inventorySize;
    const slots = Array.from({ length: inventoryXSize * inventoryYSize }).map(
        () => ({
            x: inventoryXSize,
            y: inventoryYSize,
        }),
    );
    return slots.filter((slot) => {
        return !operator.inventory.some((item) => {
            return item.x === slot.x && item.y === slot.y;
        });
    });
};

/**
 * Check if an operator has a specific word in their vocabulary
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
 * Check if an operator has any free slots available, assuming 1x1 items
 *
 * @param operator The operator to check
 * @param checkedCount The number of slots to check for, assuming 1x1 items
 * @returns
 */

const hasSlotsAvailable = (
    operator: PrivateOperator,
    checkedCount: number = 0,
) => {
    return getAvailableSlotCount(operator) > checkedCount;
};

export const operators = {
    getAvailableInventorySlots,
    getAvailableSlotCount,
    hasWord,
    hasSlotsAvailable,
};
