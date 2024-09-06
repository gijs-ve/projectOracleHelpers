import { Machine, MachineActionType } from '../types/machines';
import { WorldObject } from '../types/objects';

export const machineActionTypes = [
    'makeWord',
    'makeLetter',
    'demolishWord',
    'demolishLetter',
] as const;
export const machineTypes = [...machineActionTypes, 'makeResource'] as const;

const letterMachines: WorldObject<Machine<'makeLetter'>>[] = [
    {
        name: 'Graphomotus I',
        ref: 'make-letter-1-1',
        type: 'makeLetter',
        perMinute: 0.02,
        tier: 1,
        xSize: 1,
        ySize: 1,
        costPerAction: [{ money: 5, fuel: 1 }],
    },
    {
        name: 'Graphomotus II',
        ref: 'make-letter-1-2',
        type: 'makeLetter',
        perMinute: 0.05,
        tier: 1,
        xSize: 1,
        ySize: 1,
        costPerAction: [{ money: 10, fuel: 5, ink: 1 }],
    },
    {
        name: 'Graphomotus III',
        ref: 'make-letter-1-3',
        type: 'makeLetter',
        perMinute: 0.1,
        tier: 1,
        xSize: 1,
        ySize: 1,
        costPerAction: [{ money: 15, fuel: 10, ink: 5 }],
    },
    {
        name: 'Terafex I',
        ref: 'make-letter-2-1',
        type: 'makeLetter',
        perMinute: 0.02,
        tier: 2,
        xSize: 2,
        ySize: 1,
        costPerAction: [{ money: 25, fuel: 15, ink: 10 }],
    },
    {
        name: 'Terafex II',
        ref: 'make-letter-2-2',
        type: 'makeLetter',
        perMinute: 0.05,
        tier: 2,
        xSize: 2,
        ySize: 1,
        costPerAction: [{ money: 50, fuel: 25, ink: 15 }],
    },
    {
        name: 'Terafex III',
        ref: 'make-letter-2-1',
        type: 'makeLetter',
        perMinute: 0.12,
        tier: 2,
        xSize: 1,
        ySize: 1,
        costPerAction: [{ money: 75, fuel: 50, ink: 25 }],
    },
    {
        name: 'Epistula I',
        ref: 'make-letter-3-1',
        type: 'makeLetter',
        perMinute: 0.008,
        tier: 3,
        xSize: 2,
        ySize: 2,
        costPerAction: [{ money: 100, fuel: 75, ink: 50 }],
    },
    {
        name: 'Epistula II',
        ref: 'make-letter-3-2',
        type: 'makeLetter',
        perMinute: 0.035,
        tier: 3,
        xSize: 2,
        ySize: 2,
        costPerAction: [{ money: 150, fuel: 100, ink: 75 }],
    },
];

const resourceMachines: WorldObject<Machine<'makeResource'>>[] = [
    {
        name: 'Paperclip maker',
        ref: 'machine-money-1',
        type: 'makeResource',
        perMinute: 0.1,
        resource: 'money',
        xSize: 1,
        ySize: 1,
    },
    {
        name: 'Old container',
        ref: 'machine-fuel-1',
        type: 'makeResource',
        perMinute: 0.1,
        resource: 'fuel',
        xSize: 1,
        ySize: 1,
    },
];

const wordMachines: WorldObject<Machine<'makeWord'>>[] = [
    {
        name: 'Verbifex I',
        ref: 'make-word-1-1',
        type: 'makeWord',
        perMinute: 0.02,
        tier: 1,
        xSize: 1,
        ySize: 1,
        costPerAction: [{ money: 50, fuel: 2 }],
    },
    {
        name: 'Verbifex II',
        ref: 'make-word-1-2',
        type: 'makeWord',
        perMinute: 0.05,
        tier: 1,
        xSize: 1,
        ySize: 1,
        costPerAction: [{ money: 100, fuel: 5 }],
    },
];

export const machines:
    | (
          | WorldObject<Machine<'makeResource'>>
          | WorldObject<Machine<MachineActionType>>
      )[] = [...letterMachines, ...resourceMachines, ...wordMachines];
