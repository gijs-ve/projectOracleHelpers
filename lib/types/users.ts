import { Operator } from './operators';

type Role = 'ADMIN' | 'USER';
export type User<T extends 'public' | 'private' = 'public'> = T extends 'public'
    ? PublicUser
    : PrivateUser;
export type Self = PrivateUser;

type PublicUser = {
    createdAt: Date;
    updatedAt: Date;
    id: string;
    name: string;
    victories: number;
    operators: Operator<'public'>[];
};

type PrivateUser = Omit<PublicUser, 'operators'> & {
    role: Role;
    operators: Operator<'private'>[];
};
