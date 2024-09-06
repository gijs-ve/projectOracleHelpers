import { Cost, Tier } from './generic';
import { Letter } from './letters';

export type Vendor = {
    id: string;
    name: string;
    items: VendorItem[];
};

export type VendorItem = {
    id: string;
    ref?: string;
    word?: string;
    letter?: {
        letter: Letter;
        tier: Tier;
    };
    description: string;
    costs: Cost[];
};
