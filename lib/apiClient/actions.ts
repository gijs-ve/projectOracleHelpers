import { Action, Letter, Word } from '../types';
import { fetchApi } from './fetch';

const route = '/actions';
export const getActionsClient = (serverUrl: string) => {
    const getActions = async () => {
        const response = await fetchApi<Action[]>(serverUrl, `${route}`);
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response;
    };

    const getAction = async (actionId: string) => {
        const response = await fetchApi<Action>(
            serverUrl,
            `${route}/${actionId}`,
        );
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response;
    };

    const buyLetter = async (letter: Letter) => {
        const response = await fetchApi(serverUrl, `${route}/letters/buy`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ letter }),
        });
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response;
    };

    const buyWord = async (word: Word) => {
        const response = await fetchApi(serverUrl, `${route}/words/buy`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ word }),
        });
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response;
    };

    const sellLetter = async (letter: Letter) => {
        const response = await fetchApi(serverUrl, `${route}/letters/sell`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ letter }),
        });
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response;
    };

    const sellWord = async (word: Word) => {
        const response = await fetchApi(serverUrl, `${route}/words/sell`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ word }),
        });
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response;
    };

    const formWord = async (letters: Letter[]) => {
        const response = await fetchApi(serverUrl, `${route}/words/form`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ letters }),
        });
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response;
    };

    const demolishLetter = async (letterId: string) => {
        const response = await fetchApi(
            serverUrl,
            `${route}/letters/demolish?id=${letterId}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response;
    };

    const demolishWord = async (wordId: string) => {
        const response = await fetchApi(
            serverUrl,
            `${route}/words/demolish?id=${wordId}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response;
    };

    const submitPrompt = async (prompt: Word[]) => {
        const response = await fetchApi(serverUrl, `${route}/oracle/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response;
    };
    return {
        buyWord,
        buyLetter,
        demolishLetter,
        demolishWord,
        formWord,
        getActions,
        getAction,
        sellLetter,
        sellWord,
        submitPrompt,
    } as const;
};
