let score = "33";
console.log(typeof score); //output will be "string"
console.log(typeof score); //output will be "string"

let valueINumber = Number(score);
console.log(typeof valueINumber); //output will be "number"
console.log(valueINumber);

let a = undefined;
console.log(typeof a); //output will be "undefined"

let string = "3";
number = Number(string);
console.log(typeof number); //output will be 3

let b = "33abc";
console.log(typeof b); //output will be "string"
b = Number(b);
console.log(b);//output will be "NaN"
console.log(typeof b); //output will be "number"

let bool=true
console.log(Number(bool))  //output will be "1"

bool=false
console.log(Number(bool))

let isLoggedin=1
console.log(Boolean(isLoggedin)) //output will be "true"

isLoggedin=0
console.log(Boolean(isLoggedin)) //output will be "false"

console.log(Boolean("")) //output will be "false"

console.log(Boolean(" ")) //output will be "true"

console.log(Boolean("Bittu"))  //output will be "true"

let stringNumber=33
console.log(stringNumber) //output will be "33"
stringNumber=Number(stringNumber)
console.log(stringNumber) //output will be  33