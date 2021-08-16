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