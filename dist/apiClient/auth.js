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
exports.getAuthClient = void 0;
const fetch_1 = require("./fetch");
const route = '/auth';
const getAuthClient = (serverUrl) => {
    const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, fetch_1.fetchApi)(serverUrl, `${route}/login`, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
    });
    const register = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, fetch_1.fetchApi)(serverUrl, `${route}/register`, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
    });
    return {
        login,
        register,
    };
};
exports.getAuthClient = getAuthClient;
