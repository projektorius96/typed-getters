### Intro

Interface (_JavaScript-wise, I would call interface a "domainless function signature" or just – "decoupled method signature"_) comes in hand then you have strongly typed programming language and a struct (_better known as an object in JavaScript_) used for configuration basis and you want those types defined within Interface to match against Struct, as some sort of "anatomical apparatus", to be supported with "psychology", metaphorically said, give it some behaviour – officially referred to as "duck-typing".

As we all know, JavaScript (hereinafter – JS) is weakly typed (dynamic), particularly the interface as a type _per se_ is useless. However, if you come from Golang or some other strongly typed (static) language, you might like to stick to static typing as closely as possible utilising the duck-typing code syntax whatsoever. Here is a way to do so (please continue reading...)

### Conventions

```diff

<identifier>$<descriptive-type> // used in JS without angle brackets;

```

#### Description

We use `Reflect.apply(interface, struct, [...args])` signature, whereas `interface` (_first parameter-argument_) is an anonymous function declaration following `<identifier>$Interface` naming convention _as described just above_ ; likewise `struct` (_second parameter-argument_) is a plain – in our case prototypeless (nulled) - object following the `<identifier>$Struct` naming convention respectively. The _third parameter-argument_ is non-empty Array literal, the actual values passed to `interface`.

### Installation

> Global installation using "-g" is recommended in order the **duck-typing** to be available for any of your future vanilla JavaScript project. However, it assumes that you have imported `@gloch96/typed-getters` for each of the project respectively.

```diff
npm install -g @gloch96/typed-getters
```

#### Usage

```js
const Ryans$Struct = Object.create({
    int: Symbol('age').description,
    string: Symbol('name').description,
    bool: Symbol('employment').description
})

function Ryans$Interface(age, name, employment){
    return {
        [this.int]: age?.isInt,
        [this.string]: name?.isString,
        [this.bool]: employment?.isBool,
    }
}

const 
    PASSING = Reflect.apply(
        Ryans$Interface, 
        Ryans$Struct,
        [41, "YoungRyan", true]
    )
    ,
    FAILING_GRACEFULLY = Reflect.apply(
        Ryans$Interface, 
        Ryans$Struct,
        [-41, "UnknownRyan", !true].toReversed()
    )
    ;

    console.log(
        PASSING, /* { age: 41, name: 'YoungRyan', employment: true } */
        FAILING_GRACEFULLY /* { age: undefined, name: 'UnknownRyan', employment: undefined } */
    )
```

### To recap

> With regards to each `Reflect.apply` invocation, **passed order of arguments matters**, please refer to `Ryans$Interface` parameters' order to reflect arguments correctly, however, in the case of `FAILING_GRACEFULLY`, the `.toReversed()` mocks some type mismatching, _thanks to **typed-getters** internal behaviour_, it return graceful `undefined` anywhere type mismatch detected ; In our specific case the [optional chaining operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) used for each of `Ryans$Interface`'s field is not-mandatory, _hence "optional" in its own sense_, nevertheless it gives some implicit feel of "asking" the type, so it's totally up to you whether you will use it or not.