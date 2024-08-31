import { lootTypes } from "../world/loot"
import { CoordinatedObject } from "./objects"

export type LootType = typeof lootTypes[number]
export type Loot = CoordinatedObject<{
    type: LootType
    amount: number
}>
