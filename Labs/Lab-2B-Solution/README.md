# Lecture 2-B Lab

## Lab Overview

Your engineering team at ABC Solutions Company has just adopted MongoDB as the their primary database for storing employee data. You are in charge of migrating all of the endpoints to read and write to MongoDB instead of the JSON file.

In addition you must also use Mongoose schemas to model your employee data. Your code base is starting to get complex, so it is recommended to have Mongoose schemas in their own folder calls `models` and import them as needed.

Lastly, your MongoDB database won't have all of the employee data so you will need to import in the in the employee data from the JSON file.

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

### Seeding your MongoDB Database with JSON Data
To seed your MongoDB database run the following(make sure to run it in the same directory as your JSON file):

```
$ mongoimport --jsonArray --db test --collection employees --file employee_data.json
2020-10-05T01:50:27.535-0700    connected to: mongodb://localhost/
2020-10-05T01:50:27.637-0700    943 document(s) imported successfully. 0 document(s) failed to import.
```

If you need a fresh `employee_data.json` file at any point you can make a new copy from the starter code link.

## Lab Solution

You can find the lab solution here:
[LINK]