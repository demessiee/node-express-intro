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