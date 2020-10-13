# Unit 1-B Lab

## Lab Overview

You are an employee in the IT department of ABC Solutions Company. You are tasked with creating a new CSV file that will be the master list of all employee info for the next year. 

This year, the following changes are happening to employees:

* Everyone in the Engineering department whose last promotion year was 2018 or before is going to be promoted and given a 20% raise
* Everyone in the Marketing department whose last promotion year was 2017 or before is going to be promoted and given a 5% raise
* Everyone in Research and Development is going to be given a 5% pay decrease
* Everyone in the Sales department with a salary of over $100,000 has to be laid off and removed from the employee list
* The Services department merged with the Support department so all employees under Services will have their department changed to Support

In addition, some of the employee email data became corrupted. If an employee is missing an email, you must regenerate a new email using the first initial of their first_name and their last_name and end it with @abc.com. (e.g. Bob Smith will be bsmith@abc.com)

You are provided with last years CSV file of employee data. It has the following header structure:

```
id	first_name	last_name	email	department	last_promoted	salary
```

You must write a Node.js script that will read from last years CSV file and will output a new CSV file with all of the employee data changes that are happening this year as well as fixing the corrupted emails. For newly promoted employees, use '2021' as their promotion date. All values in the output CSV should be strings.

You will need to provide a path to last years CSV file and a path to the output file as commandline arguments. You should be able to run your project with:

```
node index.js employee_data.csv updated_employee_data.csv
```

You will also be using the [json2csv](https://www.npmjs.com/package/json2csv) and [csvtojson](https://www.npmjs.com/package/csvtojson) third party npm modules to complete your project. Refer to their documentation pages for information on how to use them.

To complete the lab:
1. Create a Node.js project that reads from last years employee data CSV file, updates the employee data according to the changes that are happening this year, and outputs the new employee data
2. Provide a path to last years employee data CSV file and a path to the output employee data CSV file as commandline arguments
3. Diff your output file with a solution output file to verify that you updated the employee data correctly.

## Lab Starter Code

You will be provided with last years employee data in a CSV file named `employee_data.csv`. You will also be provided with a solution output CSV file to compare your output file with named `updated_employee_data_solution.csv`.

You can compare the output files with :

```
diff updated_employee_data_solution.csv updated_employee_data.csv

```

Part of the lab learning objectives is to launch your project from scratch with `npm init` and install all the necessary dependencies with `npm install`.

You can get the `employee_data.csv` file here:
[LINK]

## Lab Solution

You can view the lab solution here:
[LINK]