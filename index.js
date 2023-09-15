//alert("hello world")
//document.write("Hello Septa People ")
//console.log("Hi guys, its cool to learn js")

//login code
console.log("hey")

var name ="Jamiu";
var name ="Hon";

//comment

const newName ="Jamiu";
const Place = "Yaba";
const School = "Unilorin";

console.log("My name is" + " " + newName + "," + "I live at" + " " + Place + "," + "I attended" + " " + School );

//Assignment


//var
//var (Function-Scoped):
//Variables declared with var are function-scoped, meaning they are only accessible within the function in which they are defined. If declared outside of any function, they become globally scoped.
//var variables are hoisted to the top of their containing function or global scope. This means you can use a variable before it's declared, but it will be initialized with undefined.
//var variables can be re-declared within the same scope, which can lead to unexpected behavior. E.g
function example() {
    var x = 10;
    if (true) {
      var x = 20; // This re-declares the same variable.
    }
    console.log(x); // Outputs 20
  }  

//Let
//let (Block-Scoped):

//Variables declared with let are block-scoped, which means they are limited in scope to the block (e.g., within a loop, conditional statement, or function) in which they are defined.
//let variables are also hoisted to the top of their containing block, but they are not initialized. If you try to use a let variable before it's declared, you'll get a ReferenceError.
//Unlike var, let variables cannot be re-declared within the same block. E.g
function example() {
    let x = 10;
    if (true) {
      let x = 20; // This is a different variable from the outer x.
    }
    console.log(x); // Outputs 10
  }
  

//Const
//const (Block-Scoped, Immutable):

//Variables declared with const are also block-scoped.
//const variables must be initialized when declared, and their values cannot be changed after initialization. They are effectively constants.
//Like let, const variables cannot be re-declared within the same block. E.g
function example() {
    const x = 10;
    x = 20; // This will result in an error because you can't reassign a const variable.
  }  


//Data type
//JavaScript has several data types, which can be categorized into two main categories: primitive data types and reference data types.

//Primitive Data Types:

//1. Undefined: Represents a variable that has been declared but has not been assigned a value. E.g
let x;
console.log(x); // Outputs: undefined

//2. Null: Represents the intentional absence of any object value. E.g
let y = null;
console.log(y); // Outputs: null

//3. Boolean: Represents a true or false value. E.g
let isTrue = true;
let isFalse = false;

//4. Number: Represents both integer and floating-point numbers. E.g
let num1 = 42;
let num2 = 3.14;

//5. String: Represents a sequence of characters enclosed in single or double quotes. E.g
let greeting = "Hello, World!";

//6. Symbol (ES6): Represents a unique and immutable value, often used as object property keys. E.g
const uniqueSymbol = Symbol("description");


//Reference Data Types:

//1. Object: Represents a collection of key-value pairs, where the keys are strings (or Symbols) and the values can be of any data type, including other objects. E.g
let person = {
    name: "John",
    age: 30,
  };  

//2. Array: Represents an ordered collection of values, which can be of mixed data types. E.g 
let numbers = [1, 2, 3, 4, 5];

//3. Function: Represents a reusable block of code that can be called with arguments and can return a value. E.g 
function add(a, b) {
    return a + b;
  }
  
//4. Date: Represents a specific point in time, including date and time components. E.g
let currentDate = new Date();

//5. RegExp (Regular Expression): Represents a pattern used for matching character combinations in strings. E.g
let pattern = /abc/;

//6. Map (ES6): Represents a collection of key-value pairs with iterable methods for manipulation. E.g 
let myMap = new Map();
myMap.set("name", "Alice");

//7. Set (ES6): Represents a collection of unique values with iterable methods. E.g
let mySet = new Set([1, 2, 2, 3, 4, 4]);
