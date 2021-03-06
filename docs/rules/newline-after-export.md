# Newline After Export (newline-after-export)

Ensures `export` statements are followed by a newline.

> The `--fix` option on the command line can automatically fix some of the problems reported by this rule.

## Rule Details

The following patterns are not considered problems:

```js
/* eslint wyze/newline-after-export: 'error' */
const num = 42

export { num }
```

```js
/* eslint wyze/newline-after-export: 'error' */
export const num = 42

const message = 'Okay.'
```

The following patterns are considered problems:

```js
/* eslint wyze/newline-after-export: 'error' */
export const num = 42;
const message = 'Okay'
```

## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of export statements.
