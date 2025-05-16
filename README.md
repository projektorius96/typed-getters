# **Project name**: typed-getters (2025 edition)

### MOTIVATION

Unlike default EcmaScript (hereinafter as JavaScript) constructors such as: `String() defaults to '' | Number() defaults to 0 | Symbol() defaults to Symbol() | Boolean() defaults to false` . Instead, using `typed-getters` we can maintain consistency among JavaScript primitives by simply returning a graceful `undefined` if any of type mismatch within arbitrarily-defined `interface` have been detected...

### HOW TO USE

### Installation

> **DISCLAIMER ALERT**: _UNLESS STATED OTHERWISE_, current version found on npmjs registry, and scoped under `@gloch96/typed-getters` may be outdated: the current solution is to download it from `github.com`, and in turn import the `src/index.mjs` part of the code for further use !

To install util, run the following command: <br> 
`npm i @gloch96/typed-getters`

Before using, common sense, you have to import it. Depending on your use case, you can import it in one of the following ways:

**A. You need to instantiate it**

```js
/**
 * @see For the full implementation details of `construct` (i.e. wrapper for `Reflect.constructor`), refer to `src/index.mjs`.
*/
import { construct } from '@gloch96/typed-getters/src/index.mjs'; // ./src/tests/instance.mjs
```

**B. You need to factorise it**

```js
import '@gloch96/typed-getters/src/index.mjs'; // ./src/tests/factor.mjs
```

### Test examples

> Please refer to `./src/tests/<test_name>.mjs` where `<test_name>` := {`instance` | `factor`}; <br> 
**Each test example is ESM-friendly script** that can be evaluated in both run-times, i.e. _browser of choice_ and _Node.js_ runtime.

---

Made with ♥ projektorius96
