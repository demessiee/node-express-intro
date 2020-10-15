# Unit 2-A Lecture

This lecture will cover the following topics:

* POST, PUT, and DELETE Requests
* Querystrings
* Middleware
* CORS
* Modularizing Routes


It is recommended to follow along by making a project directory for this lecture and running the code samples:

```
mkdir lecture2A
cd lecture2A
npm init
```

## Middleware

Middlewares are snippets of code that are called before any incoming request. This is useful if we want to run authentication logic or do some preprocessing of the incoming request before we execute an endpoint. We can define our own middleware, use middlewares that came with Express, or use third party middlewares installed with npm. We can also define when we want our middlewares to occur, whether thats before every request or if its only before requests on a certain endpoint. 

**Additional Context:** Middleware is useful because it allows us to modularize code that happens in every endpoint request, such as handling authentication and authorization, instead of having it in our endpoint logic.

Middleware usually have one of the following formats:


```js
function middleware(req,res){

}

function middleware(req,res,next){
    
}

function middleware(err,req,res,next){
    
}
```
`req` represents the incoming request object. `res` represents the response object that we are going to send out. `next` is a function that is used to move onwards from this middleware to the next middleware. Any properties saved to `req` such as` req.value` will be available in the next middleware. If res.send() or res.json() is run by any of the middlewares, the response will be sent to the client and all other middlewares will be skipped including the callback from the endpoint.

`err` is used if you want to handle any errors that were passed to this middleware from previous middlewares. You can pass any errors you encounter(e.g. a failed file read) to the next middleware with next(err). If you pass an error with next(err) and do not handle it in the next middleware, Express will automatically throw an Error. If you use `next()` and there are no more middlewares, Express will also throw an error. 


Lets create a simpleware that logs some details before every incoming request:

```js
//index.js
const express = require('express')
const app = express()
const port = 3000

function logger(err,req,res,next){
  console.log(req)
  next()
}

app.use(logger)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

In the above example, we defined a function called logger that we are going to use as middleware. 

When we want to apply a middleware, we apply it by passing it into app.use(). By default it gets applied to all incoming requests.

Lets try running the server and going to localhost:3000.

If you look back at your terminal, you can see that a bunch of stuff relating to the request was logged. If you refresh the browser and go to localhost:3000 again, the log will happen again.

## Selectively applying middleware

If you want to selectively apply middleware to a specific endpoint, add it in between the endpoint url and the callback.

Lets create a middleware that only happens on a certain endpoint:

```js
//index.js
const express = require('express')
const app = express()
const port = 3000

function userAuthorization(req,res,next){
    console.log(req.params.id)
  if(req.params.id === "superuser"){
      next()
  }else{
      res.send("you do not have permission to view this page")
  }
}



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/protected/:id', userAuthorization, (req, res) => {
  res.send('Secret information')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

Try running the server and go to localhost:3000/protected/user. You will see "you do not have permission to view this page" on the browser. 

Next try going to localhost:3000/protected/superuser. Now you will see "Secret information"

This is because the userAuthorization middleware was run before the /protected/:id endpoint. It checked the id URL parameter and if the id wasn't equal to superuser, it would send "you do not have permission to view this page" otherwise it would skip the middleware and let the endpoint callback handle the request normally.

These are just some examples of middlewares. You can define them however you like and can string as many of them as you want together. 


## Knowledge Check 1

When does middleware typically happen?
```
A. Before your endpoint logic
B. In the middle of your endpoint logic
C. After your end point logic
D. In parallel with your end point logic
```



## POST

When a client creates a POST request, they usually send along a body that goes along with the request.

In Express, we can access that body using *req.body* within the app.post() callback.

```js
const express = require('express')
const app = express()
const port = 3000

let itemsList = [{
    name:"apple",
    price:3.50
},
{
    name:"banana",
    price:2.99
},
{
    name:"carrot",
    price:1.75
}]

app.use(express.json()); //middleware to parse JSON bodies for POST requests

app.post('/api/items', (req,res) => {
    console.log(req.body)
    itemsList.push({name:req.body.name,price:req.body.price})
    res.json(itemsList)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

```
Unfortunately, we can't send POST requests in the browser address URL. Instead we are going to use a REST client to test out our POST request.



We are going to use the Advanced REST Client by Google.

You can install it here: 
https://install.advancedrestclient.com/install

Make sure to add the Header {Content-Type:Application/json} and to use http:localhost:3000/api/items as your endpoint (dont use https)

Then add the following in the body:
```js
{
    "name":"durian","price":6.00
}
```

You'll notice that every time you run the POST request, the list of items returned in the JSON response keeps growing. This is because the POST request is pushing a new object onto itemsList based on the information you passed into the body.

## PUT

PUT requests are similar to POST requests, except they are used to update a resource that already exists rather than create a new resource. PUT requests also allow for a body.

```js
const express = require('express')
const app = express()
const port = 3000

let itemsList = [{
    name:"apple",
    price:3.50
},
{
    name:"banana",
    price:2.99
},
{
    name:"carrot",
    price:1.75
}]

app.use(express.json()); //middleware to parse JSON bodies for POST requests

app.put('/api/items', (req,res) => {
    console.log(req.body)
    itemsList[req.body.index] = {name:req.body.name,price:req.body.price}
    res.json(itemsList)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

```

Make a PUT request using the Advanced REST Client and pass in the following to the body:


```js
{
    "index":0,"name":"watermolon","price":8.20
}
```

The request response should have sent the list of items with the first item altered to contain the information sent with your body.

## DELETE

The DELETE request is used to delete resources. It does not allow you to add a body. You can specify what to delete by using a URL parameter that refers to an id that you want to delete.


```js
const express = require('express')
const app = express()
const port = 3000

let itemsList = [{
    name:"apple",
    price:3.50
},
{
    name:"banana",
    price:2.99
},
{
    name:"carrot",
    price:1.75
}]

app.use(express.json()); //middleware to parse JSON bodies for POST requests

app.delete('/api/items/:id', (req,res) => {
    itemsList.splice(req.params.id.index,1) //removes 1 element from the array starting from the index specified in the URL parameter
    res.json(itemsList)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

```

Try making a DELETE request in the Advanced REST Client. Use http:localhost:3000/api/items/0 as the endpoint.

You'll notice that the request response will send the list of items with the first item deleted.

## Knowledge Check  2

Which HTTP requests types allow the use of a body? Select all that apply.
```
A. GET
B. POST
C. PUT
D. DELETE
```


## Express.json() middleware for POST and PUT requests that use body

POST and PUT requests that use a body must have the express.json() middleware applied otherwise they will be unable to read the body. Make sure to apply the middleware before your endpoint routes.

You can apply the middleware with:

```js
app.use(express.json()) //middleware to parse JSON bodies in POST and PUT requests
```


## Querystrings

Querystrings are the key value pairs that you see after a question mark in a URL such  as `http:localhost:3000/api/items?name=kiwi&price=4.50` 

Querystrings are automatically parsed by Express and can be accessed from req.query

Here is the previous POST example using querystrings instead of a body to get the item data. 


```js
const express = require('express')
const app = express()
const port = 3000

let itemsList = [{
    name:"apple",
    price:3.50
},
{
    name:"banana",
    price:2.99
},
{
    name:"carrot",
    price:1.75
}]

app.use(express.json()); //middleware to parse JSON bodies for POST requests

app.post('/api/items', (req,res) => {
    console.log(req.query)
    itemsList.push({name:req.query.name,price:parseFloat(req.query.price)})
    res.json(itemsList)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

```

Try running a POST request from the Advanced REST Client using `http:localhost:3000/api/items?name=kiwi&price=4.50` as the URL endpoint.

You'll notice a new item in the response with the details you added using querystrings.

**Aditional Context** Querystrings are handy if you want to avoid sending a body and instead want to include all the info in the URL. However, if you have many fields you want to include or if the URL gets too long and hard to read, it would be better to send a body.

**Warning:** Querystrings will initially be strings, so if you want them to behave as numbers be sure to use parseFloat() or parseInt()


## Knowledge Check 3

Where can you access the querystring data from your request?
```
A. req.body
B. req.params
C. req.query
D. req.querystring
```


## CORS

CORS stands for Cross-origin Resource Sharing (CORS) and is used to specify which clients are allowed to request from your server. 

We can use the third party `cors` module to configure our CORS settings for our server.

To add `cors` as a dependency run:
```
$ npm install cors
```

To import it into your code, use require():

```js
const cors = require('cors')

```

**Best Practice:** If you ever try to make a client side fetch request to an external API (not your own server's API) and you get a same-origin policy error, one way to get around it is to have your server make the API request instead your client. You can do this by exposing the external API's information through your own endpoint. That way, as long your frontend client is on the same origin(e.g. https://localhost:3000 or https://myserverwebsite.com/ ) as the server, the same-origin policy wont occur.

### Enable CORS for all client origins

To enable CORS for all client origins, add the cors() middleware to Express as is:


```js
//index.js
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors()) //adds the cors middleware, enables CORS for all client origins by default



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

### Configuring CORS

You can configure CORS by passing in a configuration object into the cors() method:

```js
//index.js
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

var corsOptions = {
  origin: 'http://example.com', //allows requests originating from example.com
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions)) //adds the cors middleware, with options configured



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

Here are the important CORS configuration object properties to be aware of:
* origin - specifies which clients to allow requests from. Use an array if you want to allow multiple clients.
* methods - specifies which HTTP methods to allow (GET, POST, PUT , DELETE, and more...)
* preflightContinue - enables preflight if true
* optionSuccessStatus - defaults to 204, which breaks with some legacy browsers so you should change it

To read more about CORS configuration options, read here: http://expressjs.com/en/resources/middleware/cors.html


### Enabling CORS on a single route

If you want to apply cors to a single route, add the cors() middleware in between the route url endpoint and its callback:

```js
//index.js
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000




app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/corsRoute', cors(),(req, res) => { //you can pass in a cors config object if you need to configure the cors options
  res.send('Cors!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```


## Knowledge Check  4

Why is it important to configure CORS correctly?

```
A. To make sure your server core is running as efficiently as possible
B. To make sure that only specific client URLs can make requests to your server
C. To enable middleware to work for your server
D. To enable your server to send static assets
```

## Modularing Routes
 
**Best Practice:** It might seen easier to maintain all of our endpoint routes within the index.js file right now, however once our codebase gets more complex it is better to store all our routes in a separate routes.js file and import it into our index.js file.

Luckily, express has a way to add routes to our server as middleware route handlers.

```js
//routes/items.js
var express = require('express')
var router = express.Router()

//any middleware added here will only apply to routes in this file
router.use(express.json()); //middleware to parse JSON bodies for POST requests


let itemsList = [{
    name:"apple",
    price:3.50
},
{
    name:"banana",
    price:2.99
},
{
    name:"carrot",
    price:1.75
}]


// define routes for items
router.get('/items', function (req, res) {
  res.json(items)
})

router.get('/items/:id', function (req, res) {
  res.json(itemsList[req.params.id])
})
router.post('/items', (req,res) => {
    console.log(req.body)
    itemsList[req.body.index] = {name:req.body.name,price:req.body.price}
    res.json(itemsList)
})


module.exports = router
```

We can then import this route into our index.js file:

```js
const express = require('express')
const items = require('./routes/items.js)
const app = express()
const port = 3000

app.use("/api",items)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

```

We just added our items route handler as middleware to our express app, using `app.use()`. We also mounted those routes onto `/api`, so if you want to get to the `/items` endpoint we have to go `/api/items`.

# Unit 2-A Lab

## Lab Overview

Your stakeholders at ABC Solutions Company want you to update your employee data API so that it can also support POST, PUT and DELETE requests to modify employee data.

Your stakeholders are requesting that you add the following endpoints:

* GET /api/employees - gets all employees as a JSON array
* GET /api/employee/salary - get all users with a salary that is between the `high` and `low` values listed as querystrings parameters
* POST /api/employee - adds a new employee with information added in body, updates an existing employee if the id already exists 
* PUT /api/employee - updates an employee employee with information added in body, inserts employee if the id doesnt exist
* DELETE /api/employee/:id - deletes an employee based off their id

```

```

### Body format
The POST and PUT endpoints should accept the following body or querystring format:

```
{
  id,
  first_name,
  last_name,
  email,
  department,
  last_promoted,
  salary
}

```

Here are the default values you should use if any of the body properties are missing for the POST or PUT request:

* id - if id is null, throw an error
* first_name - "N/A"
* last_name - "N/A"
* email - "N/A"
* department - "N/A"
* last_promoted - 2021
* salary - 0


### Additional Lab Requirements
* Your endpoints should be reading and writing from the employee_data.json file. When reading from the file make sure to use JSON.parse() to convert the file text into a JSON object. Also be sure to use JSON.stringify() to convert any JavaScript objects into text strings before you write them out to the employee_data.json file.

* The POST, PUT, and DELETE endpoints should return the endpoint that was just added/updated/deleted back to the client.

* Move your endpoints that are currently in index.js into an employee route handler file named `employeesRoutes.js` and store that file under a `routes` folder. Then import the employee route handler into your index.js file.



## Lab Starter Code


Your lab for Unit 2A will start off where your lab for unit 1D ended off.

You can clone your starter code here:
[LINK]

Make sure to install all of the dependencies with:
```
$ npm install
```

You can run your server with:

```
node index.js
```

Test your solution with the Advanced REST Client to verify that all your endpoints work.

## Lab Solution

You can find the lab solution here:
[LINK]

# Knowledge Check Answers

## Knowledge Check 1

When does middleware typically happen?
```
A. Before your endpoint logic
B. In the middle of your endpoint logic
C. After your end point logic
D. In parallel with your end point logic
```

Answer is A.


## Knowledge Check  2

Which HTTP requests types allow the use of a body? Select all that apply.
```
A. GET
B. POST
C. PUT
D. DELETE
```

Answer is B and C.

## Knowledge Check  3

Where can you access the querystring data from your request?
```
A. req.body
B. req.params
C. req.query
D. req.querystring
```

## Knowledge Check  4

Why is it important to configure CORS correctly?

```
A. To make sure your server core is running as efficiently as possible
B. To make sure that only specific client URLs can make requests to your server
C. To enable middleware to work for your server
D. To enable your server to send static assets
```

Answer is B.