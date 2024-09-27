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
exports.getWordsClient = void 0;
const fetch_1 = require("./fetch");
const route = '/words';
const getWordsClient = (serverUrl) => {
    const getWords = () => __awaiter(void 0, void 0, void 0, function* () {
        const words = yield (0, fetch_1.fetchApi)(serverUrl, `${route}`);
        if (!words.ok) {
            throw new Error(words.error);
        }
        return words.data;
    });
    const getWord = (wordId) => __awaiter(void 0, void 0, void 0, function* () {
        const word = yield (0, fetch_1.fetchApi)(serverUrl, `${route}/${wordId}`);
        if (!word.ok) {
            throw new Error(word.error);
        }
        return word.data;
    });
    return {
        getWords,
        getWord,
    };
};
exports.getWordsClient = getWordsClient;
