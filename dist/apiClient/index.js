"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newClient = void 0;
const actions_1 = require("./actions");
const auctions_1 = require("./auctions");
const auth_1 = require("./auth");
const leaderboard_1 = require("./leaderboard");
const operators_1 = require("./operators");
const users_1 = require("./users");
const words_1 = require("./words");
const newClient = (serverUrl) => {
    return {
        actions: (0, actions_1.getActionsClient)(serverUrl),
        auctions: (0, auctions_1.getAuctionsClient)(serverUrl),
        auth: (0, auth_1.getAuthClient)(serverUrl),
        leaderboard: (0, leaderboard_1.getLeaderboardClient)(serverUrl),
        operators: (0, operators_1.getOperatorsClient)(serverUrl),
        users: (0, users_1.getUsersClient)(serverUrl),
        words: (0, words_1.getWordsClient)(serverUrl),
    };
};
exports.newClient = newClient;
