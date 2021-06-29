"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const camelCase_1 = __importDefault(require("lodash/camelCase"));
const rules = {
    meta: {
        type: 'problem',
        docs: {
            description: 'disallow kebab-case react props',
            category: 'Errors',
            recommended: true,
            url: 'https://github.com/JofArnold/eslint-plugin-no-kebab-case-props',
        },
        fixable: true,
    },
    create: function (context) {
        return {
            JSXAttribute(node) {
                if (node.type === 'JSXAttribute') {
                    // @TODO: don't use casting here. Instead use declaration merging
                    const identifier = node.name;
                    if (typeof (identifier === null || identifier === void 0 ? void 0 : identifier.name) === 'string' &&
                        identifier.name.includes('-')) {
                        const castNode = node;
                        context.report({
                            node: castNode,
                            message: 'You must use camelcase props',
                            fix: (fixer) => {
                                return fixer.replaceText(identifier, camelCase_1.default(identifier.name));
                            },
                        });
                    }
                }
            },
        };
    },
};
exports.default = rules;
