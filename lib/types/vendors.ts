import { Cost } from './generic';
import { LetterKeys } from './letters';

export type Vendor = {
    id: string;
    name: string;
    items: VendorItem[];
};

export type VendorItem = {
    id: string;
    ref?: string;
    word?: string;
    letter?: LetterKeys;
    description: string;
    costs: Cost[];
};
