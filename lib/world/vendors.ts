import { Vendor } from '../types/vendors';

export const vendors: Vendor[] = [
    {
        id: 'vendor-1',
        name: 'Silk',
        items: [
            {
                id: 'vendor-1-1',
                ref: 'make-letter-1-1',
                description: 'Make a word',
                costs: [{ money: 50, fuel: 5 }],
            },
        ],
    },
    {
        id: 'vendor-2',
        name: 'Bach',
        items: [
            {
                id: 'vendor-2-1',
                ref: 'make-letter-1-1',
                description: 'Make a word',
                costs: [{ fuel: 45 }, { ink: 15 }],
            },
        ],
    },
];
