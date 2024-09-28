import { Operator, PrivateOperator } from '../types';
import { fetchApi, tokenFetchApi } from './fetch';

const route = '/operators';
export const getOperatorsClient = (serverUrl: string) => {
    const createOperator = async ({
        token,
        name,
    }: {
        token: string;
        name: string;
    }) => {
        const response = await tokenFetchApi<PrivateOperator>({
            serverUrl,
            route,
            token,
            init: {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name }),
            },
        });
        return response;
    };

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
        const response = await tokenFetchApi<Operator<'private'>>({
            serverUrl,
            route: `${route}/self/${operatorId}`,
            token,
        });
        return response;
    };

    return {
        createOperator,
        getOperators,
        getOperator,
        getPrivateOperator,
    } as const;
};
