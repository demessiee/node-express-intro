# Unit 1-B Lecture:

## Lecture Overview

This lecture will cover the following topics:
 * Core Node Modules
 * NPM
 * Node.js Globals
 * Command Line Arguments

It is recommended to follow along by making a project directory for this lecture and running the code samples:

```
mkdir lecture1B
cd lecture1B
npm init
```

## Node.js Globals

When you code in a Node.js environment, there are a couple of global variables and functions that are included that aren't a part of the standard JavaScript you see in the browser.

Here are some of the main global objects and functions:
* __dirname
* __filename
* process
* require() - already covered
* module.exports - already covered
* console
* setTimeout() - will cover in the next lecture
* setInterval() - will cover in the next lecture


### __dirname

__dirname contains the directory path of the current executing node script

```js
console.log(__dirname)
//prints /Users/blin/Flatiron/Code
```

### __filename
__filename contains the file path of the current executing node script

```js
console.log(__filename)
//prints /Users/blin/Flatiron/Code/filename.js
```

### process

The process global contains information about the current running Node.js process

#### process.env

process.env contains all the environment variables that will be used by Node.js. It is common for production flags, port numbers, and database connection strings to be stored here. 

**Additional Context:** Some cloud hosting providers will add in environment variables for you relating to their hosting service.

```js
console.log(process.env)
/* sample process.env output
{
  TERM: 'xterm-256color',
  SHELL: '/usr/local/bin/bash',
  USER: 'maciej',
  PATH: '~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin',
  PWD: '/Users/maciej',
  EDITOR: 'vim',
  SHLVL: '1',
  HOME: '/Users/maciej',
  LOGNAME: 'maciej',
  _: '/usr/local/bin/node'
}

*/
```

You can define the environment variables when you run your node script by adding them in front of your node command. The following example will illustrate how.

Try creating the following index.js file:


```js
//index.js
if(process.env.NODE_ENV === "production"){
    console.log("running in production mode")
}else {
    console.log("running in test mode")
}
```

Next, run the following command in your terminal:
```bash
$ node index.js
running in test mode
```

It prints out "running in test mode" because process.env.NODE_ENV was undefined.

Next, try running the following command while also setting the NODE_ENV variable:
```bash
$ NODE_ENV=production node index.js
running in production mode
```

Now, process.env_NODE_ENV was set to production so it printed out "running in production mode".

#### process.argv

process.argv is an array that contains information about your command line inputs. When you run a Node.js file from the command line, the command line arguments are stored in the process.argv array.

```js
//index.js
console.log(process.argv)
```

```bash
node index.js hello world 1 2 3
//example print out
[
  '/usr/local/Cellar/node/14.9.0/bin/node',
  '/Users/blin/Flatiron/Code/index',
  'hello',
  'world',
  '1',
  '2',
  '3'
]
```

The 0th index of the array is where you installed Node.js locally on your machine. The 1st index of the array is the path of the Node.js file being executed. The command line arguments are stored in 2nd index and beyond. If you enter in a number into the command line, it will show up in process.argv as a string, so be sure to convert it with something such as parseInt().



### console

#### console.log()
console.log() prints out to stdout and adds a new line. You can pass in almost anything, and console.log() will print out the stringified version of the input

```js
console.log("hello world")

console.log(123)

console.log({name:"bob",age:42})

console.log(['a','b','c'])

function myFunction(x){
    return x+10
}

console.log(myFunction)

/* prints
hello world
123
{ name: 'bob', age: 42 }
[ 'a', 'b', 'c' ]
[Function: myFunction]
*/
```

You can pass in multiple arguments to print multiple things on the same line. This is useful to label your console logs if you want to search through them in the future.

```js
let math = 1 + 2 + 3
console.log("math",math
//prints math 6

```


#### console.error()
console.error() is used to print stderr instad of stdout. It works the same as console.log()

## Knowledge Check 1

You run `node index.js -i input.txt -o output.txt` in the commandline. Which of the following contains `input.txt`?

```
A. process.argv[0]
B. process.argv[1]
C. process.argv[2]
D. process.argv[3]
```

## Core Node Modules

In the previous lecture we covered how to create our own node.js modules and how to import them. Node.js also comes with a couple of core modules already included.

To import a core node module, we can still use require(), except we just need to pass in the module name as a string instead of providing a path.

Here is a complete list of core modules: https://flaviocopes.com/node-core-modules/

In this lecture we are going to focus on the following core modules :
* path
* fs

### path

path is a useful module for dealing with directory paths.

You can import it similar to how we imported our own modules, except this time you don't need to provide a path to the file. Instead just enter the core module name as a string:

```js
const path = require("path")

//use functions on the path object

```

#### path.join()

path.join() is useful for joining segments of a path together and ensuring that it is compatible with the operating system you are running on. Windowes uses backslashes when separting path segments while Unix based operating systems use forward slashes. This can be tricky when you are handling it yourself, but with path.join() we can safely be sure that we are creating paths correctly.


```js
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'); //.. will move one directory upwards
// Returns: '/foo/bar/baz/asdf'

path.join('foo', {}, 'bar');
// Throws 'TypeError: Path must be a string. Received {}'

path.join(__dirname,"/api") //a common use case with Express is to join an endpoint path with __dirname
```
#### path.normalize()

path.normalize() will convert an existing path into one thats compatible with your operating system:
```js

//on POSIX
path.normalize('/foo/bar//baz/asdf/quux/..');
// Returns: '/foo/bar/baz/asdf'

//on windows
path.normalize('C:\\temp\\\\foo\\bar\\..\\');
// Returns: 'C:\\temp\\foo\\'

```

#### path.parse()

path.parse() will breakdown a filepath and separate into the root, directory, base, extension, and filename:

```js
path.parse('/home/user/dir/file.txt');
// Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
```


### fs

The fs module is interact with the filesystem. You can use it to read from ,write to and create files on your filesystem.

You can import it by doing the following:

```js

const fs = require('fs');

//use functions on the fs object
```

#### Reading from an existing file with fs.readFile()

fs.readFile() takes in a filename, encoding pattern, and a callback function to handle the result. We will cover callback functions more in detail in the next lecture but for now, just know that your file data can be accessed through the second argument on the callback(data in the below example) and will only exist within the scope of the callback function (don't try to handle or move the data anywhere else besides in the callback function). 


Imagine we have the following stored in file.txt:

```
Hello World
```

```js
const fs = require("fs");

fs.readFile("file.txt", "utf-8", (err, data) => {
  if(err){
      //handle error
      return
  }
  //handle data
  console.log(data);
  //prints Hello World
});

```

If there is an error such as the file doesn't exist or you dont have read permissions, the err argument will be true and you can handle the error accordingly.


#### Creating a new file or rewriting an existing file

You can use the fs.writeFile() method to rewrite an existing file or create a new file and write to it.

```js
const fs = require("fs");

const data = "New File Contents";

fs.writeFile("newFile.txt", data, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});
```

#### Appending to an existing file

You can use the fs.appendFile() method to append data onto an existing file. If the file does not exist, it will also create the file.

```js
const fs = require('fs');

fs.appendFile('file.txt', 'data to append', function (err) {
  if (err) throw err;
  console.log('Data Successfully Appended.');
});
```

## Knowledge Check 2

```js
//dirname contains /home/src/
path.join(__dirname,"/a","b","../c") 


```

What does the code print out?


```
A. /a/b/c
B. /home/src/a/b/c
C. /a/b
D. /home/src/a/c
```

## npm

npm comes installed with Node.js and stands for Node Package Manager. npm is used to initialize our project as a Node.js project and is also used to  allows us to add third party modules created by other developers as dependencies to our project.

### npm init

*npm init* is the command that is used to set up a new Node.js project. Setting up a node.js project with *npm init* gives us some additional functionality such creating test scripts and launch scripts as well as specifying who the author of the project is in case we want to publish it in the future. 

To create a new npm project, run the following in your project directory:

```
$ npm init
```

npm will ask you a couple questions about the project:

```
package name: (my-project) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
```

The entry point refers to which file will be run first if someone else imports your project as a module to their project.


### package.json

After going through all the questions, a package.json file will be created that includes all of information you provided.

```
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

**Additional Context:** If you host a node app on a cloud provider such as AWS, the cloud provider will be checking package.json for information on how to initiate your app, build your code, and run your tests.

### npm install

To add third party modules as dependencies to your project, use the following command:

```
$ npm install module-name
```

Lets try installing one of the popular third party modules, json2csv using npm.

```
npm install json2csv
```

Once json2csv finished installing you will notice that package.json has been modified to list json2csv as a dependency.

package.json:
```
{
  "name": "test2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "json2csv": "^5.0.3"
  }
}
```

#### node_modules

You will also notice that a node_modules file has been generated that contains the source files of json2csv as well as json2csv's dependencies(commander, jsonparse, lodash.get)

The files in node_modules are the files that are actually being run when you import a file with require().

To reinstall all of the dependency files of the node_modules folder run:

```
npm install
```


**Additional Context:** If you ever clone a Node.js project repo, the node_modules folder is often omitted because it takes up a lot of space. In that case, just *run npm install* to regenerate the node_modules folder.

If you try to import a module that doesnt exist in node_modules then Node.js will throw an error.


#### package-lock.json

You will also notice that a package-lock.json file has been generated.

package-lock.json:
```
{
  "name": "test2",
  "version": "1.0.0",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "commander": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-6.1.0.tgz",
      "integrity": "sha512-wl7PNrYWd2y5mp1OK/LhTlv8Ff4kQJQRXXAvF+uU/TPNiVJUxZLRYGj/B0y/lPGAVcSbJqH2Za/cvHmrPMC8mA=="
    },
    "json2csv": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/json2csv/-/json2csv-5.0.3.tgz",
      "integrity": "sha512-e3gEZU/4fp8CVQMHlwT77RayAR7nylCzCYN7jTIbPTEqk0oTaE8GTcBudLgXrHt4ltOs9SAsbveMJT0YK/QUSg==",
      "requires": {
        "commander": "^6.1.0",
        "jsonparse": "^1.3.1",
        "lodash.get": "^4.4.2"
      }
    },
    "jsonparse": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/jsonparse/-/jsonparse-1.3.1.tgz",
      "integrity": "sha1-P02uSpH6wxX3EGL4UhzCOfE2YoA="
    },
    "lodash.get": {
      "version": "4.4.2",
      "resolved": "https://registry.npmjs.org/lodash.get/-/lodash.get-4.4.2.tgz",
      "integrity": "sha1-LRd/ZS+jHpObRDjVNBSZ36OCXpk="
    }
  }
}
```

You might be wondering what is the difference between package.json and package-lock.json.

In addition to having information about your project, package.json records the minimum amount of information that your project needs from its installed dependencies, which is just the dependency name and its version. package-lock.json provides more detailed information about its dependencies such as the dependencies of the dependencies and their exact versions.

When you run npm install, npm will refer to both package.json and package-lock.json to reinstall all of the dependency files in node_modules. Having a package-lock.json ensures that you are downloaded the exact dependency tree you previously had instead of getting a close estimate.

#### Dependency versioning and updating

When you look at the depency section of package.json you will notice three numbers that represent the version number:

```
"dependencies": {
    "json2csv": "^5.0.3"
}
```

1. The first value (5 in 5.0.3) specifies the major version of the package — It means this version has Major code changes and it might contain breaking API changes.
2. The second value (0 in 5.0.3) specifies the minor version which contains minor changes but will not contain breaking API changes.
3. The third value (3 in 5.0.3) specifies the patch version which usually contains bug fixes.

You might be wondering what the ^ represents. There are some other special characters that affect how the dependency version gets updated when you reinstall or update your dependencies. Why is this? Well, if one of your dependencies just had a major version change and is no longer compatible with your project you probably don't want to update to it, and will instead want to update to the latest minor version change or patch change.

You can update your depencies with:

```
npm update
```

The following special characters will determine how the version gets updated:

* latest 
    * (e.g. latest) you can replace all three digits with *latest* which will always take the latest major version. (**not recommended**, will probably break your code with any major update)
* ~ 
    * (e.g ~5.0.3) will update to the latest patch version (3rd digit)
* ^ - 
    * (e.g ^5.0.3) will update to the latest minor version (2nd digit)
* x or * 
    * (e.g. 5.0.x or 5.0.*) A digit can be replaced with x or * which will make it default to the highest version for that digit
* \> or  \=< or \< or < <=
    * (e.g. >5.0.3) updates to any version greater than 5.0.3


## Knowledge Check 3

Which command is used to install npm dependencies?

```
A. npm 
B. npm init
C. npm install
D. npm dependencies
```

## NPM Scripts


Your package.json has a property for scripts:

```js
{
  ///...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
  //...
}
```

npm scripts are used to run competetive tasks by typing `npm run script-name` instead of typing the entire command out.

By default there is only a script for running tests, which isn't filled out yet.

Try running the test script:

```
> npm test
Error: no test specified
```

Lets add a script to start our index.js file:

```js
{
  ///...
  "scripts": {
    "start":"node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
  //...
}
```

Now we can run the index.js file in our directory by typing `npm run start` or `npm start`. 

Note: `npm start` is the only script that can be run without the `run` keyword. All other scripts must use the format `npm run script-name`

**Best Practice:** We don't have anything to build right now, but it is useful to have a script that allows you to build your code using `npm run build`. This is commonly used to bundle all your React files into a single html file.

**Additional Context :** Some web hosting services will use the `build` script and the `start` script to build and deploy your node.js app.

## Knowledge Check 4

Which file is used to generate an exact copy of your dependency tree?


```
A. package.json
B. package-lock.json
C. node_modules
D. README.md
```

# Unit 1-B Lab

## Lab Overview

You are an employee in the IT department of ABC Solutions Company. You are tasked with creating a new CSV file that will be the master list of all employee info for the next year. 

This year, the following changes are happening to employees:

* Everyone in the Engineering department whose last promotion year was 2018 or before is going to be promoted and given a 20% raise
* Everyone in the Marketing department whose last promotion year was 2017 or before is going to be promoted and given a 5% raise
* Everyone in Research and Development is going to be given a 5% pay decrease
* Everyone in the Sales department with a salary of over $100,000 has to be laid off and removed from the employee list
* The Services department merged with the Support department so all employees under Services will have their department changed to Support

In addition, some of the employee email data became corrupted. If an employee is missing an email, you must regenerate a new email using the first initial of their first_name and their last_name and end it with @abc.com. (e.g. Bob Smith will be bsmith@abc.com)

You are provided with last years CSV file of employee data. It has the following header structure:

```
id	first_name	last_name	email	department	last_promoted	salary
```

You must write a Node.js script that will read from last years CSV file and will output a new CSV file with all of the employee data changes that are happening this year as well as fixing the corrupted emails. For newly promoted employees, use '2021' as their promotion date. All values in the output CSV should be strings.

You will need to provide a path to last years CSV file and a path to the output file as commandline arguments. You should be able to run your project with:

```
node index.js employee_data.csv updated_employee_data.csv
```

You will also be using the [json2csv](https://www.npmjs.com/package/json2csv) and [csvtojson](https://www.npmjs.com/package/csvtojson) third party npm modules to complete your project. Refer to their documentation pages for information on how to use them.

To complete the lab:
1. Create a Node.js project that reads from last years employee data CSV file, updates the employee data according to the changes that are happening this year, and outputs the new employee data
2. Provide a path to last years employee data CSV file and a path to the output employee data CSV file as commandline arguments
3. Diff your output file with a solution output file to verify that you updated the employee data correctly.

## Lab Starter Code

You will be provided with last years employee data in a CSV file named `employee_data.csv`. You will also be provided with a solution output CSV file to compare your output file with named `updated_employee_data_solution.csv`.

You can compare the output files with :

```
diff updated_employee_data_solution.csv updated_employee_data.csv

```

Part of the lab learning objectives is to launch your project from scratch with `npm init` and install all the necessary dependencies with `npm install`.

You can get the `employee_data.csv` file here:
https://github.com/flatiron-school/node-express-intro/tree/main/Labs/Lab-1B-Starter

## Lab Solution

You can view the lab solution here:
https://github.com/flatiron-school/node-express-intro/tree/main/Labs/Lab-1B-Solution

# Knowledge Check Answers

## Knowledge Check 1

You run `node index.js -i input.txt -o output.txt` in the commandline. Which of the following contains `input.txt`?

```
A. process.argv[0]
B. process.argv[1]
C. process.argv[2]
D. process.argv[3]
```

Answer is D.

## Knowledge Check 2

```js
//dirname contains /home/src/
path.join(__dirname,"/a","b","../c") 
```

What does the code print out?


```
A. /a/b/c
B. /home/src/a/b/c
C. /a/b
D. /home/src/a/c
```
Answer is D.

## Knowledge Check 3

Which command is used to install npm dependencies?

```
A. npm 
B. npm init
C. npm install
D. npm dependencies
```
Answer is C.

## Knowledge Check 4

Which file is used to generate an exact copy of your dependency tree?


```
A. package.json
B. package-lock.json
C. node_modules
D. README.md
```

Answer is B.
