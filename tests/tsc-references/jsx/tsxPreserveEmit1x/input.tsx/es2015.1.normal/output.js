//@Filename: test.tsx
// Should emit 'react-router' in the AMD dependency list
const React1 = require('react');
const ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var routes1 = /*#__PURE__*/ React.createElement(Route, null);
var M;
(function(M) {
    var X;
    M.X = X;
})(M || (M = {
}));
(function(M) {
    // Should emit 'M.X' in both opening and closing tags
    var y = /*#__PURE__*/ React.createElement(X, null);
})(M || (M = {
}));
//@module: amd
//@jsx: preserve
//@target: ES5
//@Filename: react.d.ts
export { };