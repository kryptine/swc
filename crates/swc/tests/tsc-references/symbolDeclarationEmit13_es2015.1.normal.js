var tmp = Symbol.toPrimitive, tmp1 = Symbol.toStringTag;
//@target: ES6
//@declaration: true
class C {
    get [tmp]() {
        return "";
    }
    set [tmp1](x) {}
}
