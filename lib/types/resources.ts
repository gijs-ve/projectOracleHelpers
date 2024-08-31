import { resourceTypes } from "../world/resources";

export type ResourceType = (typeof resourceTypes)[number];

export type Resource = {
  type: ResourceType;
  amount: number;
  perMinute: number;
  updatedAt: Date;
};
