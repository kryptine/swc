function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var A1 = /*#__PURE__*/ function() {
    "use strict";
    function A1() {
        _classCallCheck(this, A1);
    }
    _createClass(A1, [
        {
            key: "fn",
            value: function fn(a) {
                return null;
            }
        }
    ]);
    return A1;
}();
var B1 = /*#__PURE__*/ function() {
    "use strict";
    function B1() {
        _classCallCheck(this, B1);
    }
    _createClass(B1, [
        {
            key: "fn",
            value: function fn(b) {
                return null;
            }
        }
    ]);
    return B1;
}();
var Base = /*#__PURE__*/ function() {
    "use strict";
    function Base() {
        _classCallCheck(this, Base);
    }
    _createClass(Base, [
        {
            key: "fn",
            value: function fn(b) {
                return null;
            }
        }
    ]);
    return Base;
}();
var A2 = /*#__PURE__*/ function(Base) {
    "use strict";
    _inherits(A2, Base);
    var _super = _createSuper(A2);
    function A2() {
        _classCallCheck(this, A2);
        return _super.apply(this, arguments);
    }
    return A2;
}(Base);
var B2 = /*#__PURE__*/ function(Base) {
    "use strict";
    _inherits(B2, Base);
    var _super = _createSuper(B2);
    function B2() {
        _classCallCheck(this, B2);
        return _super.apply(this, arguments);
    }
    return B2;
}(Base);
var a1;
var a2;
var a3;
var a4;
var a5;
var a6;
var b1;
var b2;
var b3;
var b4;
var b5;
var b6;
var base1;
var base2;
// operator <
var r1a1 = a1 < b1;
var r1a2 = base1 < base2;
var r1a3 = a2 < b2;
var r1a4 = a3 < b3;
var r1a5 = a4 < b4;
var r1a6 = a5 < b5;
var r1a7 = a6 < b6;
var r1b1 = b1 < a1;
var r1b2 = base2 < base1;
var r1b3 = b2 < a2;
var r1b4 = b3 < a3;
var r1b5 = b4 < a4;
var r1b6 = b5 < a5;
var r1b7 = b6 < a6;
// operator >
var r2a1 = a1 > b1;
var r2a2 = base1 > base2;
var r2a3 = a2 > b2;
var r2a4 = a3 > b3;
var r2a5 = a4 > b4;
var r2a6 = a5 > b5;
var r2a7 = a6 > b6;
var r2b1 = b1 > a1;
var r2b2 = base2 > base1;
var r2b3 = b2 > a2;
var r2b4 = b3 > a3;
var r2b5 = b4 > a4;
var r2b6 = b5 > a5;
var r2b7 = b6 > a6;
// operator <=
var r3a1 = a1 <= b1;
var r3a2 = base1 <= base2;
var r3a3 = a2 <= b2;
var r3a4 = a3 <= b3;
var r3a5 = a4 <= b4;
var r3a6 = a5 <= b5;
var r3a7 = a6 <= b6;
var r3b1 = b1 <= a1;
var r3b2 = base2 <= base1;
var r3b3 = b2 <= a2;
var r3b4 = b3 <= a3;
var r3b5 = b4 <= a4;
var r3b6 = b5 <= a5;
var r3b7 = b6 <= a6;
// operator >=
var r4a1 = a1 >= b1;
var r4a2 = base1 >= base2;
var r4a3 = a2 >= b2;
var r4a4 = a3 >= b3;
var r4a5 = a4 >= b4;
var r4a6 = a5 >= b5;
var r4a7 = a6 >= b6;
var r4b1 = b1 >= a1;
var r4b2 = base2 >= base1;
var r4b3 = b2 >= a2;
var r4b4 = b3 >= a3;
var r4b5 = b4 >= a4;
var r4b6 = b5 >= a5;
var r4b7 = b6 >= a6;
// operator ==
var r5a1 = a1 == b1;
var r5a2 = base1 == base2;
var r5a3 = a2 == b2;
var r5a4 = a3 == b3;
var r5a5 = a4 == b4;
var r5a6 = a5 == b5;
var r5a7 = a6 == b6;
var r5b1 = b1 == a1;
var r5b2 = base2 == base1;
var r5b3 = b2 == a2;
var r5b4 = b3 == a3;
var r5b5 = b4 == a4;
var r5b6 = b5 == a5;
var r5b7 = b6 == a6;
// operator !=
var r6a1 = a1 != b1;
var r6a2 = base1 != base2;
var r6a3 = a2 != b2;
var r6a4 = a3 != b3;
var r6a5 = a4 != b4;
var r6a6 = a5 != b5;
var r6a7 = a6 != b6;
var r6b1 = b1 != a1;
var r6b2 = base2 != base1;
var r6b3 = b2 != a2;
var r6b4 = b3 != a3;
var r6b5 = b4 != a4;
var r6b6 = b5 != a5;
var r6b7 = b6 != a6;
// operator ===
var r7a1 = a1 === b1;
var r7a2 = base1 === base2;
var r7a3 = a2 === b2;
var r7a4 = a3 === b3;
var r7a5 = a4 === b4;
var r7a6 = a5 === b5;
var r7a7 = a6 === b6;
var r7b1 = b1 === a1;
var r7b2 = base2 === base1;
var r7b3 = b2 === a2;
var r7b4 = b3 === a3;
var r7b5 = b4 === a4;
var r7b6 = b5 === a5;
var r7b7 = b6 === a6;
// operator !==
var r8a1 = a1 !== b1;
var r8a2 = base1 !== base2;
var r8a3 = a2 !== b2;
var r8a4 = a3 !== b3;
var r8a5 = a4 !== b4;
var r8a6 = a5 !== b5;
var r8a7 = a6 !== b6;
var r8b1 = b1 !== a1;
var r8b2 = base2 !== base1;
var r8b3 = b2 !== a2;
var r8b4 = b3 !== a3;
var r8b5 = b4 !== a4;
var r8b6 = b5 !== a5;
var r8b7 = b6 !== a6;
