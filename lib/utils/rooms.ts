import { Room } from '../types';
import { generic } from './generic';

/**
 *
 * @param room The room to check
 * @returns
 */

const getAvailableSlots = (room: Room): number => {
    return generic.getAvailableSlotCount(room);
};

export const rooms = {
    getAvailableSlots,
};
