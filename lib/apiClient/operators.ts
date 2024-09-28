import { Operator } from '../types';
import { fetchApi, tokenFetchApi } from './fetch';

const route = '/operators';
export const getOperatorsClient = (serverUrl: string) => {
    const getOperators = async ({
        worldId,
        take,
        offset,
    }: {
        worldId: string;
        take: number;
        offset: number;
    }) => {
        const response = await fetchApi<Operator[]>(
            serverUrl,
            `${route}?worldId=${worldId}&take=${take}&offset=${offset}`,
        );
        return response;
    };

    const getOperator = async ({
        token,
        operatorId,
    }: {
        token: string;
        operatorId: string;
    }) => {
        const response = await tokenFetchApi<Operator>({
            serverUrl,
            route: `${route}/${operatorId}`,
            token,
        });
        return response;
    };

    const getPrivateOperator = async ({
        token,
        operatorId,
    }: {
        token: string;
        operatorId: string;
    }) => {
        const response = await fetchApi<Operator<'private'>>(
            serverUrl,
            `${route}/self/${operatorId}`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        return response;
    };

    return {
        getOperators,
        getOperator,
        getPrivateOperator,
    } as const;
};
