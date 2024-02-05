import '../index.mjs';

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