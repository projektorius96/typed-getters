# **Project name**: typed-getters (2024 edition)

> Using [JSDocs](https://jsdoc.app/) in tandem with **typed-getters** could become a lightweight alternative over TypeScript .

### MOTIVATION

Unlike default EcmaScript (JavaScript) constructors such as `String() defaults to '' | Number() defaults to 0 | Symbol() defaults to Symbol() | Boolean() defaults to false` whereas each by specification defaults to some value, the `typed-getters` helps to maintain consistency among JavaScript primitive simply returning a graceful `undefined` (also see [HOW TO USE](#how-to-use))

### HOW TO USE

> Please refer to `./src/tests/` running each test as `node /src/tests/test_name.mjs` whereas "test_name" := `instance` | `factor` (you get the idea) . The test examples are ESM-friendly scripts that can be evaluated in both run-times : _browser of choice_ and _Node.js_ .

##### Source

Consider the following code excerpt of our `node /src/tests/instance.mjs` example as follows :

```diff
class Name$sruct {

    constructor(){
        // constructor implements typed-getters via its accessors (refer to ./index.mjs for TypedMap Map constant)
    }

}

class Name$interface extends Name$sruct {

    methodDeclaration(){
        // decoupled prototype for will-be instance of Name$sruct
    }

}
```

From the code above, we see that it only makes sense (decoupling) prototype from its related instance if we are _duck-typing_ . Of course, we could achieve similar idea using `Reflect.apply` (refer to `./src/tests/factor.mjs`), however in turn it would return **factor** rather than **instance** as our `new$` named export essentialy is nothing else than a slighly modified `Reflect.construct`.

---

Happy coding ♥ projektorius96