function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
}
require("./mod1").K, exports.K = (function() {
    "use strict";
    var Constructor, protoProps, staticProps;
    function K() {
        !function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }(this, K);
    }
    return protoProps = [
        {
            key: "values",
            value: function() {}
        }
    ], _defineProperties((Constructor = K).prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), K;
})();
