"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noKebabCaseProps_1 = __importDefault(require("./rules/noKebabCaseProps"));
module.exports = {
    rules: {
        'no-kebab-case-props': noKebabCaseProps_1.default,
    },
};
