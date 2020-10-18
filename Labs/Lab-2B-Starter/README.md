
# Unit 2-B Lab

## Lab Overview

Your engineering team at ABC Solutions Company has just adopted MongoDB as their primary database for storing employee data. You are in charge of migrating all of the endpoints to read and write to MongoDB instead of the JSON file.

In addition, you must also use Mongoose schemas to model your employee data. Your code base is starting to get complex, so it is recommended to have Mongoose schemas in their own folder calls `models` and import them as needed.

Lastly, your MongoDB database won't have all of the employee data so you will need to import in the employee data from the JSON file.

**Hint**: When inserting a new employee with POST, just use save(). When updating an existing employee with PUT, first use findOne() then modify the result and then use save(). You can't update an employee with save() without first finding them in the database.

## Lab Starter Code

Your lab for Unit 2B will start off where your lab for unit 2A ended. 

You can clone your starter code here:
https://github.com/flatiron-school/node-express-intro/tree/main/Labs/Lab-2B-Starter

**Note:** Make sure to swap the MongoDB database connecting string in `index.js` with your own cloud MongoDB instance's connection string.

Make sure to install all of the dependencies with:
```
$ npm install
```

You can run your server with:

```
$ node index.js
```

### Seeding your MongoDB Database with JSON Data

To import the all employees from the employee data JSON file into your MongoDB database as documents, take the following steps:

1. Connect to your MongoDB instance with Compass
2. Select the database you want to use
3. Select the `employees` collection, create a new collection named `employees` if it doesn't exist yet
4. Click the Add Data dropdown, click Import File, browse to `employee_data_master_copy.json`, make sure to select JSON as the file type, then click Import.
5. Verify that your data was added successfully (there should be 943 documents)


Here's the official documentation on importing data into MongoDB.
https://docs.mongodb.com/compass/master/import-export




If you need a fresh `employee_data.json` file at any point you can copy over the contents from `employee_data_master_copy.json` which should also be in the public folder of your lab.

## Lab Solution

You can find the lab solution here:
https://github.com/flatiron-school/node-express-intro/tree/main/Labs/Lab-2B-Solution

**Note:** Make sure to swap the MongoDB database connecting string in `index.js` with your own cloud MongoDB instance's connection string if you test out the solution.
