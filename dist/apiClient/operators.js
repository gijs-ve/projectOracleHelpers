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
exports.getOperatorsClient = void 0;
const fetch_1 = require("./fetch");
const route = '/operators';
const getOperatorsClient = (serverUrl) => {
    const getOperators = (_a) => __awaiter(void 0, [_a], void 0, function* ({ worldId, take, offset, }) {
        const response = yield (0, fetch_1.fetchApi)(serverUrl, `${route}?worldId=${worldId}&take=${take}&offset=${offset}`);
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
    });
    const getOperator = (operatorId) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, fetch_1.fetchApi)(serverUrl, `${route}/${operatorId}`);
        if (!response.ok) {
            throw new Error(response.error);
        }
        return response.data;
    });
    return {
        getOperators,
        getOperator,
    };
};
exports.getOperatorsClient = getOperatorsClient;
