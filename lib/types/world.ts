import { Operator } from './operators';
import { Word } from './words';

export type World = {
    createdAt: Date;
    updatedAt: Date;
    currentTime: Date;
    id: string;
    name: string;
    depletedWords: Word[];
    operators: Operator[];
    targetStars: number;
};
