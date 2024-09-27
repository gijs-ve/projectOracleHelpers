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
exports.getAuctionsClient = void 0;
const fetch_1 = require("./fetch");
const route = '/auctions';
const getAuctionsClient = (serverUrl) => {
    const getAuctions = (_a) => __awaiter(void 0, [_a], void 0, function* ({ take, offset, }) {
        const response = yield (0, fetch_1.fetchApi)(serverUrl, `${route}/auctions?take=${take}&offset=${offset}`);
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
    });
    const postOffer = (_a) => __awaiter(void 0, [_a], void 0, function* ({ auctionId, bid, }) {
        const response = yield (0, fetch_1.fetchApi)(serverUrl, `${route}/auctions/offer?id=${auctionId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bid }),
        });
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
    });
    return {
        getAuctions,
        postOffer,
    };
};
exports.getAuctionsClient = getAuctionsClient;
