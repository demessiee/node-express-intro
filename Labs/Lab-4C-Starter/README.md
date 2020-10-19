# Unit 4-C Lab

## Lab Overview
Your stakeholders at ABC Solutions company want you to create a user interface for the employee data API that you created earlier in Lab 2B.

Here's an example of what the solution should look like:
![employee_frontend](/images/employee_frontend.png)

Your user interface should have the following features:
* A table that displays all the employees that have been queried. This should show all employees upon launch.
* A form that allows the user to insert a new employee into the database when they press a Submit button. The form also has the ability to update an existing user if they press an Update button. The form should have the following inputs:
    * id
    * first_name
    * last_name
    * email
    * department
    * salary
    * last_updated
* A search feature to update the table based on a keyword search (/api/employee/search/:search)
* A search feature to update the table based on a salary range (/api/employee/salary?high=100000&low=50000)
* A search feature to update the table based on an ID search (/api/employee/id/:id)
    * If an ID is found, this feature should also populate the submit/update form fields
* A feature to repopulate the table with all employees

## Lab Starter Code

You will be given a copy of the solution from Lab 2B, but it will be modified to have CORS configured so that your React app can access its API. (The default CORS setting is for the React app to be hosted on localhost:3000).

You will also be given some starter React code that does a GET request from the server, stores the result in a state variable and displays the total number of employees.

You can access the starter code files here:
https://github.com/flatiron-school/node-express-intro/tree/main/Labs/Lab-4C-Starter

**Note:** Make sure to swap the MongoDB database connecting string in the `index.js` file of your server folder with your own cloud MongoDB instance's connection string.

Be sure to install all the dependencies in both the server folder and the client folder. Also, run the server before you start the client.


To install server dependencies:
```
$ npm install
```

To run the server:
```
$ node .
```

To install client dependencies:
```
$ npm install
```

To run the client:
```
$ npm start
```



## Lab Solution
You can view the lab solution here:
https://github.com/flatiron-school/node-express-intro/tree/main/Labs/Lab-4C-Solution

**Note:** Make sure to swap the MongoDB database connecting string in the `index.js` file of your server folder with your own cloud MongoDB instance's connection string if you test out the solution.