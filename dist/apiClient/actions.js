"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActionsClient = void 0;
const fetch_1 = require("./fetch");
const route = '/actions';
const getActionsClient = (serverUrl) => {
    const getActions = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, fetch_1.fetchApi)(serverUrl, `${route}`);
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
    });
    const getAction = (actionId) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, fetch_1.fetchApi)(serverUrl, `${route}/${actionId}`);
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
    });
    const buyLetter = (letter) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, fetch_1.fetchApi)(serverUrl, `${route}/letters/buy`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ letter }),
        });
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
    });
    const buyWord = (word) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, fetch_1.fetchApi)(serverUrl, `${route}/words/buy`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ word }),
        });
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
    });
    const sellLetter = (letter) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, fetch_1.fetchApi)(serverUrl, `${route}/letters/sell`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ letter }),
        });
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
    });
    const sellWord = (word) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, fetch_1.fetchApi)(serverUrl, `${route}/words/sell`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ word }),
        });
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
    });
    const formWord = (letters) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, fetch_1.fetchApi)(serverUrl, `${route}/words/form`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ letters }),
        });
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
    });
    const demolishLetter = (letterId) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, fetch_1.fetchApi)(serverUrl, `${route}/letters/demolish?id=${letterId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
    });
    const demolishWord = (wordId) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, fetch_1.fetchApi)(serverUrl, `${route}/words/demolish?id=${wordId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
    });
    const submitPrompt = (prompt) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, fetch_1.fetchApi)(serverUrl, `${route}/oracle/submit`, {
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
    });
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
    };
};
exports.getActionsClient = getActionsClient;
