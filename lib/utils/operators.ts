import { PrivateOperator } from '../types';
import { roomsUtil } from './rooms';

const getAvailableSlotsByOperator = (operator: PrivateOperator) => {
    return operator.rooms.reduce((acc, room) => {
        const availableSlotsInRoom = roomsUtil.getAvailableSlotsByRoom(room);
        return acc + availableSlotsInRoom;
    }, 0);
};

export const operatorsUtils = {
    getAvailableSlotsByOperator,
};
