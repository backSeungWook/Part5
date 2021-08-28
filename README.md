# Part5 TypeScript

## TypeScript 설치
1. npm 통해서 설치  
npm i typescript -D  
웹브라우저에서 직접적으로 동작하지 않으므로 -D 옵션  
-D: 개발용 의존성 패키지 설치

## TypeScriptCompiler
1. tsconfig.json 파일 생성  
npx tsc --init
1. TypeScript 컴파일 명령어
    1. `npx tsc  test.ts`
    1. 자동 컴파일(왓치 모드) : `npx tsc -w`

## TypeScript
structural type system - 구조가 같으면, 같은 타입.

---
</br>

## TypeScript 자료형
### primitive Type  
`number, string, boolean, bigint, symbol, null, undefined`  

기존 JavaScript 자료형 + `Any, Void, Never, Unknown, Enum , Tuple`  
자료형 선언시 Wrapper(Object형)인 String ,Number 등 이 아닌 primitive 타입인  
소문자 형태로 선언 해줘야 함.  
```js
//<자료형 선언>  
let isDone: boolean  
//or  
const test:string = "테스트" //등등 표기 가능
```

- number  
10,16,2,8 진수 / NaN / 1_000_000 과 같은 표기 가능
- string  
`Template String` 가능  
ex)  
let text: string = \` 글자값 입력 데이터 이름` ${name}` 입니다. \`  
` `` ` 둘러싼 후 변수대입은 ${변수}
- Symbol  
new Symbol로 사용할 수 없음.  
Symbol을 함수로 사용해서 symbol 타입 생성
프리미티브 타입(primitive Type)의 값을 담아서 사용  
고유하고 수정불가능한 값으로 만들어줌. `주로 접근을 제어하는데 쓰는 경우가 많다.`
  ```js
  const sym = Symbol()
  const obj ={
    [sym]:"value"
  }
  console.log(obj[sym])//=>value
  ```
- null or undefined
  type | 설명 | typeof
  --|--|--|
  null | 무언가가 있는데 아직 사용할 준비가 덜 된 상태</br>null 타입은 null 값만 가질수 있음. | `object`
  undefined | 무언가가 아예 준비가 안된 상태 | `undefined`
- object  
`primitive type 이 아닌것`을 나타내고 싶을 때 사용하는 타입
- Array  
원래 자바스크립트에서 array는 객체  
  ```js
  //선언 방법  
  let list: number[] = [1,2,3]
  ```

- Tuple  
선언 방식에 맞게 배열에 집어 넣어야 함  
(순서,배열 길이에 맞게 들어가야 함.)  
  ```js
  //선언 방법  
  let x: [string,number] 
  x = ["string",10]
  x = ["string",10,0] // ERR
  x = [10,"string"] // ERR
  ```

- any  
어떤 타입이든 들어올수 있는 자료형  
최대한 쓰지(타입 안전성) 않게 하는게 핵심.

- unknown
3.0버전부터 지원
any와 같이 아무거나 할당할 수 있다
컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나,
타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고 사용할 수 도 없다.
사용 전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에서 사용.

- never(리턴에 사용)
모든 타입의 subtype이며 모든 타입에 할당 가능  
never에는 그 어떤 것도 할당 할 수 없음.(any 포함)  
잘못된 타입을 넣는 실수를 막고자 할 때 사용.
- void
리턴타입 
---
</br>

## 타입 호환성
1. 타입이 같거나 서브 타입인 경우(`공변`) => 할당 가능
1. `함수의 매개변수` 타입만 같거나 슈퍼타입인 경우('반병') 할당 가능  
슈퍼타입은 상속 시 바로 위의 클래스를 의미

## 타입별칭  
primitive, Union type, Tuple, Function 등에서 사용가능
```js
//ex
type StringOrNumber: string | number
let another: StringOrNumber =0
another ='StringOrNumber'
//or
type PersonTuple: [string , number]
let another2: PersonTuple =['String',100]
```
---
</br>

## tsconfig.json
http://json.schemastore.org/tsconfig  
최상위 프로퍼티  
- compileOnSave(vs 2015 or TypeScript 1.8.4이상 atom-typescript 플러그인)  
: `"compileOnSave":true` => 파일을 저장 하면 컴파일을 하겠다.(default false)  
- extends(TypeScript 2.0 이상)  
: `"extends":"경로.json"` => 지정된 json 파일을 불러옴.  
github : tsconfig/bases에 extends 할 수 있는 json 경로들이 있음.  

- 우선 순위 files > exclude > include  
files, include, exclude에 설정이 없으면 전부다 컴파일  

  - files : 상대, 절대 경로의 리스트 배열  
  - include : * 사용하여 .ts / .tsx. .d .ts.만 컴파일에 포함 하여 컴파일  
  - exclude : 제외 할 파일(files에 등록된 파일은 제외 안됨.)  
    기본 값 : node_modules,bower_components,jspm_packages,<outDir>  
    outDir은 항상 제외
- references
- compileOptions
### compileOptions
typeRoots , types TypeScript 2.0 부터 사용 가능해진 내장 type definition 시스템  
- typeRoots: 설정을 안하면 node_modules/@types 라는 모든 경로를 찾아서 사용.  
  typeRoots 지정하면 배열 안에 들어있는 경로들 아래서만 가져옵니다.
- types: 배열 안의 모듈 혹은 ./node_modules/@types/ 안의 모듈 이름에서 찾아옵니다.  
[] 빈 배열을 넣는다는건 이 시스템을 이용하지 않겠다는 것입니다.  

  `typeRoots 와 types 를 같이 사용하지 않습니다.`

- target: 빌드의 결과물을 버전 지정 기본값은 es3.

- lib: 기본 type definition 라이브러리를 지정 lib를 지정 하지 않으면  
target 이 'es3' 이면, 디폴트로 lib.d.ts  
target 이 'es5' 이면, 디폴트로 dom, es5, scripthost   
target 이 'es6' 이면, 디폴트로 dom, es6, dom.iterable, scripthost 를 사용  
​lib 를 지정하면 지정 된 라이브러리들만 사용하니다.

- outFile,rootDir tsconfig.json 속성 값 참조.
---
</br>

## Interfaces
- optional property  
  1. `?` : 변수뒤에 ? 붙었을 때는 이 매개 변수 로 받을 수도 있고 안받을수도 있다.
  1. [index] : 이 변수에는 어떤한 변수명이 들어와도 상관하지 않겠다  
  ex)`[index: string]` : any : `index`안에는 값이 string배열이기 때문에 여러개의 변수가 들어올수 있음  
  또한 데이터는 any이기 때문에 어떠한 형태로도 들어올수 있다.
      ```ts
      interface Person3{
        name: string,
        age?:number //age라는 값이 있을 수도 없을수도 있을 때
        [index: string]: any // array 구현 방법 : [index: number]: string
      }
      const p31:Person3=
      {
        name: "Name",
        age: 30
      }
      const p32:Person3=
      {
        name: "Name2",
        systers:['Sung',"Chan"],
        foather:p31
      }
      ```
- 내장 함수
인터베이스 안에 함수를 내장.
  ```ts
  //ex)
  interface Person4{
    name: string,
    age:number,
    hello(): void
    
  }
  //함수구현 사용법1
  const p41: Person4 = {
    name: 'Mark2',
    age:30,
    hello: function(): void{
      console.log(`안녕하세요P4! ${this.name} 입니다.`)
    }
  }
  //함수구현 사용법2
  const p42: Person4 = {
    name: 'Mark2',
    age:30,
    hello(): void{
      console.log(`안녕하세요P4! ${this.name} 입니다.`)
    }
  }
  ```
- 클래스
객체지향 OOP 구현 가능 생성 및 활용 예제는 interface.ts 예제 확인.

- 상속
interface.ts 상속 예제 확인.

- 함수 인터페이스
  ```ts
  interface HelloPerson{
    (name: string,age?: number): void
  }

  //에러 발생 함수가 (name: string,age?: number) 형태가 아니기 때문
  //helloPerson(name: string, age?: number | undefined): void
  const helloPerson: HelloPerson = function(name: string, age: number)
  {
    console.log(`안녕하세요! ${name} 입니다.`)
  }
  ```

- readonly : `데이터를 지정 후 변경 시킬 수 없음` (Java final == readonly)

- Declaration Merging 기능은 type alias에서는 불가능 하고 인터페이스에서 만 가능  
Declaration Merging: 인터페이스의 이름이 같으면 같은 인터페이스안에 있는 type은 합쳐서 사용 할 수 있음

---
</br>

## CLASS
▷ OOP를 위한 초석이며 사용자가 만드는 타입의 일종 es6 부터 사용가능
- 이름은 보통 대문자로 시작한다.
- new 키워드를 사용하여 object를 만들수 있다.
- constructor(생성자)를 이용하여 object를 생성하면서 값을 전달 할 수 있음.
- 생성자에서 this 키워드를 사용하여 해당 object를 가리킬 수 있다.
- es5로 컴파일 시 function 으로 변경된다.
### ▷ constructor(생성자)
생성자에서는 async(비동기 함수)를 설정 할 수 없음.

### ▷ initialize(초기화)
키워드 : !  
ex) `name!:string => 나중에 초기화 시키겠다. //(name:string => ERR)`

### ▷ 접근 제어자(Access Modifiers)
생성자에서 접근제어자 부여 시 this.age = age 와 동일 
키워드 | 설 명 |  |
--|--|--
public | 외부에서 호출 가능 | 기본값
private | 외부에서 호출 불가능 | 변수 앞에 _</br>(언더바)
protected|상속받은 클래스에서만||


### ▷ Set or Get
```ts
class SetGetPerson{
  public constructor(public name: string, private age: number){}
  //get
  get getName(){
    return this.name
  }

  set setName(n: string){
    this.name=n
  }
}
const sgp1 = new SetGetPerson("SetGet",0)
console.log(sgp1.getName)
sgp1.setName = "Update"
console.log(sgp1.getName)
```

### ▷ 개체데이터 동적 할당(index)
```ts
class Students{
  [index: string]: string
  //=> 값 2개만 들어와야 한다면 [index: string]: string
  //대신 [index: string]: "M" | "F"
}

const a = new Students
a.mark = "male"
a.alex = "female"
```

### ▷ static (Java static 개념과 동일)
---
### ▷ 추상화(Abstarct) 클래스
new 키워드 사용하여 생성 할 수 없음  
추상화 클래스를 상속 받아 추상화 클래스들을 구현 해야 함.

## Generics
어떠한 클래스 혹은 함수에서 사용할 타입을 그 함수나 클래스를 사용할 때 결정하는 프로그래밍 기법
참고 문헌 - https://hyunseob.github.io/2017/01/14/typescript-generic/
```ts
//기본 문법
function helloGeneric<T>(message: T): T{
  return message
}

//function helloGeneric<"Mark">(message: "Mark"): "Mark"
console.log(helloGeneric('Mark'))
//function helloGeneric<0>(message: 0): 0
console.log(helloGeneric(0))
let tboolean:boolean = true
//function helloGeneric<true>(message: true): trGenericsue
console.log(helloGeneric(tboolean))

//Array
function helloArray<T>(message: T[]):T{
  return message[0]
}

//Tuple
function helloTuple<T,K>(message:[T,K]):T{
  return message[0]
}

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
```
### Generics Extends
제네릭에서의 Extends 클래스의 Extends와는 조금 다른 개념.
extends string | number 지정 하면 string , number 형태의 값만 넣을 수 있음.
```ts
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

//'boolean' 형식의 인수는 'string | number' 
//형식의 매개 변수에 할당될 수 없습니다.
//new PersonExtends(true) ERR 발생 
```
### keyof & type lookup System
`컴파일에서 Type을 적절히 찾아 낼 수 있는 방식.`  
keyof : 해당 개체의 Key 값이 유니온 형태로 반환  
Ex) IPersonLookup 의ipName / ipAge
```ts
interface IPersonLookup{
  ipName: string,
  ipAge: number
}

const lookupPerson: IPersonLookup = {
  ipName:"Mark",
  ipAge:30
}

//IPersonLookup[Keys] 
//==> IPersonLookup["name" | "age"] 
//==> IPersonLookup["name"]  |IPersonLookup ["age"] 
//==> string | number

function getProp<T, K extends keyof T>(obj:T, key:K): T[K]{
  return obj[key]
} //  `string | number 아닌` 정확한 유니온 형태로 반환 Ex) ipName ipAge

console.log(getProp(lookupPerson2,"ipName2"))

function setProp<T, K extends keyof T>(obj:T,key:K,value: T[K]):void {
  obj[key] = value;
}
```
