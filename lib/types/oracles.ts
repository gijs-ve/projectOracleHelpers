import { OracleType } from '../world/oracle';
import { Tier } from './generic';
import { DataObject } from './objects';
import { Wish } from './wishes';

export type Oracle = Omit<
    DataObject<{
        tier: Tier | 4;
        wishes: Wish[];
        rules: string[];
        type: OracleType[];
    }>,
    'xSize' | 'ySize'
>;
