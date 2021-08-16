"use strict";
//Generic 제네릭
function helloGeneric(message) {
    return message;
}
//function helloGeneric<"Mark">(message: "Mark"): "Mark"
console.log(helloGeneric('Mark'));
//function helloGeneric<0>(message: 0): 0
console.log(helloGeneric(0));
let tboolean = true;
//function helloGeneric<true>(message: true): true
console.log(helloGeneric(tboolean));
function helloTuple(message) {
    return message[0];
}
console.log(helloTuple(["Test", 5, 10.5]));
const GenericInterface2 = (msg) => msg;
//===
const GenericInterface22 = (msg) => {
    return msg;
};
//Class 적용
class ClassGeneric {
    constructor(name, age) {
        this._age = age;
        this._name = name;
    }
}
//Araay
function helloArray(message) {
    return message;
}
let numlist = [1, 2, 3];
console.log(helloArray(numlist));
