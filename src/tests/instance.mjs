import { construct } from "../index.mjs";// DEV_NOTE # use the signature if you cloned straight away from repository without installing it.
/* import { construct } from '@gloch96/typed-getters/src/index.mjs'; */// DEV_NOTE # use the signature if you had installed the package from npmjs registry.

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

console.log(
    "\n\n"
    ,
    construct(Portfolio, Printer, [2024, "John Doe", false])/* .getProfile() */// OUTPUT # {age: 2024, name: 'John Doe', employed: false}
    ,
    "\n\n"
    , 
    construct(Portfolio, Printer, ["2024", "John Doe", "false"])/* .getProfile() */// OUTPUT # {age: undefined, name: 'John Doe', employed: undefined}
)