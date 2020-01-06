# never

A function that throws when called, use with nullish coalescing to elide unexpected nullish values.

## But why?

Sometimes you have a function which in theory may return `undefined` or `null`, except you're already really sure that it doesn't. Explicitly guarding against those unlikely values is cumbersome. In TypeScript you could use the non-null assertion (`!`) but that's very subtle.

Use `never()` instead! It always throws when called, so when used with the nullish coalescing operator, TypeScript will elide the `undefined` or `null` types:

```ts
const never = require('never')

function getValue (): string | undefined {
  // ...
}

function setString (value: string): void {
  // ...
}

const value = getValue() ?? never('Despite the type, in practice a value is always returned')
setString(value) // Works!
```

## Installation

```console
npm install never
```

## Usage

```js
const never = require('never')

// Throw with a default message:
never()

// Throw with your own message:
never('Your own message')
```

`never()` throws an [`AssertionError`](https://nodejs.org/api/assert.html#assert_class_assert_assertionerror).
