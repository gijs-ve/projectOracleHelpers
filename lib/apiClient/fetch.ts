import { Res } from '../types';

const apiRoute = '/api';
export const fetchApi = async <T, R = Res<T>>(
    serverUrl: string,
    route: string,
    init?: RequestInit,
) => {
    try {
        const response = await fetch(`${serverUrl}${apiRoute}${route}`, init);
        if (!response.ok) {
            const { error } = await response.json();
            return { ok: true, error } as const;
        }
        return { ok: true, data: response.json() } as R;
    } catch (error) {
        if (!(error instanceof Error)) {
            return { ok: false, error: 'Unknown error' } as const;
        }
        return { ok: false, error: error.message } as const;
    }
};
