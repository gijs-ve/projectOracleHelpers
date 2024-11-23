import { Slot } from '../types';

// const getAvailableSlots = <T extends { slots: Slot[] }>(entity: T): Slot[] => {
//     return entity.slots.filter((slot) => !slot.item);
// };

const getAvailableSlotCount = <
    T extends { xSize: number; ySize: number; slots: Slot[] },
>(
    entity: T,
): number => {
    const area = entity.xSize * entity.ySize;
    const occupiedArea = entity.slots.reduce((acc, slot) => {
        const { item } = slot;
        if (!item) return acc;
        return acc + item.xSize * item.ySize;
    }, 0);
    return area - occupiedArea;
};

/**
 * Checks if all slots of an entity are empty
 * @param entity The entity to check
 * @returns
 */

const entityIsEmpty = <T extends { slots: Slot[] }>(entity: T): boolean => {
    return entity.slots.every((slot) => !slot.item || slot.type === 'empty');
};

export const generic = {
    // getAvailableSlots,
    getAvailableSlotCount,
    entityIsEmpty,
};
