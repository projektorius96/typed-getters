/* import '../index.mjs'; */// DEV_NOTE # use the signature if you cloned straight away from repository without installing it.
import '@gloch96/typed-getters/src/index.mjs';// DEV_NOTE # use the signature if you had installed the package from npmjs registry.

/**
 * @type {struct}
 */
class Coords {

    static x = 2;
    static y = 3;
    
}

/**
 * @type {interface}
 */
class Calculator {

    static squareArea({x, y}) {
        return (
            x?.isInt * y?.isInt
        );
    }

    static circArea({x}) {
        let radius = x?.isInt;
        return (
            ( radius * (2 * Math.PI) )
        );
    }

}

console.log(
    "\n\n"
    ,
    Reflect.apply(
        Calculator.squareArea, null, [Coords]
    ),
    "\n\n"
    ,
    Reflect.apply(
        Calculator.circArea, null, [Coords]
    )
);