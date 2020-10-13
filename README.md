# Course 1 Outline


## Node and Express 



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
                *   String functions (map, filter, sort)
                *   Template Literals
                *   Spread Operator
                *   Destructuring
                *   Arrow Functions
            *   Require and Export
        *   Lab (1 hr 30 min)
            *   Students will set up a local Node.js development environment and create a couple utility functions which they will import into a main function
    *   [Unit 1B (2 hours): Core Node Modules](https://drive.google.com/file/d/1wt2rZ-5g1nOg0x6SqBSYkD1Cv_c2KE7_/view?usp=sharing) **_(Brad)_**
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
    *   [Unit 1C (2 hours): Asynchronous JavaScript](https://drive.google.com/file/d/1hD6eoYd8lZDH_kmNwSuOGvhuWK0ZvwOx/view?usp=sharing) **_(Rachel)_**
        *   Lecture (30 min)
            *   The Event Loop
            *   Callbacks
            *   setTimeout and setInterval
            *   Promises
            *   Async and Await
            *   Fetch API
        *   Lab (1 hr 30 min)
            *   The student will learn how to Fetch data from an external API and handle the results
    *   [Unit 1D (2 hours) Basic Web APIs with Node.js and Express](https://drive.google.com/file/d/10VNbAkactmyWzHOS42gMNarSlG4tpv8b/view?usp=sharing) **_(Brad)_**
        *   Lecture (30 min)
            *   Express
            *   Basic Routing
            *   URL Parameters
            *   Get Requests
            *   JSON
            *   Serving static assets
        *   Lab (1 hr 30 min)
            *   The student will set up a few GET endpoints that serve text, JSON, and static assets using Node.js and Express
*   Day 2 (8 hours)
    *   [Unit 2A (2.5 hours): More about Basic Web APIs with Node.js and Express ](https://drive.google.com/file/d/1syOWlIq8xoe188fGxgQbpWQ44W7zaFU3/view?usp=sharing)**_(Brad)_**
        *   Lecture (30 min)
            *   Post, Put, and Delete Requests
            *   Querystrings
            *   Middleware
            *   CORS
        *   Lab (2 hrs)
            *   The student will create a CRUD Web API that writes to a file for memory instead of a database
    *   [Unit 2B (2.5 hours): Integrating with a Database](https://drive.google.com/file/d/1gUMQ-NoPrc2pUGeqGZnG89ee2FW2KaZ0/view?usp=sharing) **_(Rachel)_**
        *   Lecture (30 min)
            *   Reading and Writing to a NoSQL database
            *   Using a ORM/ORD
        *   Lab (2 hrs)
            *   The student will transition their CRUD Web API to write to a database instead of a file
    *   [Unit 2C (3 hours): Authentication and Authorization with Express](https://drive.google.com/file/d/17ltn8UWKECay50taaVp6L19AGEddagPs/view?usp=sharing) **_(Brad)_**
        *   Lecture (30 min)
            *   Authentication
            *   Authorization
            *   JSON Web Tokens
            *   Bcrypt
        *   Lab (2 hr 30 min)
            *   The student will build a web app that allows new users to sign up, authenticates existing users via username/password so they can access protected resources
*   Day 3 (8 hours)
    *   [Unit 3A (2 hours): Testing with Jest](https://drive.google.com/file/d/1INBl-t783rp_MZ75j490o5R_wItgm9cd/view?usp=sharing) **_(Rachel)_**
        *   Lecture (30 min)
            *   Testing with Jest 
            *   Debugging an Express App
        *   Lab (1 hr 30 min)
            *   User will write test cases to verify their CRUD API using Jest
    *   [Unit 3B (2 hours): Circle CI](https://drive.google.com/file/d/1RxY_fzYo31eAkIQIqj1UI3lrz81OMvT5/view?usp=sharing) **_(Brad)_**
        *   Lecture (30 min)
            *   CI/CD explanation
            *   Integrating with CircleCI
            *   Reading and Debugging from CircleCI reports
        *   Lab (1 hr 30 min)
            *   The student will set up a CI/CD pipeline with node.js and express
    *   [Final Project ( 4 hours)](https://drive.google.com/file/d/1Os4mqzWqCDVFOOIAn6TK_CVpfbfPPEQI/view?usp=sharing) **_(Rachel)_**
        *   Project Overview (30 min)
            *   Review what we learned so far and go over project details
        *   Project Time(3 hours and 30 min)
            *   Student will be given requirements to build an API and will set up a CI/CD pipeline to build and deploy it
