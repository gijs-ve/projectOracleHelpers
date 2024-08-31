import { Room } from "../types/rooms";

export const rooms: WorldObject<Room>[] = [
  {
    ref: "room-10x10",
    name: "Room 1",
    xSize: 10,
    ySize: 10,
  },
  {
    ref: "room-5x8",
    name: "Room 2",
    xSize: 5,
    ySize: 8,
  },
];
