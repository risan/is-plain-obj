# Is Plain Object

[![Build Status](https://flat.badgen.net/travis/risan/is-plain-obj)](https://travis-ci.org/risan/is-plain-obj)
[![Test Coverage](https://flat.badgen.net/codeclimate/coverage/risan/is-plain-obj)](https://codeclimate.com/github/risan/is-plain-obj)
[![Maintainability](https://flat.badgen.net/codeclimate/maintainability/risan/is-plain-obj)](https://codeclimate.com/github/risan/is-plain-obj)
[![Latest Stable Version](https://flat.badgen.net/npm/v/@risan/is-plain-obj)](https://www.npmjs.com/package/@risan/is-plain-obj)
[![Node Version](https://flat.badgen.net/npm/node/@risan/is-plain-obj)](https://www.npmjs.com/package/@risan/is-plain-obj)
[![Code Style: Prettier](https://flat.badgen.net/badge/code%20style/prettier/ff69b4)](https://github.com/prettier/prettier)
[![License](https://flat.badgen.net/npm/license/@risan/is-plain-obj)](https://github.com/risan/is-plain-obj/blob/master/LICENSE)

Tiny function to check if a value is a plain JavaScript object.

## Install

```bash
$ npm install @risan/is-plain-obj

# Or if you use Yarn
$ yarn add @risan/is-plain-obj
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
isPlainObj(NaN);
isPlainObj(Infinity);
isPlainObj("foo");
isPlainObj([1, 2, 3]);
isPlainObj(new Date());
isPlainObj(new Set([1, 2, 3]));
isPlainObj(new Map());
isPlainObj(new WeakMap());
isPlainObj(parseInt);

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
