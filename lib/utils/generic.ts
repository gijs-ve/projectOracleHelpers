import { Slot } from '../types';

// const getAvailableSlots = <T extends { slots: Slot[] }>(entity: T): Slot[] => {
//     return entity.slots.filter((slot) => !slot.item);
// };

const getAvailableSlotCount = <T extends { slots: Slot[] }>(
    entity: T,
): number => {
    return entity.slots.reduce((acc, slot) => {
        return acc + (slotIsEmpty(slot) ? 0 : 1);
    }, 0);
};

/**
 * Checks if all slots of an entity are empty
 * @param entity The entity to check
 * @returns
 */

const entityIsEmpty = <T extends { slots: Slot[] }>(entity: T): boolean => {
    return entity.slots.every((slot) => slotIsEmpty(slot));
};

/**
 * Checks if a slot is empty
 * @param slot The slot to check
 * @returns
 */
const slotIsEmpty = (slot?: Slot): boolean => {
    return !slot || slot.type === 'empty';
};

export const generic = {
    // getAvailableSlots,
    getAvailableSlotCount,
    entityIsEmpty,
};
