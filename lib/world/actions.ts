import { machineActionTypes } from "./machines";

export const actionTypes = [...machineActionTypes, "makeMachine"] as const;