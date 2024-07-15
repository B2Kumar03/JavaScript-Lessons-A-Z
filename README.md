# JavaScript-Lessons-A-Z

---

## Q.where can we run js code ?

javascript is a versatile language that can be run in various environments.Here are some common places where you can run js code

#### 1.Web Browsers

JS is primarilly used in web browsers to create interactive client-side functionality for web applications.You can write JS code in HTML files using the `<script>` tag or link to an external JS file .

#### 2.Node.js

Node.js is a JavaScript runtime environment that allows you to run JS on the server side .You can write JS code in `.js` files and excute them using Node.js.

#### 3.Desktop and Mobile Applications :

JS can be used to develop desktop and mobile applications using frameworks like`Electron ,React native,and Angular Mobile `.

#### 4.Server-Side Rendering:

JS can be used for server side rendering with frameworks like Next.js Gatsby, and Nuxt.js

#### 5 Databases

Some databases ,like MongoDB ,use JS as a query language .

#### 6.Game Development

JS can be used to develop games using frameworks like Phaser and Babylon.js.

#### 7. Command Line Tools

You can write JS code to create command-line tools and script using Node.js.
-- --

## JS Engines ?

- `V8` ,developed by Google used in Chrome and `Node.js Webkit` developed by Apple and used in Safari and other iOS web browsers

- `JavaScriptCore`(also called Notro),developed by Appple and used in Safari

- `Chakra` developed by Microsoft and used in Edge (althought Edhe has recently rebuilt using Chromium and the V8 engine)

## Variables ?
```
const accounId=1234
let accountEmail="bittu@gmail.com"
var accountPassword="1234"

// accounId=1234 //not allow Assignment to constant variable.

console.table([accounId,accountEmail,accountPassword])

```
There are two ways to declare variable in js `var` and `let`


- ##### var 
  - Prefer not to use var 
   because of issue in block scope and functional scope 

   ###### Block Scope 

   ```
   {
     var a=20;
   }
   console.log(a);
   if(true)
   {
    var b=10
   }
   console.log(b);//you can easly access b outside of block
   ```
- ##### let
  - let is block scoped and can be used in for 
    loop and if statement

- ##### const
    - const is block scoped and can be used in
        for loop and if statement

##### Note : If you are declare a variable in js without intialize any meaningful value it is intialize whith undefined value 

```
var a;
console.log(a);//undefined
```

# Data types 
  - ###### Defination : -
    In software programming data types refers to the type of a variables has an what type of mathematical, logical oprations can be applied without causing an error.

```
"use strict"  //treat all JS code as newer varsion

alert(3+3)   //we are using node js not browser //for more knowladge you can refer mdn document


let name="Bittu" //string 

let age=20 //Number

let isMarried=false //boolean


//null ==>standlon value
//undefined
//symbol
```

# Converation operation
- ###### Defination : -
                    In software programming conversion operation is a operation that convert the 
                    types of variable one data types to another data types

```
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
```





