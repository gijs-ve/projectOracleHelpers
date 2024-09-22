import { fetchApi } from './fetch';

const route = '/leaderboard';
export const getLeaderboardClient = (serverUrl: string) => {
    const getLeaderboard = async ({
        world,
        take,
        offset,
    }: {
        world: string;
        take: number;
        offset: number;
    }) => {
        const leaderboard = await fetchApi(
            serverUrl,
            `${route}?world=${world}&take=${take}&offset=${offset}`,
        );
        if (!leaderboard.ok) {
            throw new Error(leaderboard.error);
        }
        return leaderboard.data;
    };

    return {
        getLeaderboard,
    } as const;
};
