# Is Plain Object

[![Latest Stable Version](https://img.shields.io/npm/v/isplainobj.svg)](https://www.npmjs.com/package/isplainobj)
[![Node Version](https://img.shields.io/node/v/isplainobj.svg)](https://www.npmjs.com/package/isplainobj)
[![Build Status](https://travis-ci.org/risan/isplainobj.svg?branch=master)](https://travis-ci.org/risan/isplainobj)
[![Test Coverage](https://api.codeclimate.com/v1/badges/216528b54c5d591441b8/test_coverage)](https://codeclimate.com/github/risan/isplainobj/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/216528b54c5d591441b8/maintainability)](https://codeclimate.com/github/risan/isplainobj/maintainability)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/risan/isplainobj)
[![License](https://img.shields.io/npm/l/isplainobj.svg)](https://www.npmjs.com/package/isplainobj)

Tiny function to check if a value is a plain JavaScript object.

## Installation

```bash
$ npm install isplainobj

# Or if you use Yarn
$ yarn add isplainobj
```

Use this library directly on the browser:

```html
<!-- For development -->
<script src="https://unpkg.com/isplainobj@latest/dist/isplainobj.umd.js"></script>

<!-- Minified version for production -->
<script src="https://unpkg.com/isplainobj@latest/dist/isplainobj.umd.min.js"></script>
```

## Usage

```js
const isPlainObj = require("isplainobj");

// The following statements will return TRUE:
isPlainObj({});
isPlainObj({ foo: "bar" });
isPlainObj(new Object());
isPlainObj(Object.create(null));
isPlainObj(Object.create({}));

// The following statements will return FALSE:
isPlainObj(undefined);
isPlainObj(null);
isPlainObj(true);
isPlainObj(3.14);
isPlainObj("foo");
isPlainObj([1, 2, 3]);
isPlainObj(new Date());
isPlainObj(new Set([1, 2, 3]));
isPlainObj(new Map());
isPlainObj(new WeakMap());

class Person {}

isPlainObj(new Person()); // FALSE
```

If you load the library directly on the browser, it's available under the `isplainobj` name.

```js
window.isplainobj({ foo: "bar" }); // true

window.isplainobj(new Date()); // false
```

## License

MIT © [Risan Bagja Pradana](https://bagja.net)
