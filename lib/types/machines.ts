import { machineActionTypes, machineTypes } from "../world/machines";
import { Cost, Tier } from "./generic";
import { CoordinatedObject } from "./objects";
import { ResourceType } from "./resources";

export type MachineType = (typeof machineTypes)[number];
export type MachineActionType = (typeof machineActionTypes)[number];

type RawMachine = CoordinatedObject<{
  perMinute: number;
  type: MachineType;
  roomId: string;
}>;

export type Machine<T extends MachineType = MachineType> =
  T extends "makeResource"
    ? RawMachine & {
        resource: ResourceType;
      }
    : RawMachine & {
        tier?: Tier;
        costPerAction: Cost[];
      };
