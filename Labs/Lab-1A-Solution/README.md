# Unit 1-A Lab

## Lab Overview

In this lab you will create a utility module full of library functions which you will then import into a test file in order to verify their functionality.

The test file, utility file function definitions, and project structure will be given to you. You just have to fill in the function logic, import the module into the test file, and run the tests.

To complete the lab:

1. Fill in the function logic in `/src/util.js`
2. Export the functions in `/src/util.js`
3. Import util.js into `/tests/app.test.js`
4. Run the tests with `npm run test` until all test cases pass


## Lab Starter Code

The Lab starter code can be cloned here:
[LINK]

The utility module will be in `/src/util.js`.

The test file which will run against your modules is located in `tests/app.test.js`.

To test out your lab, first download all the lab dependencies with:

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
[LINK]