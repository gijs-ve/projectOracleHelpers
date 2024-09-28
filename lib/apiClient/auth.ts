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
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
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
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
    };

    return {
        login,
        register,
    } as const;
};
