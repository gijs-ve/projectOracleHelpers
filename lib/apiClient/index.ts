import { getActionsClient } from './actions';
import { getAuctionsClient } from './auctions';
import { getAuthClient } from './auth';
import { getLeaderboardClient } from './leaderboard';
import { getOperatorsClient } from './operators';
import { getUsersClient } from './users';
import { getWordsClient } from './words';
import { getWorldsClient } from './worlds';

export const newClient = (serverUrl: string) => {
    return {
        actions: getActionsClient(serverUrl),
        auctions: getAuctionsClient(serverUrl),
        auth: getAuthClient(serverUrl),
        leaderboard: getLeaderboardClient(serverUrl),
        operators: getOperatorsClient(serverUrl),
        users: getUsersClient(serverUrl),
        words: getWordsClient(serverUrl),
        worlds: getWorldsClient(serverUrl),
    } as const;
};

export type Client = ReturnType<typeof newClient>;
