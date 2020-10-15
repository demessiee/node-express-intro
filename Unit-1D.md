# Unit 1-D Lecture

This lecture will cover the following topics:

* APIs
* Express
* Basic Routing
* GET Requests
* Sending JSON
* Serving static assets


It is recommended to follow along by making a project directory for this lecture and running the code samples:

```
mkdir lecture1D
cd lecture1D
npm init
```

## What is an API

In simple terms, an API is a way for a server to communicate with a client. The client could be a website frontend, or a command line tool, or another server.

It is up to  software engineers to define the rules an API so that clients can know exactly how to interface with the server to get the information they need.

Let's take a look at sample API - the Starwars API

Have you ever looked at a website URL and noticed a words separated by slashes?

The urls with alot of slashes are called API endpoints. When we want to get information from an API, a client requests an API Endpoint, and based on that endpoint, the server determines what information gets sent back.


The Starwars API has several endpoints that will return various Starwars information in JSON.

Try going to:

https://swapi.dev/api/films
https://swapi.dev/api/films/1/
https://swapi.dev/api/films/2/
https://swapi.dev/api/people/1/

You'll notice that /api/films sends back a list of all films while /films/1 and films/2 only sends back a single film. Also /people/1 sends back information related to characters in the films.

Most other APIs are structured similarly, you request an URL endpoint and it usually sends back a JSON result.


## Express

Node.js comes with the core http module which can be used to set up a server, however it is somewhat difficult to use. Instead, most developers use the Express module when it comes to setting up an API server.

You can add Express as a dependency by running:

```
$ npm install express
```

You can import it into your code with require():

```js
const express = require('express') 
```

## The most basic express server

With express, you can set up a basic web server in less than 10 lines of code:
```js
//index.js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

```

Try running creating an index.js file with the above code and then run it with:

```
node index.js
```

If your server launched successfully you should see "Example app listening at http://localhost:3000" on your console. As long as your server is running, you won't be able to do anything else on your terminal. You can kill the server process by entering Ctrl + C.

Next, go to http://localhost:3000 on your web browser. You should see Hello World displayed on your browser.

Lets break down exactly what is going on.

1. First we import express with require(), this loads a function onto the express variable that is used to create an express application object.
2. We create an express application object using the express() method, this express application object is what we use to define how our server works
3. We define a port variable to hold the port number we want to run our server on
4. app.get() takes in two arguments: an endpoint as a string, and a callback.

    1. When a client requests the endpoint, express will run the callback which defines what gets sent back

    1. The callback has two arguments passed down, req and res

        1. req contains information about the incoming request 
        2. res is used to send information back to the client and fulfill the request. In the above example res.send() is used to send text, while res.json() is used to send an json object back
5. app.listen is used to start the server. It takes in a port number and a callback. The callback will run if the server launches successfully. The port number will be taken up as long as the server is running, so use another port number if you want to start another server.

## Sending JSON

Lets add in another endpoint for "/api/people":

```js
//index.js
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

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/api/items', (req, res) => {
  res.json(obj)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

```
As shown on line 99, the res.json() method can be used to send any JSON object back to the client, whether thats a string, number, array, or object.

**Best Practice:** If you have a client making a request to an API, you should double check if the API will be sending back text or JSON to ensure that you are handling the data correctly. For example, trying to access a property on a text string will throw an error.

## Knowledge Check 1

What do you use to send a json object back to the client?

```
A. req.json()
B. res.send()
C. res.json()
D. app.get()

```


## URL Parameters

Remember when you went to https://swapi.dev/api/films/1/ and https://swapi.dev/api/films/2/? Did the API developer hardcode a new endpoint for every single film that was created?

URL Parameters are used to specify part of the URL path to be a variable so we can dynamically grab different information based on the URL. In https://swapi.dev/api/films/1/'s case the url segment after films is a URL parameter.


Let's add another endpoint that uses a URL parameter to dynamically determine which item from the itemsList list to send based on the URL endpoint.

```js
//index.js

//add this under the other endpoints
app.get('/api/items/:id', (req, res) => {
  res.json(itemsList[req.params.id])
})
```

To make a segment of the URL endpoint a URL parameter, add a : in front of the URL segment such as the example does with :id.

Now, whatever goes in the id segment of the URL, will be retrievable through req.params.id.

If you go to localhost:3000/api/items/0, req.params.id will be 0 and if you go to localhost:3000/api/items/1 req.params.id will be 1.

In the above example, the req.params.id value is passed as the index to itemsList which will retrieve the appropriate item from itemsList to send to the client.

**Warning:** URL Parameters will default to be strings, so if you want them to be numbers then convert them with parseFloat() or parseInt().

## Error Handling in End Points

There is an issue with the previous example. What happens if the user puts in a negative number or an id that is higher than the length of the itemsList array? Currently it just sends nothing because that is what the array will resolve to.

Let's throw an error if the id is out of bounds:
```js
//index.js

//add this under the other endpoints
app.get('/api/items/:id', (req, res) => {
  if(req.params.id < 0 || req.params.id > itemsList.length - 1){
    throw new Error("id does not exist")
  }else{
    res.json(itemsList[req.params.id])

  }
})
```

Now if you try to provide an id that is out of bounds you will see `Error: "id does not exist` along with a stack trace of where the issue occured for debugging. This will also show up in the console if you try to Fetch the endpoint with fetch().

**Warning**: If you throw an error and don't handle it, it will kill your API server and you will have to restart your server. If you just want to send a failure message to indicate that the client made a bad request, use `res.status(400).send("Bad Request Message")` instead.

## Knowledge Check 2

What do you need to add in front of a path segment to make it a URL parameter?

```
A. URL
B. %
C. ?
D. :

```


## Serving static assets

Express can also serve static assets such as images, html files, txt files. By default, files on your server are not served to the public.


To specify a folder to serve static assets, add the following somewhere between the declaration of the app variable and your first app.get() endpoint:

```js
app.use("/static",express.static(path.join(__dirname, 'public')))
```

Whats going on here?

First we are using the app.use() method to add some middleware to express. We will cover middleware more in depth in the next lecture but for now, just know that middlewares are small add-ons to express to enable more server functionality.

The specific middleware we are using is express.static which comes with our express module we imported. express.static takes in a path directory and sets all static assets under that path directory to be available at a specific mount path. By default the mount path is `/`, but we are using `/static` in the example.

In the above example, express.static is using __dirname/public to be the folder that can serve static assets. If you had an image such as image.png within that the /public folder on your server, it would be accessible at the mount path which in this case is "/static" (e.g. localhost:3000/static/image.png.)

Try downloading an image from the internet and putting in your static assets directory and then try to view the image from the browser.

**Additional Context*: If you are servering html or React files want to have images displayed on your frontend, you need to have those images statically served on the server.


# Unit 1-D Lab

## Lab Overview

Your stakeholders at ABC Solutions Company loved the updated employee data CSV that you provided for them. Some of the other engineering teams have requested an API that would allow them to programmatically access the data from the CSV.

You are now in charge with developing that employee data API.

Your stakeholders are requesting that you create the following GET endpoints:

* /api/employee/id/:id - get a user by their ID string
* /api/employee/search/:search - provide a search string and provide all users that have a first_name, last_name or email that includes the search string.
* /api/employee/department/:department - get all users in the specified department
* /api/employee/promoted/:year - get all users promoted in a particular year

* /static/employee_data.json - allow users to view the employee data JSON file

To complete the lab:

1. Create a web API that serves the specified GET endpoints
2. You will be provided a JSON file containing all of the employee data. You will be reading from this file and sending that data out through your endpoints.
3. Manually verify that your endpoints work and the data returned makes sense by going through the following test cases:
    1. http://localhost:3000/api/employee/id/21-232-8355
    2. http://localhost:3000/api/employee/search/ben
    3. http://localhost:3000/api/employee/department/Engineering
    4. http://localhost:3000/api/employee/promoted/2021
    5. http://localhost:3000/static/employee_data.json



## Lab Starter Code

You will be given starter code that has a basic express app set up. It is up to you to add in the endpoints and expose the static assets. The employee data JSON file will be imported for you to use just like any normal object.

Make to install all of the dependencies with 
```
$ npm install
```

You can run your server with:

```
node index.js
```

You can clone the starter code here:
[LINK]

## Lab Solution

You can get the solution here:
[LINK]

# Knowledge Check Answers

## Knowledge Check 1

What do you use to send a json object back to the client?

```
A. req.json()
B. res.send()
C. res.json()
D. app.get()

```

Answer is C.

## Knowledge Check 2

What do you need to add in front of a path segment to make it a URL parameter?

```
A. URL
B. %
C. ?
D. :

```

Answer is D.


