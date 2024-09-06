import { User } from '../types';
import { fetchApi } from './fetch';

const route = '/users';
export const getUsersClient = (serverUrl: string) => {
    const getUser = async (userId: string) => {
        const user = await fetchApi<User>(serverUrl, `${route}/${userId}`);
        if (!user.ok) {
            throw new Error(user.error);
        }
        return user;
    };

    return {
        getUser,
    } as const;
};
