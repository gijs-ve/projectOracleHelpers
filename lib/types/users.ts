import { Operator } from "./operators";

type Role = "admin" | "user";
export type User<T extends "public" | "private" = "public"> = T extends "public"
  ? PublicUser
  : PrivateUser;
export type Self = PrivateUser

type PublicUser = {
  id: string;
  name: string;
  victories: number;
  operators: Operator<"public">[];
};

type PrivateUser = Omit<PublicUser, 'operators'> & {
  role: Role;
  email: string;
  operators: Operator<"private">[];
};
