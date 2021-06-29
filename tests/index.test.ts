const RuleTester = require('eslint').RuleTester;
const rule = require('../src/rules/noKebabCaseProps');

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
};

describe('rules', () => {
  const ruleTester = new RuleTester({ parserOptions });
  ruleTester.run('no-kebab-case-props', rule, {
    valid: [
      {
        code: `const Component = () => <div ok="ok"/>`,
      },
      {
        code: `const Component = () => <div stillOk="ok"/>`,
      },
      {
        code: `const Component = () => <div also_ok="ok"/>`,
      },
    ],
    invalid: [
      {
        code: `const Component = () => <div not-ok="ok"/> `,
        output: `const Component = () => <div notOk="ok"/> `,
        errors: [
          {
            line: 1,
            column: 30,
            type: 'JSXAttribute',
            message: 'You must use camelcase props',
          },
        ],
      },
    ],
  });
});
