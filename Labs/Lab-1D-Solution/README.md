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
https://github.com/flatiron-school/node-express-intro/tree/main/Labs/Lab-1D-Starter
## Lab Solution

You can get the solution here:
https://github.com/flatiron-school/node-express-intro/tree/main/Labs/Lab-1D-Solution