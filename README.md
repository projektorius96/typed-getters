# Project name: **typed-getters** (2026 Q1 edition)

### MOTIVATION

Rather than relying on EcmaScript (JavaScript) constructors such as: `String() defaults to '' | Number() defaults to 0 | Symbol() defaults to Symbol() | Boolean() defaults to false | etc.`., each defaulting to its respective semantic value, we may instead rely on _"edit-time"_ **typed-getters** consistently defaulting to graceful `undefined` value, iff any "type" mismatch detected during "runtime"; now, if you look at `./src/index.mjs`, you'll find an exported `implementWith` call that in turn takes two paramters reading from left-to-right basis:
- 1st parameter takes _idiomatic "interface"_ as immutable ES6 class;
- 2nd parameters takes _idiomatic "struct"_ as immutable ES6 class;

Thus, using `implementWith` (_or optionally - your own `Reflect.apply` abstraction_) we can achieve not a "compile-time"->"runtime", but rather "edit-time"->"runtime" duck-typing behaviour as follows (see - `./src/examples/factor.mjs`)

---

Made with ♥ projektorius96 | 2026
