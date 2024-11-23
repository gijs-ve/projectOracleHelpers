import { OracleType } from '../world/oracle';
import { Tier } from './generic';
import { DataObject } from './objects';

export type Broadcaster = Omit<
    DataObject<{
        tier: Tier;
        type: OracleType[];
        messages: Message[];
    }>,
    'xSize' | 'ySize'
>;

export type Message = {
    id: string;
    broadcasterId: string;
    text: string;
    plannedTime: Date;
    broadcastTime: Date;
};
