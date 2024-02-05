/* import { new$ } from "../index.mjs"; */// # use the signature if you cloned straight away from repository without installing it
import { new$ } from '@gloch96/typed-getters/src/index.mjs';// # use the signature if you had installed the package from npmjs registry

// DEV_NOTE # decoupled constructor (struct)
class Portfolio$struct {

    constructor(age, name, isEmployed) {
        this.age = age?.isInt;
        this.name = name?.isString;
        this.employed = isEmployed?.isBool;
    }

}

// DEV_NOTE # decoupled method(s) link to the struct
class Portfolio$interface extends Portfolio$struct {

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
    new$(Portfolio$struct, Portfolio$interface, [2024, "John Doe", false])/* .getProfile() */// # {age: 2024, name: 'John Doe', employed: false}
    ,
    "\n\n"
    , 
    new$(Portfolio$struct, Portfolio$interface, ["2024", "John Doe", "false"])/* .getProfile() */// # {age: undefined, name: 'John Doe', employed: undefined}
)