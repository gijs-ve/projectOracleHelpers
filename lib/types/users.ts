import { Operator } from "./operators";

type Role = "admin" | "user";
export type User<T extends "public" | "private" = "public"> = T extends "public"
  ? PublicUser
  : PrivateUser;
export type Self = User<"private">;

type PublicUser = {
  id: string;
  name: string;
  victories: number;
  operators: Operator<"public">[];
};

type PrivateUser = PublicUser & {
  role: Role;
  email: string;
  operators: Operator<"private">[];
};
