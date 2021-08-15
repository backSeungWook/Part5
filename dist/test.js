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
returnAny("리턴값");
//unknown
var maybe;
//const aNumber: number = maybe
if (maybe === true) {
    //컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
    var aBoolean = maybe;
    //타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고 사용할 수 도 없다.
    //const aString: string = baybe ERR
}
if (maybe === "string") {
    var aString = maybe;
    //const aBoolean: string = baybe ERR
}
//never
function error(message) {
    throw new Error(message);
}
function fail(message) {
    return error("failed");
}
function infiniteLoop() {
    while (true) { }
}
//void
function returnVoid(message) {
    console.log(message);
    return; // 생략 가능
}
returnVoid('리턴 없음');
