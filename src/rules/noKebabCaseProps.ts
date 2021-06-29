import * as ESLint from 'eslint';
import * as ESTreeTypes from '@types/estree';
import * as BabelTypes from '@babel/types';
import camelCase from 'lodash/camelCase';

module.exports = {
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
  create: function (context: ESLint.Rule.RuleContext) {
    return {
      JSXAttribute(node: BabelTypes.JSXAttribute) {
        if (node.type === 'JSXAttribute') {
          // @TODO: don't use casting here. Instead use declaration merging
          const identifier = node.name as unknown as ESTreeTypes.Identifier;
          if (
            typeof identifier?.name === 'string' &&
            identifier.name.includes('-')
          ) {
            const castNode = node as unknown as ESLint.Rule.Node;
            context.report({
              node: castNode,
              message: 'You must use camelcase props',
              fix: (fixer) => {
                return fixer.replaceText(
                  identifier,
                  camelCase(identifier.name)
                );
              },
            });
          }
        }
      },
    };
  },
};
