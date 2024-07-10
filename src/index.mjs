export default (function() {
    const [__STRING__, __BOOL__, __INT__, __BIGINT__ , __SYMBOL__] = ['string', 'boolean', 'number', 'bigint', 'symbol'];
    const TypedMap = new Map([
        [__STRING__, Symbol('isString')],
        [__BOOL__, Symbol('isBool')],
        [__INT__, Symbol('isInt')],
        [__BIGINT__, Symbol('isBint')],
        [__SYMBOL__, Symbol('isSymbol')]
    ]);
    const TypedStruct = {
        [TypedMap.get(__STRING__)]: function() {
            if( typeof (this.valueOf() === __STRING__) ){
                return this.valueOf();
            }
        },
        [TypedMap.get(__BOOL__)]: function() {
            if( typeof (this.valueOf() === __BOOL__) ){
                return this.valueOf();
            }
        },
        [TypedMap.get(__INT__)]: function() {
            if( typeof (this.valueOf() === __INT__) ){
                return this.valueOf();
            }
        },
        [TypedMap.get(__BIGINT__)]: function() {
            if( typeof (this.valueOf() === __BIGINT__) ){
                return this.valueOf();
            }
        },
        [TypedMap.get(__SYMBOL__)]: function() {
            if( typeof (this.valueOf() === __SYMBOL__) ){
                return this.valueOf();
            }
        },
    };
    Object.defineProperty(
        String.prototype,
        TypedMap.get(__STRING__).description,
        {
            get: TypedStruct[TypedMap.get(__STRING__)]
        }
    );
    Object.defineProperty(
        Boolean.prototype,
        TypedMap.get(__BOOL__).description,
        {
            get: TypedStruct[TypedMap.get(__BOOL__)]
        }
    );
    Object.defineProperty(
        Number.prototype,
        TypedMap.get(__INT__).description,
        {
            get: TypedStruct[TypedMap.get(__INT__)]
        }
    );
    Object.defineProperty(
        BigInt.prototype,
        TypedMap.get(__BIGINT__).description,
        {
            get: TypedStruct[TypedMap.get(__BIGINT__)]
        }
    );
    Object.defineProperty(
        Symbol.prototype,
        TypedMap.get(__SYMBOL__).description,
        {
            get: TypedStruct[TypedMap.get(__SYMBOL__)]
        }
    );
}).call();

/**
 * @param {Object} _struct - {key:value} pair(s) [i.e. factor use-case] OR non-static class members [i.e. instance use-case].
 * @param {Function} _interface - arbitrary implementation of 'typed-getters' matching against `_struct`'s members.
 * @param {Array} _args - list of arguments passed (if any).
 * @returns {Object} instance of matched typed : **any type mismatch gracefully returns `undefined` value for each key of `_struct`**.
 */
export function new$(_struct, _interface, _args = []){
    return (
        Reflect.construct(_struct, _args, _interface)
    )
}
