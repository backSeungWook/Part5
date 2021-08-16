//interface
// - 기본 interface
interface Person1{
  name: string,
  age:number
}
function hello1(person: Person1): void{
  console.log(`안녕하세요! ${person.name} 입니다.`)
}

const p1:Person1=
{
  name: "Mark",
  age: 39
}
hello1(p1) 
// - 기본 interface END


// - ? interface
interface Person2{
  name: string,
  age?:number //age라는 값이 있을 수도 없을수도 있을 때
}

function hello2(person: Person2): void{
  console.log(`안녕하세요! ${person.name} 입니다.`)
}
const p2:Person2=
{
  name: "Anna"
}
hello2(p2) 
// - ? interface END


// - index interface
interface Person3{
  name: string,
  age?:number //age라는 값이 있을 수도 없을수도 있을 때
  
  [index: string]: any
}

function hello3(person: Person3): void{
  console.log(`안녕하세요! ${person.name} 입니다.`)
}

const p31:Person3={
  name: "Name",
  age: 30
}
//[index: string]` : any : `index`안에는 값이 string배열이기 때문에 여러개의 변수가 들어올수 있음  
//또한 데이터는 any이기 때문에 어떠한 형태로도 들어올수 있다.
const p32:Person3={
  name: "Name2",
  systers:['Sung',"Chan"],
  foather:p31
}
// - index interface END


// - 내장 함수
interface Person4{
  name: string,
  age:number,
  hello(): void
  
}

const p41: Person4 = {
  name: 'Mark2',
  age:30,
  hello: function(): void{
    console.log(`안녕하세요P4! ${this.name} 입니다.`)
  }
}
const p42: Person4 = {
  name: 'Mark2',
  age:30,
  hello(): void{
    console.log(`안녕하세요P4! ${this.name} 입니다.`)
  }
}
//const p43: Person4 = {
//  name: 'Mark2',
//  age:30,
//  hello: (this:Person4): void => {
//    console.log(`안녕하세요P4! ${this.name} 입니다.`)//화살표 함수 이기 때문에 this를 못찾아냄.
//  }
//}
// - 내장 함수 END


// - 클래스
interface IPerson1{
  name:string,
  age?:number,
  
  hello():void
}

class Person implements IPerson1
{
  name: string
  age?: number | undefined
  //생성자
  constructor(name: string){
    this.name = name
  }
  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`)
  }
}

const personClass: IPerson1 = new Person("ClassEx")
personClass.hello();
// - 클래스 END


// - 상속
interface IPerson2{
  name: string,
  age?:number,
  messge():void
}

interface IKorean extends IPerson2{
  city: string
}

const k: IKorean ={
  name:"백승욱",
  city:"전주",
  //IPerson2에 age? 이기 때문에 작성안해줘도 댐.
  messge():void{
    console.log(`안녕하세요 ${this.name} 입니다. ${this.city}에 거주 중입니다.`)
  }
}
k.messge()//k.name / k.age / k.city // messge()
// - 상속 END


//- 함수 인터페이스
interface HelloPerson{
  (name: string,age?: number): void
}

const helloPerson: HelloPerson = function(name: string)
{
  console.log(`안녕하세요! ${name} 입니다.`)
}
helloPerson("HelloPerson age가 ? 이기 때문에 helloPerson 함수에서는 매개변수로 age가 올수도있고 없을수도 있다")
// - 함수 인터페이스 END


// - readonly(키워드)
//readonly : 한번 선언 후 변경 되지 않을 때 Java final == readonly
interface Person5{
  name: string,
  age?: number,
  readonly gender: string
}

const p51: Person5 = {
  name: "readOnly",
  gender: "gender"
}
//p51.gender = "update" 에러 발생 한번 선언 후 변경을 시도하기 때문.
