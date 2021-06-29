# eslint-plugin-no-kebab-case-props

An eslint plugin to prevent kebab case props being used

## The problem

In React Native [kebab-case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles) props can at best cause yellow box errors and at worst cause unexpected results in your code. A very common situation where this occurs is when developers copy and paste SVGs from design documents which often have attributes such as `stroke-width` and so on.

This eslint rule helps surface these issues and auto-fixes to camelCase if set.

## Use

`yarn add eslint-plugin-no-kebab-case-props`

To your eslintrc add the plugin. E.g.

```
module.exports = {
  extends: [...],
  plugins: [..., "no-kebab-case-props"],
  rules: {
     ...,
    'no-kebab-case-props/no-kebab-case-props': 1
  },
  globals: {
    JSX: true,
  },
};
```

## Todo

Add more options as currently it's a bit coarse.
