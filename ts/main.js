"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
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
var myname = "simge";
var myWord = "my name is " + myname; //template string yapısı js de yok
var myArray = ["coding", "with", "ts"];
var copyArray = __spreadArray([], myArray);
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
var x = "Simge";
//x = 5;  //HATA VERİR - hata js derlemesini engellemez çünkü js dinamic typing //typescript static typing kullanır //ts de değişkenin tipini program içinde değiştiremeyiz
x = "atlıhan"; //string olarak farklı tipe dönüştürülebilir
//Any
var y;
y = "Simge";
//tip any verilirse program içinde diğer tiplere dönüşebilir
var a;
a = 5;
a = "any";
a = "true;";
//typeAnnotations
var z; //ilk değer ataması yapılmadığı için tip belirtilmeli
z = "sibel";
//Number
var age = 55; //let age:number=55; ekstra tip belirtmeye gerek yok. //typescript de type inference var
//BOOLEAN
var b;
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
var yourArray; //farkli type lar verilebilir
yourArray = [2, "simge", true];
//ENUM
var Color;
(function (Color) {
    Color[Color["Purple"] = 0] = "Purple";
    Color[Color["Black"] = 1] = "Black";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Red"] = 3] = "Red";
})(Color || (Color = {}));
;
var bgColor = Color.Black;
bgColor = Color.Blue;
//TUPLE
var error;
error = ["Not Found", 404];
//UNKNOWN
var f = true;
var d;
f = d;
var notSure;
notSure = "Simge";
notSure = 12;
notSure = false;
//f = notSure; //Hata
//***TYPE ASSERTIONS 
var message;
message = "SİMGE";
var newMessage = message.toLowerCase;
var newnewMessage = message.toLowerCase;
console.log(newMessage);
//***OBJECT TYPE 
//typescript obje tipi
//1
var user = {
    name: "Simge",
    age: 21,
    favoriteColor: "black"
};
//2
//değer ataması yapılmamış tip belirtilmeli
var user2;
user2 = {
    name: "Simge",
    age: 21,
    favoriteColor: "black"
};
var newUser;
newUser = {
    name: "Simge",
    age: 21,
    role: "admin",
    color: {
        name: "black",
        hex: "#000"
    }
};
/*
 * Functions
 * Default , Optional Params
*/
var add = function (num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
};
add(2, 3);
//OPTIONAL PARAMETER - lastname?:string , DEFAULT PARAMETER - lastname="Öztürk"
//1
var logUser = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Atlıhan"; }
    console.log(firstName + " " + lastName);
};
logUser("Simge");
var log = function (color) {
    console.log(color);
};
log({
    name: "black",
    hex: "#000"
});
var newEmployee; //interface tip olarak kullanılır
newEmployee = {
    name: "simge",
    age: 21,
    empCode: 22
};
var Employeee = /** @class */ (function () {
    function Employeee(empCode, name, age) {
        this.getSalary = function (empCode) {
            return 10000; //maaş değeri döndürür
        };
    }
    return Employeee;
}());
//instance
var newEmployeee = new Employeee(1, "Simge", 21);
console.log(newEmployeee.getSalary(1));
