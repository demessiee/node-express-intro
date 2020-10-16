# Node and Express Course Outline

*   Day 1 (8 hours)
    *   [Unit 1A (2 hours): Node.js Overview and Environment Set Up](Unit-1A.md) **_(Rachel)_**
        *   Lecture (30 min)
            *   Node.js Overview
            *   REPL
            *   Environment Set Up
            *   Basic JavaScript Syntax Review
                *   Variables and Scope
                *   Control Flow
                *   Data Structures
                *   Functions
            *   ES6 JavaScript Features
                *   Array functions (map, filter, sort)
                *   Template Literals
                *   Spread Operator
                *   Destructuring
                *   Arrow Functions
            *   Require and Export
        *   Lab (1 hr 30 min)
            *   Students will set up a local Node.js development environment and create a couple utility functions which they will import into a test file
    *   [Unit 1B (2 hours): Core Node Modules](Unit-1B.md) **_(Brad)_**
        *   Lecture (30 min)
            *   Core Node Modules
                *   fs
                *   Path
            *   NPM
            *   Globals 
            *   Command Line Arguments
            *   package.json
        *   Lab (1 hr 30 min)
            *   The student will read from a file, manipulate the data, and then write to a new file using Node.js core modules
    *   [Unit 1C (2 hours): Asynchronous JavaScript](Unit-1C.md) **_(Rachel)_**
        *   Lecture (30 min)
            * The Node.js event loop
            * Callbacks
            * Promises
            * Timers
            * Network requests
            * Async and Await
        *   Lab (1 hr 30 min)
            *   The student will create several asynchronous functions that can Fetch data from an external API and handle the results
    *   [Unit 1D (2 hours) Basic Web APIs with Node.js and Express](Unit-1D.md) **_(Brad)_**
        *   Lecture (30 min)
            *   Overview of APIs
            *   Express
            *   Basic Routing
            *   URL Parameters
            *   Get Requests
            *   JSON
            *   Serving static assets
        *   Lab (1 hr 30 min)
            *   The student will set up a few GET endpoints that serve text, JSON, and static assets using Node.js and Express
*   Day 2 (8 hours)
    *   [Unit 2A (2.5 hours): More about Basic Web APIs with Node.js and Express ](Unit-2A.md)**_(Brad)_**
        *   Lecture (30 min)
            *   POST, PUT, and DELETE Requests
            *   Querystrings
            *   Middleware
            *   CORS
            *   Modularizing Routes
        *   Lab (2 hrs)
            *   The student will create a CRUD Web API that writes to a json file for memory instead of a database
    *   [Unit 2B (2.5 hours): Integrating with a Database](Unit-2B.md) **_(Rachel)_**
        *   Lecture (30 min)
            * MongoDB
            * Mongo Shell
            * Connecting Node.js to MongoDB using Mongoose
            * Defining database schemas with Mongoose
            * Writing data to MongoDB
            * Reading data from MongoDB
        *   Lab (2 hrs)
            *   The student will transition their CRUD Web API to write to a MongoDB database instead of a json file
    *   [Unit 2C (3 hours): Authentication and Authorization with Express](Unit-2C.md) **_(Brad)_**
        *   Lecture (30 min)
            *   Authentication
            *   Authorization
            *   JSON Web Tokens
            *   Bcrypt
        *   Lab (2 hr 30 min)
            *   The student will build a web app that allows new users to sign up and authenticates existing users via username/password so they can access protected resources
*   Day 3 (8 hours)
    *   [Unit 3A (2 hours): Testing with Jest](Unit-3A.md) **_(Rachel)_**
        *   Lecture (30 min)
            * Testing Code Jest
            * Testing Async Code with Jest
            * Setup and Teardown before Testing with Jest
        *   Lab (1 hr 30 min)
            *   User will write test cases to verify the the functionality of several utility functions using Jest
    *   [Unit 3B (2 hours): Circle CI](Unit-3B.md) **_(Brad)_**
        *   Lecture (30 min)
            * Continuous Integration
            * Continous Delivery
            * CI with Github and Circle CI
            * Understanding Circle CI Logs
        *   Lab (1 hr 30 min)
            *   The student will integrate GitHub with CircleCI and set up a Node.js CI pipeline
    *   [Final Project ( 4 hours)](Unit-Final-Node-Express.md) **_(Rachel)_**
        *   Project Overview (30 min)
            *   Review what we learned so far and go over project details
        *   Project Time(3 hours and 30 min)
            *   Student will be given requirements to build an API, define MongoDB schemas, create authentication and authorization middlewares, and create unit tests with Jest.

