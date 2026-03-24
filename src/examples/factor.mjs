import { implementWith } from  '../index.mjs';

/**
 * @type {struct} an idiomatic struct pattern
 */
class Coords {

    static x = 2;
    static y = 3;

    // Freezes non-shallow (primitives) reference; NOTE: iff x | y was rather an object only top-level reference would remain immutable, the rest were mutable, hence "shallow" 
    static {
        Object.freeze(this);
    }
    
}

/**
 * @type {interface} an idiomatic interface pattern
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

    // Freezing static methods, making this idiomatic "interface" read-only
    static {
        Object.freeze(this)
    }

}

console.log(
    "\n\n"
    ,
    implementWith(
        Calculator.squareArea, Coords
    ),
    "\n\n"
    ,
    implementWith(
        Calculator.circArea, Coords
    )
);