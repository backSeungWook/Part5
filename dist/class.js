"use strict";
// - Class
class PersonClass {
    //생성자
    constructor(name) {
        this.name = name;
    }
}
const pc1 = new PersonClass("className");
console.log(pc1);
// - Class END
// - initialize(키워드 : !) or constructor(생성자)
class PersonClass2 {
    //생성자
    constructor(age) {
        if (age === undefined) {
            this.age = 0;
        }
        else {
            this.age = age;
        }
    }
}
const pc2 = new PersonClass2(30);
const pc3 = new PersonClass2();
console.log(pc3);
//- initialize(키워드 : !) or constructor(생성자) END
class PersonClass3 {
    //생성자
    constructor(age) {
        this.age = age;
    }
}
// - Get or Set
class SetGetPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //get
    get getName() {
        return this.name;
    }
    set setName(n) {
        this.name = n;
    }
}
const sgp1 = new SetGetPerson("SetGet", 0);
console.log(sgp1.getName);
sgp1.setName = "Update";
console.log(sgp1.getName);
// - Get or Set END
// - 싱글톤
class Singgle {
    constructor() { }
    static getInstance() {
        if (Singgle.instance === null) {
            Singgle.instance = new Singgle();
        }
        return Singgle.instance;
    }
}
Singgle.instance = null;
// - 싱글톤 END 
