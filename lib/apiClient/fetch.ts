import { Res } from '../types';

const apiRoute = '/api';
export const fetchApi = async <T, R = Res<T>>(
    serverUrl: string,
    route: string,
    init?: RequestInit,
) => {
    const response = await fetch(`${serverUrl}${apiRoute}${route}`, init);
    if (!response.ok) {
        return { ok: false, error: response.statusText } as const;
    }
    return { ok: true, data: response.json() } as R;
};
