# Unit 1C Lab

## Lab Overview

This lab will be an exercise in making network requests to other APIs using Node.js. 

You will be implementing a couple of functions that make network requests to the Star Wars API. Those functions should return Promises containing data from the Star Wars API.

Here's a link to the Star Wars API documentation:
https://swapi.dev/documentation

There will be test cases already set up to verify that your functions are returning Promises that contain the right data.


## Lab Starter Code
You will be given a starter node.js project that has `jest`, `axios`, and `node-fetch` installed. There will be some function definitions in `src/starwars.js` that you will need to fill out. Your test cases are located in `tests/app.test.js`

You can get the starter code here:
https://github.com/flatiron-school/node-express-intro/tree/main/Labs/Lab-1C-Starter

To test out your lab, first, download all the lab dependencies with:

```
$ npm install
```

Then run your tests with:

```
$ npm run test
```

If all your tests pass you should see the following message:
```
 PASS  tests/app.test.js (8.94 s)
  ✓ getPeople (1728 ms)
  ✓ getFilm (1441 ms)
  ✓ getAllFilmTitles (1619 ms)
  ✓ getFilmCharacters (3432 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        9.003 s
Ran all test suites.
```

## Lab Solution

You can view the lab solution here:
https://github.com/flatiron-school/node-express-intro/tree/main/Labs/Lab-1C-Solution
