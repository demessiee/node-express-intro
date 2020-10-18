## Node and Express Course Final Project

### Final Project Overview

You are the lead developer in charge of building the backend API for a job board website.

There are two main users of your website, and they should be able to do the following on your website:

Companies
* Companies can create a company account and log in
* Companies can post a job posting
* Companies can see candidates who applied to their job posting

Candidates
* Candidates create an account and log in
* Candidates can apply to jobs
* Candidates can view all the jobs they applied to


### Endpoints

To support the customer feature requirements, you must build the following end points:

Companies
* GET /companies/ - sends a list of all companies
* GET /companies/company/:id - sends company with specified id
* POST /companies/company - inserts company with specified body
* PUT /companies/company - updates company with specified body
* DELETE /companies/company/:id - deletes company with specified body
* POST /companies/login - authenticates a company's credentials and then sends a JWT token if successful

Candidates
* GET /candidates/ - sends a list of all candidates
* GET /candidates/candidate/:id - sends candidate with specified id
* POST /candidates/candidate - inserts candidate with specified body
* PUT /candidates/candidate - updates candidate with specified body
* DELETE /candidates/candidate/:id - deletes candidate with specified id
* GET /candidates/candidate/:id/jobs - gets a list of all jobs applied to by candidate with specified id
* POST /candidates/login - authenticates a candidate's credentials and then sends a JWT token if successful

Jobs
* GET /jobs/ - sends a list of all jobs
* GET /jobs/job/:id - sends job with specified id
* GET /jobs/search/:search - sends a list of all jobs that include the search query within the title, company name, or skills list
* POST /jobs/job - inserts job with specified body. The company_id should be taken from the encoded id in JWT.
* PUT /jobs/job - updates job with specified body
* DELETE /jobs/job/:id - deletes job with specified id
* GET /jobs/job/:id/candidates - sends a list of all candidates who applied to a job with specified id
* GET /jobs/job/:id/qualified - sends a list of all candidates who applied to a job with specified id who pass all the specified job skill requirements
* PUT /jobs/job/:id/apply/ - updates the candidate list and qualified list for the specified job id with the candidate id encoded in the JWT. Only candidates who have the necessary years of experience and all listed job skills can be added to the qualified list.


### Data Schemas
Your collections should have the following schemas:

Candidates

```js
{
  _id:String, //use an email as the _id, e.g. person@gmail.com
  full_name: String, //first and last name combined with an undescore, e.g john_smith
  password:String,
  skills:[String],//array of skills, e.g. [javascript,node.js]
  years_of_exp: Number
}

```

Companies

```js
{
  _id:String //use the company name in one string e.g. cvs_health
  password: String
}

```
Jobs
```js
{
  company_id: String //use the posting company's _id
  title: String,
  skills:[String], //array of required skills, e.g. [javascript,node.js]
  years_of_exp_required: Number,
  candidates:Array[String], //array of candidate _ids
  qualified:Array[String] //array of candidate _ids who have all of the required skill and years of experience
}
```

### Authentication and Authorization

Separate JWT tokens will be given out to Candidates who log in and Companies who log in. 

For Candidates:
* The JWT should encode the candidate's email
For Companies:
* the JWT should encode the companies company_name

Make sure to use separate private keys for the different JWTs.

The following endpoints should be accessible without any JWT authorization:

* GET /companies/ - sends a list of all companies
* GET /companies/company/:id - sends company with specified id
* POST /companies/company - inserts company with specified body
* POST /companies/login - authenticates a company's credentials and then sends a JWT token if successful


* GET /candidates/ - sends a list of all candidates
* GET /candidates/candidate/:id - sends candidate with specified id
* POST /candidates/candidate - inserts candidate with specified body
* POST /candidates/login - authenticates a candidate's credentials and then sends a JWT token if successful


* GET /jobs/ - sends a list of all jobs
* GET /jobs/job/:id - sends job with specified id
* GET /jobs/search/:search - sends a list of all jobs that include the search query within the title, company name, or skills list


All Candidates should be able to access the following endpoints:
* PUT /jobs/job/:id/apply/ - updates the candidate list and qualified list for the specified job id with the candidate id encoded in the JWT. Only candidates who have the necessary years of experience and all listed job skills can be added to the qualified list.

Only Candidates that have the same id encoded in their JWT as the resource they are trying to modify should be able to access the following endpoints:
* PUT /candidates/candidate - updates candidate with specified body
* DELETE /candidates/candidate/:id - deletes candidate with specified id
* GET /candidates/candidate/:id/jobs - gets a list of all jobs applied to by candidate with specified id

All Companies should be able to access the following endpoints:
* POST /jobs/job - inserts job with specified body. The company_id should be taken from the encoded id in JWT.


Only Companies that have the same id encoded in their JWT as the resource they are trying to modify should be able to access the following endpoints:

* PUT /companies/company - updates company with specified body
* DELETE /companies/company/:id - deletes company with specified body

Only Companies that have the same id encoded in their JWT as the job's company_id property can request or modify the following endpoints:

* PUT /jobs/job - updates job with specified body
* GET /jobs/job/:id/candidates - sends a list of all candidates who applied to a job with specified id
* GET /jobs/job/:id/qualified - sends a list of all candidates who applied to a job with specified id who pass all the specified job skill requirements

### Utility Functions

In all our previous examples, we combined our business logic with our server logic in our endpoints. That was okay because there wasn't much business logic since we were mostly making CRUD commands to our database. With more complex codebases, it is important to separate the business logic from the server logic because it makes it easier to reuse and test business logic.

Create the following functions utility functions and import them into your endpoints as needed:

```js
/* Function: getAppliedJobs
    Input: candidateId(String) //contains an email of a candidate
    Input: jobList //contains a list of job objects that the function will reference
    Output: Returns a list of all jobs within jobList that was applied to by the candidate (include the full job object schema)
/****/
function getAppliedJobs(candidateId, jobList) {
  //used to assist GET /candidates/candidate/:id/jobs
}

/* Function: searchJobs
    Input: searchQuery(String) //contains the search query the function will search for
    Input: jobList //contains a list of job objects that the function will reference
    Output: Returns a list of all jobs within jobList that contain the search query within the title, company name, or skills list
/****/
function searchJobs(searchQuery) {
  //used to assist GET /jobs/search/:search
}


/* Function: filterCandidate
    Input: candidate //contains a candidate object that the function will reference
    Input: job //contains a job object that the function will reference
    Output: Returns a new job object with the candidate id added to the end of the job object's candidate list. If the candidate has the required years of experience or more and has all of the required skills in the job object's skill list, then add the candidate id to the end of the job object's qualified list.
/****/
function filterCandidate(candidate, searchQuery){
//used to assist PUT /jobs/job/:id/apply/:candidateId 
}

```
Feel free to create any more utility functions that you think are necessary.


### Testing with Jest

Write unit tests for all the utility functions that you created using Jest.

### Verifying that your API is working correctly

Manually test your API to ensure that it is working.

Here are some general things to test:
* Create a couple of Company accounts and Candidate accounts
* Verify that you can get a list of Companies and Candidates
* Verify that you update and Company and Candidate accounts only using the correct JWTs
* Verify that you can post a Job with a verified Company
* Verify that a Job can only be updated by the Company that created it
* Verify that you can get a list of all Jobs
* Verify that you can search across jobs correctly
* Verify that a verified Candidate can apply to a job
* Verify that a verified Candidate can get a list of all Job's they applied to
* Verify that a verified Company can get a list of all Candidates that applied to a job they created (and that other companies can't)
* Verify that only qualified candidates get added to a Job's qualified list


## Starter Code

There isn't any starter code for the final project. Use the best practices you've learned to set up your project folder structure.

## Solution

The solution for the Final Project can be found here:
https://github.com/flatiron-school/node-express-intro/tree/main/Labs/Lab-Node-Express-Final-Project-Solution


