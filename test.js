"use strict";
var _a;
var isDone = false;
var test = "\uD14C\uC2A4\uD2B8" + isDone;
console.log(test);
//Symbol
console.log(Symbol("foo") === Symbol("foo"));
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = "value",
    _a);
console.log(obj[sym]); //=>value
//object
var person = Object.create({
    name: 'Name',
    age: 39
});
//const person = Object.create(38) //primitive type 이므로 ERR
//Array
//let list: number[] = [1,2,3,"4"] 에러 발생 
//==>
var list = [1, 2, 3, "4"];
//Tuple
var x;
x = ["string", 10];
//x = ["string",10,0] // ERR
//x = [10,"string"] // ERR

//any
function returnAny(message) {
    console.log(message);
}
var any1 = returnAny("리턴값");


//unknown
