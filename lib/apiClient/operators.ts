import { Operator } from '../types';
import { fetchApi } from './fetch';

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
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
    };

    const getOperator = async (operatorId: string) => {
        const response = await fetchApi<Operator>(
            serverUrl,
            `${route}/${operatorId}`,
        );
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
    };

    return {
        getOperators,
        getOperator,
    } as const;
};
