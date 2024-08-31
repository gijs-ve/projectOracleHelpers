import { oracleTypes } from "../world/oracle";
import { Tier } from "./generic";
import { DataObject } from "./objects";
import { Wish } from "./wishes";

export type OracleType = (typeof oracleTypes)[number];
export type Oracle = Omit<DataObject<{
    tier: Tier | 4;
    wishes: Wish[]
    types: OracleType[]
}>, "xSize" | "ySize">

