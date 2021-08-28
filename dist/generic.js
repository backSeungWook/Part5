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
    return message.length;
}
let numlist = [1, 2, 3];
console.log(helloArray(numlist));
//Tuple
function helloTuple2(message) {
    return message[0];
}
console.log(helloTuple2(["213", 0]));
// -Generic Extends 예제
//T = string 과 number 만 가능 
//제네릭에서 변수 형태를 작은 단위로 지정.
//사용자가 최소한의 변수를 보고 값을 넣을 수 있게.
class PersonExtends {
    constructor(nameExtends) {
        this._nameExtends = nameExtends;
    }
}
new PersonExtends("213213");
new PersonExtends(213213);
const lookupPerson = {
    ipName: "Mark",
    ipAge: 30
};
//Ex IPersonLookup 의ipName / ipAge
//IPersonLookup[Keys] 
//==> IPersonLookup["name" | "age"] 
//==> IPersonLookup["name"]  |IPersonLookup ["age"] 
//==> string | number
function getProp(obj, key) {
    return obj[key];
} //  string | number 아닌 정확한 유니온 형태로 반환 Ex) ipName ipAge
console.log(getProp(lookupPerson, "ipName"));
function setProp(obj, key, value) {
    obj[key] = value;
}
