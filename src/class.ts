// - Class
class PersonClass{
  name?:string
  //생성자
  constructor(name?: string){
    this.name=name
  }
}
const pc1 = new PersonClass("className");

console.log(pc1)
// - Class END


// - initialize(키워드 : !) or constructor(생성자)
class PersonClass2{
  //name!:string => 나중에 초기화 시키겠다.(name:string => ERR)
  age?:number

  //생성자
  constructor(age?:number)
  {
    if(age === undefined)
    {
      this.age = 0
    }else
    {
      this.age = age
    }
  }
}
const pc2 = new PersonClass2(30);
const pc3 = new PersonClass2();
console.log(pc3)
//- initialize(키워드 : !) or constructor(생성자) END

class PersonClass3{
  //생성자
  constructor(public age:number){  }
  //this.age = age 와 동일 생성자에서 접근제어자 부여
}

// - Get or Set
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
// - Get or Set END

// - 싱글톤
class Singgle{
  private static instance: Singgle | null = null
  public static getInstance(): Singgle{
    if(Singgle.instance === null)
    {
      Singgle.instance = new Singgle()
    }
    return Singgle.instance
  }
  private constructor(){}
}
// - 싱글톤 END 