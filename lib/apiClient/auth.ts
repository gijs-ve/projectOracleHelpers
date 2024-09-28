import { fetchApi } from './fetch';

const route = '/auth';
export const getAuthClient = (serverUrl: string) => {
    const login = async ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) => {
        const response = await fetchApi(serverUrl, `${route}/login`, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response;
    };

    const register = async ({
        name,
        email,
        password,
    }: {
        name: string;
        email: string;
        password: string;
    }) => {
        const response = await fetchApi(serverUrl, `${route}/register`, {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response;
    };

    return {
        login,
        register,
    } as const;
};
