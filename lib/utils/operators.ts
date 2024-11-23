import { PrivateOperator } from '../types';
import { rooms } from './rooms';

const getAvailableSlotsByOperator = (operator: PrivateOperator) => {
    return operator.rooms.reduce((acc, room) => {
        const availableSlotsInRoom = rooms.getAvailableSlotsByRoom(room);
        return acc + availableSlotsInRoom;
    }, 0);
};

export const operators = {
    getAvailableSlotsByOperator,
};
