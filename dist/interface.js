"use strict";
function hello1(person) {
    console.log("\uC548\uB155\uD558\uC138\uC694! " + person.name + " \uC785\uB2C8\uB2E4.");
}
var p1 = {
    name: "Mark",
    age: 39
};
hello1(p1);
function hello2(person) {
    console.log("\uC548\uB155\uD558\uC138\uC694! " + person.name + " \uC785\uB2C8\uB2E4.");
}
var p2 = {
    name: "Anna"
};
hello2(p2);
function hello3(person) {
    console.log("\uC548\uB155\uD558\uC138\uC694! " + person.name + " \uC785\uB2C8\uB2E4.");
}
var p31 = {
    name: "Name",
    age: 30
};
//[index: string]` : any : `index`안에는 값이 string배열이기 때문에 여러개의 변수가 들어올수 있음  
//또한 데이터는 any이기 때문에 어떠한 형태로도 들어올수 있다.
var p32 = {
    name: "Name2",
    systers: ['Sung', "Chan"],
    foather: p31
};
var p41 = {
    name: 'Mark2',
    age: 30,
    hello: function () {
        console.log("\uC548\uB155\uD558\uC138\uC694P4! " + this.name + " \uC785\uB2C8\uB2E4.");
    }
};
var p42 = {
    name: 'Mark2',
    age: 30,
    hello: function () {
        console.log("\uC548\uB155\uD558\uC138\uC694P4! " + this.name + " \uC785\uB2C8\uB2E4.");
    }
};
var Person = /** @class */ (function () {
    //생성자
    function Person(name) {
        this.name = name;
    }
    Person.prototype.hello = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694! " + this.name + " \uC785\uB2C8\uB2E4.");
    };
    return Person;
}());
var personClass = new Person("ClassEx");
personClass.hello();
var k = {
    name: "백승욱",
    city: "전주",
    //IPerson2에 age? 이기 때문에 작성안해줘도 댐.
    messge: function () {
        console.log("\uC548\uB155\uD558\uC138\uC694 " + this.name + " \uC785\uB2C8\uB2E4. " + this.city + "\uC5D0 \uAC70\uC8FC \uC911\uC785\uB2C8\uB2E4.");
    }
};
k.messge(); //k.name / k.age / k.city // messge()
var helloPerson = function (name) {
    console.log("\uC548\uB155\uD558\uC138\uC694! " + name + " \uC785\uB2C8\uB2E4.");
};
helloPerson("HelloPerson age가 ? 이기 때문에 helloPerson 함수에서는 매개변수로 age가 올수도있고 없을수도 있다");
var p51 = {
    name: "readOnly",
    gender: "gender"
};
//p51.gender = "update" 에러 발생 한번 선언 후 변경을 시도하기 때문.
