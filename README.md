# **Project name**: typed-getters (2024 edition)

### MOTIVATION

Unlike default EcmaScript (JavaScript) constructors such as `String() defaults to '' | Number() defaults to 0 | Symbol() defaults to Symbol() | Boolean() defaults to false` . Instead, using `typed-getters` we can maintain consistency among JavaScript primitives by simply returning a graceful `undefined` if any of type mismtach detected within arbitrarily-defined `interface`.

### HOW TO USE

### Installation

To install util, run the following command: <br> 
`npm i @gloch96/typed-getters`

Before using, common sense, you have to import it. Depending on your use-case, you can import it in the following way:

**A. You need to instantiate it**

```js
// ./src/tests/instance.mjs
import { new$ } from '@gloch96/typed-getters/src/index.mjs';
```

**B. You need to factorise it**

```js
// ./src/tests/factor.mjs
import '@gloch96/typed-getters/src/index.mjs';
```

### Test examples

> Please refer to `./src/tests/<test_name>.mjs` where `<test_name>` := `instance` | `factor` (you get the idea); <br> 
**Each test example is ESM-friendly script** that can be evaluated in both run-times, i.e. _browser of choice_ and _Node.js_.

### Review

Consider the following code excerpt of our `./src/tests/instance.mjs` example as follows:

```js
/**
 * @type {struct}
 */
class Portfolio {

    constructor(age, name, isEmployed) {

        this.age = age?.isInt;
        this.name = name?.isString;
        this.employed = isEmployed?.isBool;

    }

}

/**
 * @type {interface}
 */
class Printer {

    getProfile() {
        return (`
            age=${this.age}
            name=${this.name}
            employed=${this.employed}
        `)
    }

}
```

From the code above, we see that it only makes sense to decouple prototype from its related constructor if, and only if we are _duck-typing_ : of course, we could achieve similar idea using `Reflect.apply` (please refer to `./src/tests/factor.mjs`), however in such case `Reflect.apply` would then return a **factor** rather than the **instance** as our `new$` named export essentialy is nothing else than a slightly modified `Reflect.construct`.

---

Made with ♥ projektorius96
