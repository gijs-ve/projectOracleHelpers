import { Operator } from "./operators";

export type World = {
    currentTime: Date;
    id: string; 
    name: string;
    operators: Operator[];
    targetStars: number;
}