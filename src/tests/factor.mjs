/* import '../index.mjs'; */// # use the signature if you cloned straight away from repository without installing it
import '@gloch96/typed-getters/src/index.mjs'// # use the signature if you had installed the package from npmjs registry

const Coords$struct = {
    x: Number(),
    y: Number(),
}

const Calculator$interface = {
    
    Area: function ({x, y}) {
        this.x = x?.isInt;
        this.y = y?.isInt;
        return this;
    }
    ,
    Circ: function ({x}) {
        return (Math.PI * x?.isInt) /* console # 6.283185307179586 */
    }

}

console.log(
    "\n\n",
    Reflect.apply(
        Calculator$interface.Area, Coords$struct, [ {x: 2, y: 3} ]/* { x: 2, y: 3 } */
    )
    ,
    "\n\n"
    ,
    Reflect.apply(
        Calculator$interface.Circ, Coords$struct, [ {x: 2, y: 3} ]/* 6.283185307179586 */
    )
);