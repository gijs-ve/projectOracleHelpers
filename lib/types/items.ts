import { itemTypes } from "../world/items"
import { CoordinatedObject } from "./objects"

export type ItemType = typeof itemTypes[number]
export type Item = CoordinatedObject<{
    type: ItemType
    amount: number
}>
