import { OracleType } from '../world/oracle';
import { Tier } from './generic';
import { DataObject } from './objects';
import { Wish } from './wishes';

export type Oracle = Omit<
    DataObject<{
        tier: Tier | 4;
        wishes: Wish[];
        rules: OracleRule[];
        type: OracleType[];
    }>,
    'xSize' | 'ySize'
>;

export type OracleRule = {
    id: string;
    description: string;
};
