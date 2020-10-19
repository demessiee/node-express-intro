# Unit 1-A Lecture:

## Lecture Overview

This lecture will cover the following topics:
 * What is Node.js
 * How to set up a local Node.js development environment
 * How to use the Node.js console
 * How to run a node.js file
 * The basics of ES6 JavaScript
 * How to create and export a node.js module using *module.exports*
 * How to import a node.js module you created using require()

It is recommended to follow along by making a project directory for this lecture and running the code samples:

```
mkdir lecture1A
cd lecture1A
```
## What is Node.js?

Node.js is a server-side platform built on Chrome's JavaScript engine. 

Here are some benefits of Node.js:
* Node.js allows you to develop server-side code using JavaScript
* Less context switching between the client code and server code since both use JavaScript
* Node.js APIs are asynchronous and event-driven, meaning they are non-blocking
* Lightweight, but still very fast for handling I/O

When should you not use Node.js:
* It is not advisable to use Node.js for CPU intensive applications.
* If you need to use multi-threading



## Setting up a Node.js environment

Complete the following steps to set up your local Node.js environment:

1. Download the latest LTS version of Node.js for your operating system from the official website: https://nodejs.org/en/download/
2. Run the *node -v* command and verify that the Node.js version prints out to confirm that your download was successful

```js
//example
$ node -v
14.9.0
> 2 + 2
4
```

## The Node.js Console (REPL)

Node.js comes with a console named REPL( Read-Evaluate-Print-Loop) that allows you to evaluate any JavaScript expressions and see the results instantly in the command line.

You can start the Node REPL, by running the following command in your terminal:

```
$ node
```

The command line prompt should change from a $ to a >. Now, you can run any JavaScript expressions you want. 

Try running some of the following expressions:

```
$ node
> 2 + 2
4
> 'Hello' + ' ' + 'World'
Hello World
> a = 5;
5
> b = 10;
10
> a + b;
15
> square = function(x){return x*x}
[Function: square]
>square(4)
16
```

As shown in the example above, variables and functions are stored in memory as long as the Node.js REPL stays open. 

You can close the REPL by running *Ctrl+D* or by typing *.exit*

## Running a Node.js file

If you haven't already, create a project directory for this lab and create a file named index.js in your project directory:

```
mkdir lecture1A
cd lecture1A
touch index.js
```

Next, open index.js with your favorite code editor and save the following code into the file:

```
console.log('Hello, World');
```

You can run your index.js file by running:
```
$ node index.js
Hello, World
```


In general, you can run a Node.js file from your working directory by running node followed by the filename:

```
node filename.js
```

To execute a file that is located outside of your working directory, you can provide a relative or absolute path:

```
node ./app/filename.js
node /var/www/app/filename.js
```

The .js extension is also optional

```
//this works too
node filename
```

If you specify a folder that includes an index.js file, node.js will default to executing the index.js file:

```
//these are equivalent
node .
node index.js

//these are equivalent
node /var/www/app
node /var/ww/app/index.js
```

## Knowledge Check 1

You are in folder `/home` and you have a file in `/home/src/myFile.js` that you want to run. What command is the correct way to run the file?

```
A. node myFile.js
B. node ./src
C. node ./src/myFile.js
D. node /src/myFile.js
```

## Review of ES6 JavaScript

ES6 JavaScript is a version of JavaScript that was created in 2015 to enhance JavaScript and add in many modern features that it was missing. Most web browsers support ES6 JavaScript today.

### Declaring Variables

There are three ways to declare a variable in ES6 JavaScript:

```js
let x = 1;
const y = 'hello';
var z = 3;
```

* var - use this for variables that need function-wide scope
    * can be redeclared
    * can be updated
    * functionally scoped
* const - use this for variables that stay constant
    * can not be redeclared 
    * can not be updated
    * scoped to the nearest block
    * must be initialized upon declaration
* let - use this for all other variables
    * can not be redeclared
    * can be updated
    * scoped to the nearest block


**Best Practice:** In general, you should use *let* for declaring your variables that need to be changed and *const* for declaring variables that need to stay constant. Avoid using *var* as it was created before ES6 JavaScript and can lead to mistakes due to its scope being function-wide automatically. Additionally, use camelCase to name variables.


### Scope

Scope defines where your variables are accessible. Scope is mainly defined by where your variable is declared but is also influenced by whether you are using *var*, *let*, or *const*.

Scope allows us to ensure that variables aren't accessible too far out of their initial context and allows us to reuse common variable names when they exist in separate scopes.

#### Global Scope

Global scope is when your variable is accessible throughout your entire file. When you open up an empty file, you are already in the global scope. If you declare a variable in the file outside of any functions or curly brace blocks, they will be globally scoped. This is true whether you use *var*, *let*, or *const*. It is best practice to avoid using globally scoped variables.


```js
let foo = 'hello';

function bar() {
  console.log(foo); //globally scoped variable 'foo' is accessible here as well as anywhere else on the page
}
```

#### Lexical Scope

Lexical scope is when inner functions have access to variables declared in outer functions. This is true whether you use *var*, *let*, or *const*.


```js

function bar() {
  let foo = 'hello';
  function baz() {
    console.log(foo); //foo is accessible here
    function qux() {
      console.log(foo); //foo is also accessible here
    }
  }
}

console.log(foo); // foo is NOT accessible here
```

#### Block Scope


Block Scope is when scope is accessible throughout the block that the variable is declared in. A block is indicated by a set of curly braces, such as in a function declaration, if statement declaration, or for loop declaration. Variables declared with *var* will have their scope accessible throughout the function block they are declared in, even if they are declared within a smaller block. Variables declared with *let* or *const* will only be accessible within the block they are declared in.

```js

function bar() {
  for (let i = 0; i < 10; i++) {
    console.log(i); //i is accessible anywhere within this for loop
    if (i === 5) {
      console.log(i); //i is still accessible here
      let flag = true;
    }
    console.log(flag); //flag is not accessible here since it is outside of the if statement block
  }
  console.log(i); //i is NOT accessible here as it is outside of the initial declaration block

  for (var j = 0; j < 10; j++) {
    console.log(j); //j is accessible anywhere within the bar function since it was declared with var
  }
  console.log(j); //j is accesssible here since it was declared with var
}

```
## Knowledge Check 2


```js
//A
function bar(){
    let foo = 3
    function baz(){
        //C
        for(let i = 0; i < 3; i++){
            //D
        }
    }
    //B


}


```
Where is the variable foo accessible? Select all that apply.

```
A. A
B. B
C. C
D. D
```

### Data Types

ES6 JavaScript has 6 data types:
* undefined - variables that are declared but uninitialized get assigned as undefined
* Boolean - for values that represent True or False
* Number - any numerical value including integers, floats, and negative numbers
* String - sequences of characters that represent text
* BigInt - used for numbers larger than 2^53
* Symbol - used for creating a unique value that will never be equal to anything else except its own reference (rarely used)


### Control Flow

#### If Statements

Here is the basic syntax for if statements in JavaScript.

```js
if (x < 10) {
  console.log('x is greater than 10');
} else if (x > 10) {
  console.log('x is less than 10');
} else {
  console.log('x is exactly 10');
}
```


#### Switch Statements

Here is the basic syntax for switch statements in JavaScript.

```js
switch (x){ //can switch on any expression
  case 1: //can be a number or string
    // code block
    break; //break exits out of the switch case
  case 2:
    // code block
    break;
  default:
  // default code block if none of the cases are met
}
```


#### For Loops
Here is the basic syntax for a for loop in JavaScript

```js
for (let i = 0; i < 10; i++) {
  //do something
}

```
#### While Loops


Here is the basic syntax for a while loop in JavaScript

```js
let i = 0;
while (i < 10) {
  //do something
  i++;
}

```

### Data Structures

#### Arrays

##### Creating an Array
```js
let arr = [1, 2, 3, 4, 5];
let statesArr = ['CA', 'NY', 'WA'];

```

##### Accessing an array index
```js
let arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
//prints 1

```

##### Updating an array index
```js
let arr = [1, 2, 3, 4, 5];
arr[0] = 42;
console.log(arr[0]);
//prints 42
```

##### Getting the length of an array

```js
let arr = [1, 2, 3, 4, 5];
console.log(arr.length);
//prints 5
```

##### Adding to the end of an array
```js
let arr = [1, 2, 3, 4, 5];
console.log(arr.length);
//prints 5
arr.push(42);
console.log(arr.length);
//prints 6

```

##### Slicing part of an array
```js
let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(0, 3); //slices from 0 index to 3rd index, non inclusive
console.log(slicedArr);
//prints(0,1,2)

```

##### Looping through an array with forEach()

```js
let arr = [1, 2, 3, 4, 5];
arr.forEach((x, i) => {
  console.log('value: ' + x, 'index: ' + i);
});
//prints
//value: 1, index: 0
//value: 2, index: 1
//value: 3, index: 2
//value: 4, index: 3
//value: 5, index: 4

```


#### Objects


##### Creating an Object

```js
let obj = { name: 'bob', age: 42 };

```


##### Accessing an Object property value

```js
let obj = { name: 'bob', age: 42 };
console.log(obj.name);
//prints bob
console.log(obj['name']); //alternative
//prints bob
console.log(obj.age);
//prints 42

```

**Additional Context**: obj['key'] syntax is useful if you want to use a variable as a key name

```js
let obj = { name: 'bob', age: 42 };

let keyName = 'bob';
console.log(obj[keyName]);
//prints bob

```

##### Edting an Object property value

```js
let obj = { name: 'bob', age: 42 };

obj.name = 'sally';
console.log(obj.name);
//prints sally
obj.age = 99;
console.log(obj.age);
//prints 99

```


##### Getting a list of object keys

```js
let obj = { name: 'bob', age: 42 };
let keys = Object.keys(obj);
console.log(keys);
//prints [name,age]

```

##### Getting a list of object values

```js
let obj = { name: 'bob', age: 42 };
let values = Object.values(obj);
console.log(values);
//prints [bob,42]

```


##### Getting a list of object key-value pairs

```js
let obj = { name: 'bob', age: 42 };
let entries = Object.entries(obj);
console.log(entries);
//prints [['name','bob],['age',42]]

```

##### To loop through all properties values of an object

```js
let obj = { name: 'bob', age: 42 };
for (let x in obj) {
  console.log(x);
}
//prints
//bob
//42

```

**Warning**: Don't use this for arrays, its not guaranteed that the array values will come out in the right order


### Functions

To declare a function in JavaScript:

```js
function add(x, y) {
  let result = x + y;
  return result;
}

```

To declare a function in JavaScript using ES6 arrow functions:

```js

const add = (x, y) => {
  let result = x + y;
  return result;
};

console.log(add(2, 3));
//prints 5

```
**Warning**: Forgetting the `return` statement is a common mistake developers make.

You can omit the curly braces and return statement if you can fit the return value into a single expression. The single expression will end up being what is returned. 
```js
const add = (x, y) => x + y;

console.log(add(2, 3));
//prints 5


```

**Best Practice**: arrow functions are automatically *binded* to their encompassing React component, so always use them when possible in React

### Other ES6 Features

#### ES6 Array Methods
##### Map

The map() function creates a new array with all of the old arrays values transformed by a mapping function.

```js
let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((x) => x * 2); //uses an arrow function
console.log(newArr);
//prints [2,4,6,8,10]

let items = [
  { id: 1, price: 10, tax: 0.2 },
  { id: 2, price: 20, tax: 0.1 },
  { id: 3, price: 30, tax: 0.05 },
];

```

Another example of the map() function
```js
let finalCosts = items.map((x) => {
  const rObj = {};
  rObj.id = x.id;
  rObj.finalCosts = x.price * (1 + x.tax);
  return rObj;
});
console.log(finalCosts);
/*
[
  {id:1,finalCost:12},
  {id:2,finalCost:22},
  {id:3,finalCost:31.5}
]
*/
```

You can also access the index while mapping through each element:

```js
let items = [1, 2, 3, 4];
let mappedItems = items.map((x, i) => [{ value: x, index: i }]);
console.log(mappedItems);
/*
[
  [ { value: 1, index: 0 } ],
  [ { value: 2, index: 1 } ],
  [ { value: 3, index: 2 } ],
  [ { value: 4, index: 3 } ]
]
*/
```

**Additional Context**: The map() function is used heavily in React to convert arrays full of data into arrays full of React components in order to render lists of React components.

```js
const ItemsList = () => {
  let items = [
    { id: 1, price: 10, tax: 0.2 },
    { id: 2, price: 20, tax: 0.1 },
    { id: 3, price: 30, tax: 0.05 },
  ];
  return (
    <div>
      {
        items.map((x) => (
          <Item id={x.id} price={x.price} tax={x.tax} />
        )) //This will render a list of React components
      }
    </div>
  );
};

```


##### Filter
The filter() function creates a new array with only the values of the old array that return true from the filtering function.

```js
let arr = [1, 2, 3, 4, 5];
let newArr = arr.filter((x) => x > 2); //uses an arrow function
console.log(newArr);
//prints [ 3, 4, 5 ]

```


Another example of the filter() function
```js
let arr = [
  { id: 1, isActive: true },
  { id: 2, isActive: false },
  { id: 3, isActive: true },
  { id: 4, isActive: false },
  { id: 5, isActive: false },
];
let newArr = arr.filter((x) => x.isActive === false); //uses an arrow function
console.log(newArr);
/*prints 
[
  { id: 2, isActive: false },
  { id: 4, isActive: false },
  { id: 5, isActive: false }
]
*/
```

##### Sort

The sort() function creates a new array by sorting the values of the old array using a sorting function.

The sorting function will have the format of:

```js
function(x, y) {

}

//or in arrow format

(x, y) => {

}
```

The sorting function works by comparing two items in the array at a time, represented by the parameters x and y. If the sorting function returns a positive number then item x gets slotted ahead of item y. If the sorting function returns a negative number then item y will get slotted ahead of item x. If the sorting function returns 0 then the two items will stay in the same relative position. This sorting function gets applied throughout the array items to return a sorted array.

Sorting numerically by a specific attribute:
```js
let arr = [
  { id: 304, code: 'aaa' },
  { id: 222, code: 'ddd' },
  { id: 9, code: 'eee' },
  { id: 100, code: 'bbb' },
  { id: 42, code: 'ccc' },
];

let sortedArr = arr.sort((x, y) => x.id - y.id); //if x.id is greater than y.id, the result will be positive and thus x will be slotted ahead of y
console.log(sortedArr);
/* prints
[
  { id: 9, code: 'eee' },
  { id: 42, code: 'ccc' },
  { id: 100, code: 'bbb' },
  { id: 222, code: 'ddd' },
  { id: 304, code: 'aaa' }
]
*/
```

Sorting alphabetically by a specific attribute:
```js
let arr = [
  { id: 304, code: 'aaa' },
  { id: 222, code: 'ddd' },
  { id: 9, code: 'eee' },
  { id: 100, code: 'bbb' },
  { id: 42, code: 'ccc' },
];

let sortedArr = arr.sort((x, y) => x.code.localeCompare(y.code)); //localeCompare will return a positive number if x.code is ahead of y.code alphabetically
console.log(sortedArr);
/* prints
[
  { id: 304, code: 'aaa' },
  { id: 100, code: 'bbb' },
  { id: 42, code: 'ccc' },
  { id: 222, code: 'ddd' },
  { id: 9, code: 'eee' }
]
*/

```
## Knowledge Check 3


```js
let arr = [3, 5, 12, 9].map((x) => x * 3).filter((x) => x > 10);
console.log(arr);
```
What does arr contain?

```
A. 9 
B. 12
C. 9 15 36 27 
D. 15 36 27 
```


### ES6 Destructuring

The destructuring assignment allows you to unpack values from arrays and objects and assign them to variables all in one statement.

#### Array Destructuring


Destructuring an array:

```js
let arr = [1, 2, 3, 4, 5];
let [a, b, c] = arr; //index values from arr go into a,b,c from left to right

console.log(a);
//prints 1
console.log(b);
//prints 2
console.log(c);
//prints 3

```

It is okay to provide fewer variables than the size of the array. The unmatched values just won't be stored in any variables.

**Additional Context**: Array destructuring is useful when dealing with the key value pairs of `Object.entries()` in for loops and for some React hooks.


#### Object Destructuring


Destructuring an array:

```js
let obj = {
  name: 'bob',
  age: 42,
  location: 'LA',
};
let { name, age } = obj; //property values from obj go into name and age.

console.log(name);
//prints bob
console.log(age);
//prints 42

```
You don't need to provide all the property values as variable names. You can choose the ones you need and can provide the variables in any order as long as the variable names match up with the property key names.

If you your variables to have different names than the object key names than you can do the following:

```js
let obj = {
  name: 'bob',
  age: 42,
  location: 'LA',
};
let { name: newName, age: newAge } = obj; //property values from obj go into newName and newAge.

console.log(newName);
//prints bob
console.log(newAge);
//prints 42

```

**Additional Context**: Object destructuring is useful when importing functions from modules


### ES6 Spread Operator

The spread operator is useful for dumping elements in an array into another array. It is represented by using three dots in front of an array, for example:

#### Spread Operator for Arrays
```js
let arr = [4, 5, 6];

let newArr = [1, 2, 3, ...arr]; // the elements of arr are being appended onto the newArr declaration

console.log(newArr);
//prints [ 1, 2, 3, 4, 5, 6 ]

```

**Additional Context**: The spread operator for arrays is useful for slicing arrays and recombining them with values inserted or deleted

#### Spread Operator for Objects


The spread operator is great for merging object properties of multiple objects:

```js
let obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

let newObj = { ...obj1, b: 55, c: 66, d: 77 };
console.log(newObj);
//prints { a: 1, b: 55, c: 66, d: 77 }

```

**Additional Context**: The spread operator for objects is used heavily in Redux because it allows you to create new objects with the old object and new data merged, fitting into the immutability principle of Redux


## Knowledge Check 4


```js
let obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

let obj2 = {
  b: 4,
  c: 5,
  e: 6,
};

let obj = { ...obj2, c: 4, ...obj1 };

```
What value does obj.c contain:

```
A. 3 
B. 4
C. 5
D. 12
```

### ES6 Template Literals

In JavaScript you can build a string with by adding strings together:

```js
let x = 'hello';
let y = 'world';

let sentence = x + ' ' + y;
console.log(sentence);
//prints hello world

```

You can also use ES6 template literals to use variables within a sentence template without having to use +'s. To use template literals, wrap your string with backticks instead of quotation marks and use ${} to wrap any variables you want to evaluate.

```js

let name = 'bob';
let age = 42;

let sentence = `my name is ${name} and I am ${age} years old`;
//prints my name is bob and I am 42 years old

```

**Additional Context**: Template literals can be used for very basic server side rendering of HTML in Node.js

## Require and Modules.export

We've previously covered how to run a single Node.js file; however, doing all of your work from one single file can quickly become hard to maintain. Luckily, Node.js allows us to export files as modules and import them as needed into our main application file.

### Modules.export

*Modules.export* allows you to export functions or objects out of one node.js file so that we can import them later into another node.js file with *require()*.

There are several ways to export functions or objects out of node.js with Modules.export.

Imagine we have the following utility functions and objects that we want to export:

```js
//utilities.js
function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

const information = {
  user_id: 'abc123',
  password: 'secret',
};

```

One way is to individually export every single function or object we want by defining methods on the *module.exports* object:

```js 
//utilities.js
function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

const information = {
  user_id: 'abc123',
  password: 'secret',
};

module.exports.add = add;

module.exports.multiply = multiply;

module.exports.information = information;
```

Another way is to create one single module.export object that includes all the information we want to export:

```js
//utilites.js
function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

const information = {
  user_id: 'abc123',
  password: 'secret',
};

module.exports = {
  add: add,
  multiply: multiply,
  information: information,
};

```
### Require

Now that we've exported our utility functions, let's import the utility module we just created using require(). The require() method takes in the filepath to the node.js module you want to import as a string and then saves the imported module object to a variable. We can then access our utility functions and objects through that module object.

```js
const utilities = require('./utilities.js');

console.log(utilities.add(2, 3));
//prints 5
console.log(utilities.multiply(2, 3));
//prints 6
console.log(utilities.information.user_id);
//prints abc123

```

# Unit 1-A Lab

## Lab Overview

In this lab you will create a utility module full of library functions, which you will then import into a test file in order to verify their functionality.

The test file, utility file function definitions, and project structure will be given to you. You just have to fill in the function logic, import the module into the test file, and run the tests.

To complete the lab:

1. Fill in the function logic in `/src/util.js`
2. Export the functions in `/src/util.js`
3. Import util.js into `/tests/app.test.js`
4. Run the tests with `npm run test` until all test cases pass


## Lab Starter Code

The Lab starter code can be cloned here:
https://github.com/flatiron-school/node-express-intro/tree/main/Labs/Lab-1A-Starter

The utility module will be in `/src/util.js`.

The test file which will run against your modules is located in `tests/app.test.js`.

To test out your lab, first, download all the lab dependencies with:

```
// you only need to do this once
$ npm install
```

Then run your tests with:

```
$ npm run test
```

If all your tests pass you should see the following message:

```
 PASS  tests/app.test.js
  test cases
    ✓ sumNegative (3 ms)
    ✓ filterNulls (1 ms)
    ✓ capitalizeFirst (1 ms)
    ✓ removeIndex
    ✓ insertVal (1 ms)
    ✓ sortLength (12 ms)
    ✓ describeObject (1 ms)
    ✓ mergeObject
    ✓ objectValues (1 ms)
    ✓ getTall (1 ms)

Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        1.186 s
Ran all test suites.
```

## Lab Solution

The lab solution can be found here:
https://github.com/flatiron-school/node-express-intro/tree/main/Labs/Lab-1A-Solution



# Knowledge Check Answers

## Knowledge Check 1

You are in folder `/home` and you have a file in `/home/src/myFile.js` that you want to run. What command is the correct way to run the file?

```
A. node myFile.js
B. node ./src .
C. node ./src myFile.js
D. node /src myFile.js
```

Answer is C.

## Knowledge Check 2


```js
//A
function bar() {
  //B
  let foo = 3;
  function baz() {
    //C
    for (let i = 0; i < 3; i++) {
      //D
    }
  }
}


```
Where is the variable foo accessible? Select all that apply.

```
A. A
B. B
C. C
D. D
```

Answer is B, C and D 

## Knowledge Check 3


```js
let arr = [3, 5, 12, 9].map((x) => x * 3).filter((x) => x > 10);
console.log(arr);

```
What does arr contain?

```
A. 9 
B. 12
C. 9 15 36 27 
D. 15 36 27 
```
Answer is D. 

## Knowledge Check 4


```js
let obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

let obj2 = {
  b: 4,
  c: 5,
  e: 6,
};

let obj = { ...obj2, c: 4, ...obj1 };

```
What value does obj.c contain:

```
A. 3 
B. 4
C. 5
D. 12
```
Answer is A. 
