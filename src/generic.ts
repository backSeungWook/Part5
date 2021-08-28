//Generic 제네릭
function helloGeneric<T>(message: T): T{
  return message
}

//function helloGeneric<"Mark">(message: "Mark"): "Mark"
console.log(helloGeneric('Mark'))
//function helloGeneric<0>(message: 0): 0
console.log(helloGeneric(0))
let tboolean:boolean = true
//function helloGeneric<true>(message: true): true
console.log(helloGeneric(tboolean))

function helloTuple<T,K,S>(message:[T,K,S]):T{
  return message[0]
}
console.log(helloTuple(["Test",5,10.5]))

//interface 활용하여 함수에 적용
interface GenericInterface{
  <T>(message: T):T
}
const GenericInterface2:GenericInterface = <T>(msg:T):T=> msg
//===
const GenericInterface22:GenericInterface = <T>(msg:T):T=> {
  return msg
}

//Class 적용
class ClassGeneric<T,K>{
  private _name: T
  private _age: K
  constructor(name:T, age:K)
  {
    this._age = age
    this._name = name
  }
}

//Araay
function helloArray<T>(message: T[]):number{
  
  return message.length
}
let numlist: number[] = [1,2,3]
console.log(helloArray(numlist))

//Tuple
function helloTuple2<T,K>(message:[T,K]):T{
  return message[0]
}
console.log(helloTuple2(["213",0]))

// -Generic Extends 예제

//T = string 과 number 만 가능 
//제네릭에서 변수 형태를 작은 단위로 지정.
//사용자가 최소한의 변수를 보고 값을 넣을 수 있게.
class PersonExtends<T extends string| number>{
  private _nameExtends: T

  constructor(nameExtends:T ){
    this._nameExtends = nameExtends
  }
}

new PersonExtends("213213")
new PersonExtends(213213)

//ERR 'boolean' 형식의 인수는 'string | number' 
//형식의 매개 변수에 할당될 수 없습니다.
//new PersonExtends(true) 

// - keyof & type lookup System
interface IPersonLookup{
  ipName: string,
  ipAge: number
}

interface IPersonLookup2{
  ipName: string,
  ipAge: number,
  ipName2: string
}

const lookupPerson: IPersonLookup = {
  ipName:"Mark",
  ipAge:30
}

const lookupPerson2: IPersonLookup2 = {
  ipName:"Mark",
  ipAge:30,
  ipName2:"234324"
}

type Keys = keyof IPersonLookup //해당 개체의 Key 값이 유니온 형태로 반환
//Ex IPersonLookup 의ipName / ipAge

//IPersonLookup[Keys] 
//==> IPersonLookup["name" | "age"] 
//==> IPersonLookup["name"]  |IPersonLookup ["age"] 
//==> string | number

function getProp<T, K extends keyof T>(obj:T, key:K): T[K]{
  return obj[key]
} //  string | number 아닌 정확한 유니온 형태로 반환 Ex) ipName ipAge

console.log(getProp(lookupPerson2,"ipName2"))

function setProp<T, K extends keyof T>(obj:T,key:K,value: T[K]):void {
  obj[key] = value;
}