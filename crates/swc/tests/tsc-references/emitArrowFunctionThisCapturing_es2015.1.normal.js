// @target:es5
var f1 = ()=>{
    this.age = 10;
};
var f2 = (x)=>{
    this.name = x;
};
function foo(func) {}
foo(()=>{
    this.age = 100;
    return true;
});
