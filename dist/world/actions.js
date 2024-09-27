"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionTypes = void 0;
const machines_1 = require("./machines");
exports.actionTypes = [...machines_1.machineActionTypes, 'makeMachine'];
