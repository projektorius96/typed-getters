void function main() {

    /**
     * @see {@link https://vanillacamp.hashnode.dev/enum-via-proxy}
     */
    const
        NULL = Object.create(null)
        ,
        PRINT = 
        new Proxy(NULL, {
            get(nil, key){
                return (
                    key = `${key}`
                );
            }
        })
    ;

    const 
        [
            __STRING__
            , 
            __BOOL__
            , 
            __INT__
            , 
            __BIGINT__ 
            , 
            __SYMBOL__
        ] = [
            PRINT.string
            , 
            PRINT.boolean
            , 
            PRINT.number
            , 
            PRINT.bigint
            , 
            PRINT.symbol
        ];
    
    const TypedMap = new Map([
        [__STRING__, Symbol(PRINT.isString)],
        [__BOOL__, Symbol(PRINT.isBool)],
        [__INT__, Symbol(PRINT.isInt)],
        [__BIGINT__, Symbol(PRINT.isBint)],
        [__SYMBOL__, Symbol(PRINT.isSymbol)]
    ]);

    const TypedStruct = {
        [TypedMap.get(__STRING__)] : function() {
            if( typeof (this.valueOf() === __STRING__) ){
                return this.valueOf();
            }
        },
        [TypedMap.get(__BOOL__)] : function() {
            if( typeof (this.valueOf() === __BOOL__) ){
                return this.valueOf();
            }
        },
        [TypedMap.get(__INT__)] : function() {
            if( typeof (this.valueOf() === __INT__) ){
                return this.valueOf();
            }
        },
        [TypedMap.get(__BIGINT__)] : function() {
            if( typeof (this.valueOf() === __BIGINT__) ){
                return this.valueOf();
            }
        },
        [TypedMap.get(__SYMBOL__)] : function() {
            if( typeof (this.valueOf() === __SYMBOL__) ){
                return this.valueOf();
            }
        }
    };

    Object.defineProperty(
        String.prototype,
        TypedMap.get(__STRING__).description
        ,
        {
            get: TypedStruct[TypedMap.get(__STRING__)]
        }
    );
    Object.defineProperty(
        Boolean.prototype,
        TypedMap.get(__BOOL__).description
        ,
        {
            get: TypedStruct[TypedMap.get(__BOOL__)]
        }
    );
    Object.defineProperty(
        Number.prototype,
        TypedMap.get(__INT__).description
        ,
        {
            get: TypedStruct[TypedMap.get(__INT__)]
        }
    );
    Object.defineProperty(
        BigInt.prototype,
        TypedMap.get(__BIGINT__).description
        ,
        {
            get: TypedStruct[TypedMap.get(__BIGINT__)]
        }
    );
    Object.defineProperty(
        Symbol.prototype,
        TypedMap.get(__SYMBOL__).description
        ,
        {
            get: TypedStruct[TypedMap.get(__SYMBOL__)]
        }
    );

}();

export const implementWith = (_interface, usingStruct)=> Reflect.apply(_interface, null, [usingStruct]);