"use strict";
function hello1(person) {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}
const p1 = {
    name: "Mark",
    age: 39
};
hello1(p1);
function hello2(person) {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}
const p2 = {
    name: "Anna"
};
hello2(p2);
function hello3(person) {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}
const p31 = {
    name: "Name",
    age: 30
};
//[index: string]` : any : `index`안에는 값이 string배열이기 때문에 여러개의 변수가 들어올수 있음  
//또한 데이터는 any이기 때문에 어떠한 형태로도 들어올수 있다.
const p32 = {
    name: "Name2",
    systers: ['Sung', "Chan"],
    foather: p31
};
const p41 = {
    name: 'Mark2',
    age: 30,
    hello: function () {
        console.log(`안녕하세요P4! ${this.name} 입니다.`);
    }
};
const p42 = {
    name: 'Mark2',
    age: 30,
    hello() {
        console.log(`안녕하세요P4! ${this.name} 입니다.`);
    }
};
class Person {
    //생성자
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
}
const personClass = new Person("ClassEx");
personClass.hello();
const k = {
    name: "백승욱",
    city: "전주",
    //IPerson2에 age? 이기 때문에 작성안해줘도 댐.
    messge() {
        console.log(`안녕하세요 ${this.name} 입니다. ${this.city}에 거주 중입니다.`);
    }
};
k.messge(); //k.name / k.age / k.city // messge()
const helloPerson = function (name) {
    console.log(`안녕하세요! ${name} 입니다.`);
};
helloPerson("HelloPerson age가 ? 이기 때문에 helloPerson 함수에서는 매개변수로 age가 올수도있고 없을수도 있다");
const p51 = {
    name: "readOnly",
    gender: "gender"
};
//p51.gender = "update" 에러 발생 한번 선언 후 변경을 시도하기 때문.
