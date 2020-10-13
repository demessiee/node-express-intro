# Unit 2-C Lab

## Lab Overview

You are now going to modify your previous lab and add in some basic authentication and authorization.

Create the following new endpoints:
* - POST /user/login - authenticates a user and sends back a JWT token with their username encoded
* - POST /user/signup - signs up a new admin user and saves their credentials to mongoDB
* - GET /user/users - returns a list of all users , showing their usernames but not their passwords

Both of these POST requests should accept the following body format:

```js
{
  username: String,
  password: String
}
```

### Additional Lab Requirements

* These POST requests should read and write from a new MongoDB collection named `Users`.

* Make sure to hash your passwords with bcrypt when inserting them into your MongoDB instance

* You must also create a new Mongoose schema to model a `User` in `models/user.js`. The schema should be similar to the POST request body format and should have the username and password properties as required

* Put these endpoints in a separate route handler file  in `/routes/user.js` and import them into your index.js file.

* Create your JWT authentication middleware in `/middleware/jwtAuth.js` and import it into your index.js file.

* Apply your JWT authentication middleware on all of the previous  POST, PUT and DELETE `/api/*` routes (don't apply authentication middleware on the new `/user/*` routes)

## Lab Starter Code

Your lab for Unit 2B will start off where your lab for unit 2A ended off. 

You can clone your starter code here:
[LINK]

Make sure to install all of the dependencies with:
```
$ npm install
```

You can run your server with:

```
$ node index.js
```

## Lab Solution

You can find the lab solution here:
[LINK]





