import { World } from '../types/world';
import { fetchApi } from './fetch';

const route = '/world';
export const getWorldClient = (serverUrl: string) => {
    const getWorldData = async () => {
        const world = await fetchApi<Omit<World, 'operators'>>(
            serverUrl,
            `${route}`,
        );
        if (!world.ok) {
            throw new Error(world.error);
        }
        return world.data;
    };

    return {
        getWorldData,
    } as const;
};
