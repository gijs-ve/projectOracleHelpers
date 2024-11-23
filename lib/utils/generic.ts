import { Slot } from '../types';

const getAvailableSlots = <
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

export const generic = {
    getAvailableSlots,
};
