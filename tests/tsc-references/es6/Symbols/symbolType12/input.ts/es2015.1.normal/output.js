//@target: ES6
var s = Symbol.for("assign");
var str = "";
s *= s;
s *= 0;
s /= s;
s /= 0;
s %= s;
s %= 0;
s += s;
s += 0;
s += "";
str += s;
s -= s;
s -= 0;
s <<= s;
s <<= 0;
s >>= s;
s >>= 0;
s >>>= s;
s >>>= 0;
s &= s;
s &= 0;
s ^= s;
s ^= 0;
s |= s;
s |= 0;
str += s || str;