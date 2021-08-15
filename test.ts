let isDone: boolean= false
const test:string = `테스트${isDone}`
console.log(test)


//Symbol
console.log(Symbol("foo") === Symbol("foo"))
const sym = Symbol()
const obj ={
  [sym]:"value"
}
console.log(obj[sym])//=>value

//object
const person = Object.create({
  name:'Name',
  age:39
})
//const person = Object.create(38) //primitive type 이므로 ERR

//Array
//let list: number[] = [1,2,3,"4"] 에러 발생 
//==>
let list: (number|string)[] = [1,2,3,"4"]

//Tuple
let x: [string,number] 
x = ["string",10]
//x = ["string",10,0] // ERR
//x = [10,"string"] // ERR

//any
function returnAny(message: any): any{
  console.log(message)
}

const any1 = returnAny("리턴값")

//unknown
declare const maybe: unknown

//const aNumber: number = maybe
if(maybe === true)
{
  //컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
  const aBoolean: boolean = maybe
  
  //타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고 사용할 수 도 없다.
  //const aString: string = baybe ERR
}

if(maybe === "string")
{
  const aString: string = maybe
  //const aBoolean: string = baybe ERR
}

//never
