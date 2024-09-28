import { Res } from '../types';

const apiRoute = '/api';
export const fetchApi = async <T, R = Res<T>>(
    serverUrl: string,
    route: string,
    init?: RequestInit,
) => {
    try {
        const response = await fetch(`${serverUrl}${apiRoute}${route}`, init);
        const data = await response.json();
        if (!response.ok) {
            const { error } = data;
            return { ok: false, error } as const;
        }
        return { ok: true, data } as R;
    } catch (error) {
        if (!(error instanceof Error)) {
            return { ok: false, error: 'Unknown error' } as const;
        }
        return { ok: false, error: error.message } as const;
    }
};
