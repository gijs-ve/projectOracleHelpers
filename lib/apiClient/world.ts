import { World } from '../types/world';
import { fetchApi } from './fetch';

const route = '/world';
export const getWorldClient = (serverUrl: string) => {
    const getWorld = async (id: string) => {
        const response = await fetchApi<
            Omit<World, 'operators'> & {
                operatorCount: number;
            }
        >(serverUrl, `${route}/${id}`);
        return response;
    };

    const getWorlds = async () => {
        const response = await fetchApi<
            Pick<World, 'id' | 'name' | 'createdAt'>[]
        >(serverUrl, `${route}`);
        return response;
    };

    return {
        getWorld,
        getWorlds,
    } as const;
};
