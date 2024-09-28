import { World } from '../types/world';
import { fetchApi } from './fetch';

const route = '/world';
export const getWorldClient = (serverUrl: string) => {
    const getWorldData = async () => {
        const world = await fetchApi<
            Omit<World, 'operators'> & {
                operatorCount: number;
            }
        >(serverUrl, `${route}`);
        return world;
    };

    return {
        getWorldData,
    } as const;
};
