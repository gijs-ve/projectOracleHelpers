import { Operator } from './operators';

// todo: redesign Wish

export type Wish = {
    id: string;
    oracleId: string;
    goalId: string;
    word: string;
    description: string;
    attempts: number;
    wonBy: Omit<Operator, 'worldId'>[];
};
