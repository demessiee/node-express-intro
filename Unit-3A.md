# Unit 3-A Lecture:

In this lecture, we will cover:
* Testing Code Jest
* Testing Async Code with Jest
* Setup and Teardown before Testing with Jest


It is recommended to follow along by making a project directory for this lecture and running the code samples:

```
mkdir lecture3A
cd lecture3A
npm init
```

## Jest

Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with both Node.js and React.js.

Most of this lecture is taken from the Jest official website:
https://jestjs.io/docs/en/getting-started

## Basic Jest Usage

Let's create a new project and add Jest as a dependency:

```
mkdir unit3E-lecture
cd unit3E-lecture
npm init
npm install jest
```

Lets create a folder named `/src` and add in simple module file named sum.js so we can test it with Jest:

```js
//sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

Next, let's create a folder named `/tests` in our project root and add in a file named sum.test.js that will hold our actual test. 

**Best Practice:** By convention, all test files should be in the test folder and end in .test.js.

```js
//sum.test.js
const sum = require('../src/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 5 to equal y', () => {
  expect(sum(2, 5)).toBe(7);
});
```

In our sum.test.js file, the test() function takes in two arguments: the first is a string to name our test, and the second is a callback to run our specific test. Within the test callback, an expression is passed into expect(), and .toBe() is used to compare the expression in expect() with the value passed in toBe(). If they are equal, the test passes, otherwise the test will fail. You can have multiple tests within one .test.js file.


Next, in the scripts section of your `package.json` file, add in the following test script:
```js
{
  "scripts": {
    "test": "jest"
  }
}
```

This script will run jest when you type `npm run test`.

Try running `npm run test` on your file. This will run all the *.test.js files that are present in your project.

You should see the following output:
```
$ npm run test
> jest 
 PASS  tests/sum.test.js
  ✓ adds 1 + 2 to equal 3 (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.654 s
```

## Writing Tests with Jest


The test() method is used to create a test in Jest. The first parameter is used to name the test as it appears in the test summary, and the second parameter is a callback that defines how the test runs.

Within the callback, the expect() method is to evaluate an expression and return an "expectation object" containing the result of the expression. 

The "expectation object" must then be used with another "matcher" function to create a complete comparison.

The it() function is also synonymous to test() and works exactly the same.


### Numerical Comparisons
Here are some matcher functions that are available for numerical comparisons:

```js
test('two plus two', () => { 
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
```

Multiple expect and matcher pairs can be used within a test. If any of them fail, then the entire test will fail.

### Floating Point Comparisons

For floating point equality, use toBeCloseTo instead of toEqual, because you don't want a test to depend on tiny rounding errors that happen in JavaScript.

```js
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});
```

### Not

You can check if the expectation object is not equal to a matcher function by using `not`:


```js
test('testing not', () => {
  const value = 2 + 2;
  expect(value).not.toBeGreaterThan(5);
  expect(value).not.toBeGreaterThanOrEqual(4.5);
  expect(value).not.toBeLessThan(3);
  expect(value).not.toBeLessThanOrEqual(3.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).not.toBe(3);
  expect(value).not.toEqual(5);
});

```

### Object and ArrayComparisons

To compare properties of an object on array, you can use the toEqual() method and pass in a object you want to compare to:

```js
test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('array comparison', () => {
  expect(['a', 'b', 'c', 'd']).toEqual(['a', 'b', 'c', 'd']);
});

```


### Truthiness

In tests, you sometimes need to distinguish between undefined, null, and false, but you sometimes do not want to treat these differently. Jest contains helpers that let you be explicit about what you want.

* toBeNull matches only null
* toBeUndefined matches only undefined
* toBeDefined is the opposite of toBeUndefined
* toBeTruthy matches anything that an if statement treats as true
* toBeFalsy matches anything that an if statement treats as false

For example:

```js
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

```

### String Comparisons

You can check strings against regular expressions with toMatch():

```js
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

```

### Arrays and iterables
You can check if an array or iterable contains a particular item using toContain():

```js

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});
```

### Exceptions

If you want to test whether a particular function throws an error when it's called, use toThrow():

```js
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});

```

## Knowledge Check 1
When should you use .toEqual() instead of .toBe()?

```
A. They are the same.
B. When you need to compare objects or arrays
C. When you need to compare strings
D. When you need to compare floating point numbers
```


## Testing Asynchronous Code

It's common in JavaScript for code to run asynchronously. When you have code that runs asynchronously, Jest needs to know when the code it is testing has completed before it can move on to another test. Jest has several ways to handle this.


### Callbacks

The most common asynchronous pattern is callbacks.

For example, let's say that you have a `fetchData(callback)` function that fetches some data and calls `callback(data)` when it is complete. You want to test that this returned data is the string `peanut butter`.

By default, Jest tests complete once they reach the end of their execution. That means this test will not work as intended:

```js
// Don't do this!
test('the data is peanut butter', () => {
  function callback(data) {
    expect(data).toBe('peanut butter');
  }

  fetchData(callback);
});

```

The problem is that the test will complete as soon as fetchData completes, before ever calling the callback.

There is an alternate form of test that fixes this. Instead of putting the test in a function with an empty argument, use a single argument called `done`. Jest will wait until the `done` callback is called before finishing the test:

```js
test('the data is peanut butter', (done) => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

```

If `done()` is never called, the test will fail (with timeout error), which is what you want to happen.

If the expect statement fails, it throws an error and `done()` is not called. If we want to see in the test log why it failed, we have to wrap `expect()` in a try block and pass the error in the catch block to `done`. Otherwise, we end up with an opaque timeout error that doesn't show what value was received by `expect(data)`.

### Promises

If your code uses promises, there is a more straightforward way to handle asynchronous tests. Return a promise from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.

For example, let's say that `fetchData`, instead of using a callback, returns a promise that is supposed to resolve to the string `peanut butter`. We could test it with:

```js
test('the data is peanut butter', () => {
  return fetchData().then((data) => {
    expect(data).toBe('peanut butter');
  });
});

```

Be sure to `return` the promise - if you omit this return statement, your test will complete before the promise returned from `fetchData` resolves and then() has a chance to execute the callback.

If you expect a promise to be rejected, use the `.catch` method. Make sure to add `expect.assertions` to verify that a certain number of assertions are called. Otherwise, a fulfilled promise would not fail the test. 


```js
test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchData().catch((e) => expect(e).toMatch('error'));
});

```

**Additional Context:** Assertions refers to the number of expect() calls that were run. A fulfilled promise would skip the catch() statement and thus skip the expect() assertion.


### Promises with .resolves and .rejects

You can also use the *.resolves* matcher in your expect statement, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.

```js

test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
});

```

**Warning: Be sure to return the expect() assertion**—if you omit this `return` statement, your test will complete before the promise returned from fetchData is resolved and then() has a chance to execute the callback.

If you expect a promise to be rejected, use the *.rejects* matcher. It works analogically to the *.resolves* matcher. If the promise is fulfilled, the test will automatically fail.

```js
test('the fetch fails with an error', () => {
  return expect(fetchData()).rejects.toMatch('error');
});
```

### Async and Await

Alternatively, you can use `async` and `await` in your tests. To write an async test, use the async keyword in front of the function passed to test. For example, the same fetchData scenario can be tested with:

```js
test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

```

You can combine async and await with .resolves or .rejects.

```js
test('the data is peanut butter', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(fetchData()).rejects.toThrow('error');
});
```

In these cases, async and await are effectively syntactic sugar for the same logic as the promises example uses.

None of these forms is particularly superior to the others, and you can mix and match them across a codebase or even in a single file. It just depends on which style you feel makes your tests simpler.


## Knowledge Check 2
When trying to test a callback, how do you signal to Jest that you are done with the test?

```
A. Use the return statement
B. Use resolves or rejects
C. Use done()
D. Use expect.assertions
```


## Setup and Teardown

Often while writing tests you have some setup work that needs to happen before tests run, and you have some finishing work that needs to happen after tests run. Jest provides helper functions to handle this.

**Additional Context**: This is useful if you want a database to be preloaded a certain way before every test. It would allow you to repopulate the database before each test and not have individual tests alter the database before another test runs.

### Repeating Setup For Many Tests

If you have some work you need to do repeatedly for many tests, you can use `beforeEach` and `afterEach`.

For example, let's say that several tests interact with a database of cities. You have a method `initializeCityDatabase()` that must be called before each of these tests, and a method `clearCityDatabase()` that must be called after each of these tests. You can do this with:

```js
beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
```

`beforeEach` and `afterEach` can handle asynchronous code in the same ways that tests can handle asynchronous code - they can either take a `done` parameter or return a promise. For example, if `initializeCityDatabase()` returned a promise that resolved when the database was initialized, we would want to return that promise:

```js
beforeEach(() => {
  return initializeCityDatabase();
});
```

### One-Time Setup

In some cases, you only need to do setup once, at the beginning of a file. This can be especially bothersome when the setup is asynchronous, so you can't do it inline. Jest provides `beforeAll` and `afterAll` to handle this situation.

For example, if both `initializeCityDatabase` and `clearCityDatabase` returned promises, and the city database could be reused between tests, we could change our test code to:

```js
beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
```

### Scoping

By default, the `before` and `after` blocks apply to every test in a file. You can also group tests together using a `describe` block. When they are inside a `describe` block, the `before` and `after` blocks only apply to the tests within that `describe` block.

For example, let's say we had not just a city database, but also a food database. We could do different setup for different tests:

```js
// Applies to all tests in this file
beforeEach(() => {
  return initializeCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

describe('matching cities to foods', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test('Vienna <3 sausage', () => {
    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
  });

  test('San Juan <3 plantains', () => {
    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
  });
});
```

Note that the top-level `beforeEach` is executed before the `beforeEach` inside the `describe` block. It may help to illustrate the order of execution of all hooks.

```js
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test'));
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll
```

### Order of execution of describe and test blocks

Jest executes all describe handlers in a test file _before_ it executes any of the actual tests. This is another reason to do setup and teardown inside `before*` and `after*` handlers rather than inside the describe blocks. Once the describe blocks are complete, by default Jest runs all the tests serially in the order they were encountered in the collection phase, waiting for each to finish and be tidied up before moving on.

Consider the following illustrative test file and output:

```js
describe('outer', () => {
  console.log('describe outer-a');

  describe('describe inner 1', () => {
    console.log('describe inner 1');
    test('test 1', () => {
      console.log('test for describe inner 1');
      expect(true).toEqual(true);
    });
  });

  console.log('describe outer-b');

  test('test 1', () => {
    console.log('test for describe outer');
    expect(true).toEqual(true);
  });

  describe('describe inner 2', () => {
    console.log('describe inner 2');
    test('test for describe inner 2', () => {
      console.log('test for describe inner 2');
      expect(false).toEqual(false);
    });
  });

  console.log('describe outer-c');
});

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2
```

## Knowledge Check 3
If you want to do some setup before each test, which function should you use?
```
A. beforeAll()
B. before()
C. describe()
D. beforeEach()
```


## General Advice

**Best Practice:** If a test is failing, one of the first things to check should be whether the test is failing when it's the only test that runs. To run only one test with Jest, temporarily change that `test` command to a `test.only`:

```js
test.only('this will be the only test that runs', () => {
  expect(true).toBe(false);
});

test('this test will not run', () => {
  expect('A').toBe('A');
});
```

If you have a test that often fails when it's run as part of a larger suite, but doesn't fail when you run it alone, it's a good bet that something from a different test is interfering with this one. You can often fix this by clearing some shared state with `beforeEach`. If you're not sure whether some shared state is being modified, you can also try a `beforeEach` that logs data.

# Unit 3-A Lab

## Lab Overview

For this lab, you will be writing test cases for the utility functions and asynchronous functions you created back in the first and third lab. We are writing tests for these functions because our server doesn't have any logic to test besides CRUD operations to the database. 

For this lab, you should create one `describe()` block per utility function and add as many tests() as you think are necessary.

## Lab Starter Code

Your lab will start off with all of the code from the previous lab. In addition, your utility functions and asynchronous functions will be added in `src/util.js` and `src/starwars.js` and a test file will be provided in `tests/app.test.js`. Jest will be also be added as a dependency and your test script will be modified to use Jest. 

You can clone your starter code here:
[LINK]

Make sure to install all of the dependencies with:
```
$ npm install
```

You can run your tests with:

```
$ node run test
```
## Lab Solution

You can find the lab solution here:
[LINK]

# Knowledge Check Answers


## Knowledge Check 1
When should you use .toEqual() instead of .toBe()?

```
A. They are the same.
B. When you need to compare objects or arrays
C. When you need to compare strings
D. When you need to compare floating point numbers
```

Answer is B. 

## Knowledge Check 2
When trying to test a callback, how do you signal to Jest that you are done with the test?

```
A. Use the return statement
B. Use resolves or rejects
C. Use done()
D. Use expect.assertions
```

Answer is C. 

## Knowledge Check 3
If you want to do some setup before each test, which function should you use?
```
A. beforeAll()
B. before()
C. describe()
D. beforeEach()
```

Answer is D. 

