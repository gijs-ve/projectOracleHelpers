import { fetchApi } from './fetch';

const route = '/auth';
export const getAuthClient = async (serverUrl: string) => {
    const login = async (email: string, password: string) => {
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
        return response;
    };

    const register = async (email: string, password: string) => {
        const response = await fetchApi(serverUrl, `${route}/register`, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response;
    };

    return {
        login,
        register,
    } as const;
};
