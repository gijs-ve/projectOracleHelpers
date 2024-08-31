import { Machine, MachineActionType } from "../types/machines";
import { CoordinatedObject, WorldObject } from "../types/objects";


export const machineActionTypes = [
  "makeWord",
  "makeLetter",
  "demolishWord",
  "demolishLetter",
] as const;
export const machineTypes = [...machineActionTypes, "makeResource"] as const;

export const machines:
  | (
      | WorldObject<Machine<"makeResource">>
      | WorldObject<Machine<MachineActionType>>
    )[] = [
  {
    ref: "make-word-1-1",
    type: "makeWord",
    perMinute: 0.25,
    tier: 1,
    xSize: 1,
    ySize: 1,
  },
  {
    ref: "make-word-1-2",
    type: "makeWord",
    perMinute: 0.5,
    tier: 1,
    xSize: 1,
    ySize: 1,
  },
  {
    ref: "machine-5",
    type: "makeResource",
    perMinute: 0.2,
    resource: "data",
    xSize: 1,
    ySize: 1,
  },
];
