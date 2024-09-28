import { Word } from '../types';
import { fetchApi } from './fetch';

const route = '/words';
export const getWordsClient = (serverUrl: string) => {
    const getWords = async () => {
        const response = await fetchApi(serverUrl, `${route}`);
        return response;
    };

    const getWord = async (wordId: string) => {
        const response = await fetchApi<Word>(serverUrl, `${route}/${wordId}`);
        return response;
    };

    return {
        getWords,
        getWord,
    } as const;
};
