import { Room } from '../types';

const getAvailableSlotsByRoom = (room: Room): number => {
    const area = room.xSize * room.ySize;
    const occupiedArea = room.slots.reduce((acc, slot) => {
        const { item } = slot;
        if (!item) return acc;
        return acc + item.xSize * item.ySize;
    }, 0);
    return area - occupiedArea;
};

export const rooms = {
    getAvailableSlotsByRoom,
};
