import { User } from '../types';
import { tokenFetchApi } from './fetch';

const route = '/users';
export const getUsersClient = (serverUrl: string) => {
    const getPrivateUser = async (token: string) => {
        const response = await tokenFetchApi<User<'private'>>({
            serverUrl,
            route: `${route}/self`,
            token,
        });
        return response;
    };

    const getUser = async ({
        token,
        userId,
    }: {
        token: string;
        userId: string;
    }) => {
        const user = await tokenFetchApi<User>({
            serverUrl,
            route: `${route}/${userId}`,
            token,
        });
        return user;
    };

    return {
        getPrivateUser,
        getUser,
    } as const;
};
