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