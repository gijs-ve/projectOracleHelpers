import { machineActionTypes, machineTypes } from "../world/machines";
import { Tier } from "./generic";
import { ResourceType } from "./resources";

export type MachineType = (typeof machineTypes)[number];
export type MachineActionType = (typeof machineActionTypes)[number];

type RawMachine = DataObject<{
  perMinute: number;
  type: MachineType;
  roomId: string;
  x: number;
  y: number;
  width: number;
  height: number;
}>;

export type Machine<T extends MachineType = MachineType> =
  T extends "makeResource"
    ? RawMachine & {
        resource: ResourceType;
      }
    : RawMachine & {
        tier?: Tier;
      };
