import { Operator } from "./operators";

export type World = {
    currentTime: Date;
    id: string; 
    operators: Operator[];
    name: string;
    goal: number;
}