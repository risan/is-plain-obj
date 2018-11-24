# Is Plain Object

[![Latest Stable Version](https://img.shields.io/npm/v/@risan/is-plain-obj.svg)](https://www.npmjs.com/package/@risan/is-plain-obj)
[![Node Version](https://img.shields.io/node/v/@risan/is-plain-obj.svg)](https://www.npmjs.com/package/@risan/is-plain-obj)
[![Build Status](https://travis-ci.org/risan/is-plain-obj.svg?branch=master)](https://travis-ci.org/risan/is-plain-obj)
[![Test Coverage](https://api.codeclimate.com/v1/badges/216528b54c5d591441b8/test_coverage)](https://codeclimate.com/github/risan/is-plain-obj/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/216528b54c5d591441b8/maintainability)](https://codeclimate.com/github/risan/is-plain-obj/maintainability)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/risan/is-plain-obj)
[![License](https://img.shields.io/npm/l/@risan/is-plain-obj.svg)](https://github.com/risan/is-plain-obj/blob/master/LICENSE)

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
<script src="https://unpkg.com/@risan/is-plain-obj@latest/dist/is-plain-obj.umd.js"></script>

<!-- Minified version for production -->
<script src="https://unpkg.com/@risan/is-plain-obj@latest/dist/is-plain-obj.umd.min.js"></script>
```

## Usage

```js
const isPlainObj = require("@risan/is-plain-obj");

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

const myFunction = () => "foo";
isPlainObj(myFunction); // FALSE
```

If you load the library directly on the browser, it's available under the `isPlainObj` name.

```js
window.isPlainObj({ foo: "bar" }); // TRUE

window.isPlainObj(new Date()); // FALSE
```

## License

MIT © [Risan Bagja Pradana](https://bagja.net)
