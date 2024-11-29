import { constants } from '../constants';
import { Coordinates, PrivateOperator, Resource } from '../types';
import { generic } from './generic';
import { resources } from './resources';

/**
 * Get the amount of available slots for an operator
 *
 * @param operator The operator to check
 * @returns
 */

const getAvailableSlotCount = (operator: PrivateOperator) => {
    const { rooms } = operator;
    return (
        rooms
            .map((room) => generic.getAvailableSlotCount(room))
            .reduce((acc, slots) => acc + slots, 0) +
        getAvailableInventorySlots(operator).length
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

    const phantomSlots = Array.from({
        length: inventoryXSize * inventoryYSize,
    }).map(() => ({
        x: inventoryXSize,
        y: inventoryYSize,
    }));

    return phantomSlots.filter((phantomSlot) => {
        return !operator.inventory.some((slot) => {
            return slot.x === phantomSlot.x && slot.y === phantomSlot.y;
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
 * Check if a specific slot is available for an operator
 * @param operator The operator to check
 * @param checkedSlot The slot to check
 * @returns
 *
 * */

const isAvailableSlot = ({
    operator,
    checkedSlot,
}: {
    operator: PrivateOperator;
    checkedSlot: Required<Coordinates>;
}) => {
    return !operator.inventory.some((inventorySlot) => {
        return (
            inventorySlot.x === checkedSlot.x &&
            inventorySlot.y === checkedSlot.y
        );
    });
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

/**
 * Check if an operator has sufficient resources (to perform an action)
 *
 * @param operator The operator to check
 * @param checkedResources The resources to check
 * @param checkedTime The time to check, defaults to Date.now()
 * @returns
 */

const hasSufficientResources = ({
    operator,
    checkedResources,
    checkedTime = Date.now(),
}: {
    operator: PrivateOperator;
    checkedResources: Resource[];
    checkedTime: number;
}) => {
    return checkedResources.every((checkedResource) => {
        const foundResource = resources.getFromArray(
            operator.resources,
            checkedResource.type,
        );
        return resources.isSufficient({
            resource: foundResource,
            checkedValue: checkedResource.amount,
            checkedTime,
        });
    });
};

export const operators = {
    getAvailableInventorySlots,
    getAvailableSlotCount,
    isAvailableSlot,
    hasWord,
    hasSlotsAvailable,
    hasSufficientResources,
};
