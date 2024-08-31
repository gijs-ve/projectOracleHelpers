import { Cost } from "./generic";
import { LetterKeys } from "./letters";
import { ResourceType } from "./resources";

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


