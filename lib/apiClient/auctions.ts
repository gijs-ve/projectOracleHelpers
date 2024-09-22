import { fetchApi } from './fetch';

const route = '/auctions';
export const getAuctionsClient = (serverUrl: string) => {
    const getAuctions = async ({
        take,
        offset,
    }: {
        take: number;
        offset: number;
    }) => {
        const response = await fetchApi(
            serverUrl,
            `${route}/auctions?take=${take}&offset=${offset}`,
        );
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
    };

    const postOffer = async ({
        auctionId,
        bid,
    }: {
        auctionId: string;
        bid: number;
    }) => {
        const response = await fetchApi(
            serverUrl,
            `${route}/auctions/offer?id=${auctionId}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ bid }),
            },
        );
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
    };
    return {
        getAuctions,
        postOffer,
    } as const;
};
