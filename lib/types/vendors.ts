import { Cost } from "./generic";
import { LetterKeys } from "./letters";

export type Vendor = {
    name: string;
    items: VendorItem[]
}

export type VendorItem = {
    ref?: string;
    word?: string;
    letter?: LetterKeys
    description: string;
    costs: Cost[]
}


