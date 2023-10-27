### Intro

Interface (_JavaScript-wise, I would call interface a "domainless function signature" or just – "decoupled method signature"_) comes in hand then you have strongly typed programming language and a struct (_better known as an object in JavaScript_) used for configuration basis and you want those types defined within Interface to match against Struct, as some sort of "anatomical apparatus", to be supported with "psychology", metaphorically said, give it some behaviour – officially referred to as "duck-typing".

As we all know, JavaScript (hereinafter – JS) is weakly typed (dynamic), particularly the interface as a type _per se_ is useless. However, if you come from Golang or some other strongly typed (static) language, you might like to stick to static typing as closely as possible utilising the duck-typing code syntax whatsoever. Here is a way to do so (please continue reading...)

### Conventions

```diff

<identifier>$<descriptive-type> // used in JS without angle brackets;

```

#### Description

We use `new$` for `Reflect.construct(interface, [struct])` signature, whereas `interface` (_first parameter-argument_) is an anonymous function declaration following `<identifier>$Interface` naming convention _as described just above_ ; likewise `struct` within syntactically-enforced Array literal syntax (_second parameter-argument_) is a plain object following the `<identifier>$Struct` naming convention respectively.

### Installation

> Global installation using "-g" is recommended in order the **duck-typing** to be available for any of your future vanilla JavaScript project. However, it assumes that you have imported `@gloch96/typed-getters` for each of the project respectively.

```diff
npm install -g @gloch96/typed-getters
```

#### Usage

```js
import 'typed-getters/index.mjs';

const new$ = Reflect.construct;

// Ryans$Struct - in this case - destructured prototypeless (nulled) object with an alias for each property, use object literals otherwise;
const { age: a, name: n, isEmployed: iE } = Object.create({
    age: 41,
    name: "Ryan",
    isEmployed: true
});

const Ryans$Interface = new$(
        
    function (age, name, isEmployed){
        this.age = age?.isInt;
        this.name = name?.isString
        this.isEmployed = isEmployed?.isBool;
    }
    , 
    [a, n, iE]
    
)

const Unknown$Interface = new$(
    
    function(age, name, isEmployed){
        this.age = age?.isInt;
        this.name = name?.isString
        this.isEmployed = isEmployed?.isBool;
    }
    , 
    [a, "Unknown" + n, iE].toReversed()

)

console.log(
    Ryans$Interface, /* { age: 41, name: 'Ryan', isEmployed: true }[PASSED] */
    Unknown$Interface /*{ age: undefined, name: 'UnknownRyan', isEmployed: 
    undefined }[PASSED, OTHERWISE FAILED GRACEFULLY WITH UNDEFINED IF ANY TYPE MISMATCH DETECTED] */
)
```

### To recap

Pay attention that `Unknown$Interface` (_refer to [Usage example](#usage)_) has some mocked type mismatching that, _due to the **typed-getters** internal behaviour_, makes it to return `undefined` value gracefully!

In our specific case, [optional chaining operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) used within each `<identifier>$Interface` is not-mandatory (_i.e. optional in its own sense_), nevertheless it gives some implicit feel of "asking" the type, so it's totally up to you whether you will use it or not.