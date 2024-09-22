import { Operator } from './operators';
import { Word } from './words';

export type World = {
    currentTime: Date;
    id: string;
    name: string;
    depletedWords: Word[];
    operators: Operator[];
    targetStars: number;
};
