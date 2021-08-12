import { type } from "os";

function sayHello(message) {
    console.log(message);
}

sayHello("Hello");
//tsc => typescript compiler .ts => .js
//tsc main.ts


//***JavaScript Versions
//ES5(supported by all browsers)
//ES6(2015) Arrows,classes,template strings,let,const,[...array]
//ES7 ES2016 Array.prototype.includes
//ES8 ES2017
//**typescript tüm versionları ES5 e dönüştürür

const myname = "simge";
const myWord = `my name is ${myname}` //template string yapısı js de yok

const myArray = ["coding", "with", "ts"];
const copyArray = [...myArray];


//***TYPES

/*
* @typeAnnotations:type
* Any
* Number
* String
* Boolean
* Array string[] , number[] , any[]
* Enum
* Tuple [type1,type2]
* Unknown
* TYPE INFERENCE ?
*/

//Static Typing
let x = "Simge";
//x = 5;  //HATA VERİR - hata js derlemesini engellemez çünkü js dinamic typing //typescript static typing kullanır //ts de değişkenin tipini program içinde değiştiremeyiz
x = "atlıhan"; //string olarak farklı tipe dönüştürülebilir

//Any
let y;
y = "Simge";

//tip any verilirse program içinde diğer tiplere dönüşebilir
let a: any;
a = 5;
a = "any";
a = "true;"

//typeAnnotations
let z: string; //ilk değer ataması yapılmadığı için tip belirtilmeli
z = "sibel";

//Number
let age = 55; //let age:number=55; ekstra tip belirtmeye gerek yok. //typescript de type inference var

//BOOLEAN
let b: boolean;
a = false;
//if(-1) //false

//ARRAY
//1-string
// let yourArray: string[]; //sadece string arrayi
// yourArray = ["a", "b", "c"];
//2-number
// let yourArray:number[];  //sadece number arrayi
// youArray=[1,2,3];
//3-any
let yourArray: any[]; //farkli type lar verilebilir
yourArray = [2, "simge", true];

//ENUM
enum Color { Purple, Black, Blue, Red };
let bgColor = Color.Black;
bgColor = Color.Blue;

//TUPLE
let error: [string, number];
error = ["Not Found", 404];

//UNKNOWN
let f: boolean = true;

let d: any;
f = d;

let notSure: unknown;
notSure = "Simge";
notSure = 12;
notSure = false;
//f = notSure; //Hata

//***TYPE ASSERTIONS 
let message;
message = "SİMGE";
const newMessage = (<string>message).toLowerCase;
const newnewMessage = (message as string).toLowerCase;
console.log(newMessage);

//***OBJECT TYPE 
//typescript obje tipi

//1
let user: {
    name: string;
    age: number;
    favoriteColor: string; //obje tipi belirtilmek zorunda değil değer ataması yapılmadığında
} = {
    name: "Simge",
    age: 21,
    favoriteColor: "black"
}


//2
//değer ataması yapılmamış tip belirtilmeli
let user2: {
    name: string;
    age: number;
    favoriteColor: string;
}
user2 = {
    name: "Simge",
    age: 21,
    favoriteColor: "black"
}

//***UNION TYPE

/*
 * Union Type
 * (type1|type2|type3|..|typeN)
 *  Literal Type
*/

type Colorr = {
    name: "black" | "white";
    hex: string;
};

type user3 = {
    name: string;
    age: number | string; //birden fazla tip alabilir
    //literal type
    role: "admin" | "user"; //spesific string
    color: Colorr;
};

let newUser: user3;
newUser = {
    name: "Simge",
    age: 21,
    role: "admin",
    color: {
        name: "black",
        hex: "#000"
    }
}

/*
 * Functions
 * Default , Optional Params
*/

const add = (num1: number, num2: number): number => {
    console.log(num1 + num2);
    return num1 + num2;
};

add(2, 3);

//OPTIONAL PARAMETER - lastname?:string , DEFAULT PARAMETER - lastname="Öztürk"

//1
const logUser = (firstName: string | number, lastName = "Atlıhan") => { //lastaname - optional parameter
    console.log(firstName + " " + lastName);
};
logUser("Simge");

//2

type ColorX = {
    name: string;
    hex: string;
}

const log = (color: ColorX) => {
    console.log(color);
};

log({
    name: "black",
    hex: "#000",
});


//***INTERFACES

interface Person {
    name: string;
    age: number;
}

//Person daki özellikleri Employee üzerine ekler
interface Employee extends Person {
    readonly empCode: number; //readonly varsa empCode değiştirilemez
}

let newEmployee: Employee; //interface tip olarak kullanılır

newEmployee = {
    name: "simge",
    age: 21,
    empCode: 22
}

//getSalary method - implement

interface IEmployeee {
    empCode: number;
    name: string;
    age: number;
    getSalary: (number) => number; //method
}

class Employeee implements IEmployeee {
    empCode: number;
    name: string;
    age: number;

    constructor(empCode: number, name: string, age: number) {

    }

    getSalary = (empCode: number) => {
        return 10000; //maaş değeri döndürür
    };
}

//instance
let newEmployeee = new Employeee(1, "Simge", 21);
console.log(newEmployeee.getSalary(1));







