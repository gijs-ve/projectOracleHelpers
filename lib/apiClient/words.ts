import { Word } from '../types';
import { fetchApi } from './fetch';

const route = '/words';
export const getWordsClient = async (serverUrl: string) => {
    const getWords = async () => {
        const words = await fetchApi(serverUrl, `${route}`);
        if (!words.ok) {
            throw new Error(words.error);
        }
        return words;
    };

    const getWord = async (wordId: string) => {
        const word = await fetchApi<Word>(serverUrl, `${route}/${wordId}`);
        if (!word.ok) {
            throw new Error(word.error);
        }
        return word;
    };

    return {
        getWords,
        getWord,
    } as const;
};
