# Unit 3-B Lecture

In this lecture we will cover:
* Continuous Integration
* Continous Delivery
* CI with Github and Circle CI
* Understanding Circle CI Logs

It is recommended to follow along by making a project directory for this lecture and running the code samples:

```
mkdir lecture3B
cd lecture3B
npm init
```


## CI/CD Overview

![ci-cd](./images/unit-3B-ci-cd.png)

Here's a high level overview of the CI/CD phases:

1. Continuous Integration Phases
    1. First, a CI process automatically merges developers' code into a central respository when they make commits to a main branch
    2. Then automated builds and tests are run
    3. If the builds are successfuly, they are labeled and stored. If not, developers are notified that their build failed and are shown what errors may of occured in the build process
2. Continuous Delivery Phases
    1. The latest successful build from the CI phase is deployed to a test environment
    2. Integration tests, load tests, and other tests are run
    3. If tests are successful, the builds can be deployed to production after a manual approval. Otherwise, a report of what went wrong will be sent out. 
3. Continuous Deployment Phases
    1. In Continuous Ceployment, builds are automatically deployed to Production after passing tests in the staging environment


## Continuous Integration 
Continuous integration is a DevOps software development practice where developers regularly merge their code changes into a central repository, after which automated builds and tests are run. Continuous integration most often refers to the build or integration stage of the software release process and entails both an automation component (e.g. a CI or build service) and a cultural component (e.g. learning to integrate frequently). The key goals of continuous integration are to find and address bugs quicker, improve software quality, and reduce the time it takes to validate and release new software updates.

### Why is Continuous Integration Needed?
In the past, developers on a team might work in isolation for an extended period of time and only merge their changes to the master branch once their work was completed. This made merging code changes difficult and time-consuming, and also resulted in bugs accumulating for a long time without correction. These factors made it harder to deliver updates to customers quickly.

### How does Continuous Integration Work?
With continuous integration, developers frequently commit to a shared repository using a version control system such as Git. Prior to each commit, developers may choose to run local unit tests on their code as an extra verification layer before integrating. A continuous integration service automatically builds and runs unit tests on the new code changes to immediately surface any errors.

## Continous Delivery

Continuous delivery is a software development practice where code changes are automatically prepared for a release to production. Continuous delivery expands upon continuous integration by deploying all code changes to a testing environment and/or a production environment after the build stage. When properly implemented, developers will always have a deployment-ready build artifact that has passed through a standardized test process. 

Continuous delivery lets developers automate testing beyond just unit tests so they can verify application updates across multiple dimensions before deploying to customers. These tests may include UI testing, load testing, integration testing, API reliability testing, etc. This helps developers more thoroughly validate updates and pre-emptively discover issues. With the cloud, it is easy and cost-effective to automate the creation and replication of multiple environments for testing, which was previously difficult to do on-premises.

## Continuous Delivery vs Continuous Deployment

With continuous delivery, every code change is built, tested, and then pushed to a non-production testing or staging environment. There can be multiple, parallel test stages before a production deployment. The difference between continuous delivery and continuous deployment is the presence of a manual approval to update to production. With continuous deployment, production happens automatically without explicit approval. 

Just because a build passed the staging environment does not mean that it always work in production. To ensure a successful deployment to production. Continuous Deployment proccesses may use deployment patterns such blue-green deployments to stagger their deployment release across server instances.

### Deployment patterns

#### Rolling Deployment
Server instances within the server group(collection of server instances) are slowly replaced with new server instances with the latest build. The number of server instances that are replaced starts of small, but slowly grows if there are no issues detected as users interact with the new server instances.

#### Canary Deployment
Similar to rolling deployments, Canary deployments starts off by replacing a small percentage of the server instances with the latest build. However, specific users are then routed towards those server instances to test them out. These users could be beta testers or internal users. Once the new changes are deemed safe, the deployment can continue to the rest of the server instances

### Blue Green Deployment ( also known as red black or A/B)

Blue Green deployment is when an entirely new server group is created with new server instances that have the latest build. This new server group is run in parallel with the old server group. Traffic is slowly transfered from the old server group to the new server group.

The old server group can be called the blue environment while the new server group can be known as the green environment. Once production traffic is fully transferred from blue to green, the blue server group can remain idle in case of rollback or be pulled from production.

Blue Green deployment takes more infrastructure cost to duplicate the entire server group, but is easier to rollback in case of issues. 

## Knowledge Check 1
What is the difference between Continous Integration and Continuous Delivery

```
A. Continous Delivery is manual while Continuous Integration is automatic
B. Continous Integration happens after Continuous Delivery
C. Continuous Integrations is about building and testing your code while Continous Delivery is about deploying it to users
D. Continuous Delivery is about building and testing your code while Continous Intergation is about deploying it to users
```



## CI with Circle CI and GitHub

Here's a general idea of how CI and CD work with GitHub and Circle CI

1. You connect your Circle CI account with a github repo. Circle CI makes this easy by allowing you to log in with GitHub credentials. From there you just press a connect button on their website to connect a GitHub repo with circle ci
2. You define a config.yml file in your repo to define your CI pipeline stages
3. You make a commit to the main branch of your git repo to kick off your CI pipeline
4. The Node.js default pipeline does the following
    1. Creates a docker container that can run Node.js
    2. Sets up environment variables
    3. Gets your repo code from Github and saves it to the container
    4. Checks for a package.json file
    5. Checks the cache to see if there were any dependencies from the previous build attempt that we can reuse
    6. Installs dependencies listed in package.json using npm install
    7. Saves newly installed dependencies to the cache
    8. Runs your tests with `npm run test` script


## Knowledge Check 2
Which of the following deployment patterns spins up a whole new server group with new server instances?

```
A. Canary
B. Rolling
C. Blue Green
```



# Unit 3-B Lab

## Lab Overview
In this lab you will be setting up a CI pipeline using Circle CI and Github.

The lab instructions will purposely have you encounter pipeline errors so that you can learn to understand what the error reports mean and fix them.

### Part 1: Connecting GitHub to Circle CI

Create a [Github](https://github.com/) account if you don't have one already.

Log in to GitHub and create a new repository.
Give the repository any name and make sure to check the option to have a README.

![create_github_repo](./images/create_github_repo.png)

Clone your repo locally, edit the README and commit your changes to make sure that you can push to the repo.

Once your repo is created, head over to [circleci.com](https://circleci.com/signup/) and sign up for an account using GitHub.

![circleci_login](./images/circleci_login.png)

Pick your own username as the organization when Circle Ci prompts you to do so.

You should now be in the projects section of Circle CI. Click `Set Up Project` next the repo you just created.

![circleci_projects](./images/circleci_projects.png)


Circle CI will attempt to a merge a `config.yml` file into your repo that will define how the CI pipeline will look like. Be sure to select the Node template for your config file and then click Add Config.

![circleci_add_config](./images/circleci_add_config.png)

*Note: * If CircleCI is glitching and says it can add the file to your repo, create a folder named `.circle` and put copy the contents of the config file and store it in `.circleci/config.yml`.

If you go back to GitHub, you will see that there will be a pull request waiting. Assign yourself as an approver and merge the request. Once the merge is approved there should be a `.circleci/config.yml` file with the Node pipeline configuration.


### Triggering your pipeline 

Now if you go back to Circleci you should see that a pipeline was started in the Pipelines section. The pipeline was kicked off by the pull request commit that was just made.

![failed_pipeline](./images/circleci_failed_pipeline_1.png)

After waiting a few seconds, you'll notice that this pipeline fails.

Click the red fail icon and then click the rectangle with the red exclamation mark on the next page to finally get to the pipeline error report page.

![failed_pipeline](./images/circle_failed_page.png)

![failed_pipeline](./images/circleci_fail_test_4.png)

You'll notice on the pipeline report page that your first 3 pipeline stages passed:
  * Stage 1 - Spin up environment (sets up a docker container)
  * Stage 2 - Preparing environment variables( sets up your environment variables)
  * Stage 3 - Checkout code (copies your code from GitHub into the container)

The 4th stage - Checking for Package.json, unfortunately failed. Lets take a look at the error message:

```
#!/bin/bash -eo pipefail
if [ ! -f "package.json" ]; then
  echo
  echo "---"
  echo "Unable to find your package.json file. Did you forget to set the app-dir parameter?"
  echo "---"
  echo
  echo "Current directory: $(pwd)"
  echo
  echo
  echo "List directory: "
  echo
  ls
  exit 1
fi

---
Unable to find your package.json file. Did you forget to set the app-dir parameter?
---

Current directory: /home/circleci/project


List directory: 

README.md

Exited with code exit status 1
CircleCI received exit code 1


```

If you look closely, it says `Unable to find your package.json file. Did you forget to set the app-dir parameter?`.

The package.json file is important because it will be used to figure out which dependencies we need to install.

Our repo is indeed missing a package.json file, so lets add one in.

Create a package.json file by running the following commands:

```
$ npm init
//answer yes to all the questions, except enter `jest` when it asks for a test command
```
Now that we have a package.json file, add that file to be tracked with git and commit it to your repo:

```bash
git add -A
git commit -m "adding package.json"
git push
```

### Debugging CircleCI Error Reports

If we look back at the Pipeline page, we can see that another CI pipeline was started. However, this will fail too.

Click the red fail icon, and then click the rectangle with the exclamation mark on the next page. This should take you to the error report page again:

![fail_5_6](./images/circleci_fail_5_6.png)


Our pipeline passed stage 4 since we added the package.json file, but now it fails the following stages:
* Stage 5 - Restoring Cache
* Stage 6 - Installing NPM Packages

Lets examine the error reports:


Stage 5 Error Report:
```bash
error computing cache key: template: cacheKey:1:30: executing "cacheKey" at <checksum "~/project/package-lock.json">: error calling checksum: open /home/circleci/project/package-lock.json: no such file or directory
```

Stage 6 Error Report:
```bash
#!/bin/bash -eo pipefail
if [[ ! -z "" ]]; then
  echo "Running override package installation command:"
  
else
  npm ci
fi

npm ERR! cipm can only install packages with an existing package-lock.json or npm-shrinkwrap.json with lockfileVersion >= 1. Run an install with npm@5 or later to generate it, then try again.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/circleci/.npm/_logs/2020-10-06T04_23_52_177Z-debug.log


Exited with code exit status 1
CircleCI received exit code 1
```

Both error reports mention that the `package-lock.json` file is missing.

The `package-lock.json` file is important so that the container can download the exact same dependency tree that we used in development.

Lets add in a `package-lock.json` file to our repo. We can do so by installing any npm module, which will autogenerate a `package-lock.json` file.

Run the following commands in your project directory:
```bash
$ npm install jest
```

Next, add the `package-lock.json` file to be tracked and commit the changes to your repo:

```bash
git add -A
git commit -m `add package-lock.json`
git push
```

### Running tests

If we go back to the Pipelines page, we can see that another CI pipeline was triggered. However, this one fails the 8th and final test - Run NPM Tests.

![fail_8](./images/circleci_fail_8.png)

Lets take a look at the error report:
```bash
#!/bin/bash -eo pipefail
npm run test

> circle-ci-example@1.0.0 test /home/circleci/project
> jest

No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In /home/circleci/project
  2 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: /node_modules/ - 2 matches
  testRegex:  - 0 matches
Pattern:  - 0 matches
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! circle-ci-example@1.0.0 test: `jest`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the circle-ci-example@1.0.0 test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/circleci/.npm/_logs/2020-10-06T04_40_29_001Z-debug.log


Exited with code exit status 1
CircleCI received exit code 1
```

This section `No tests found, exiting with code 1` indicates that the stage failed because we didn't have any test files in our project. The error report also shows that it tried to do a regex max for any files ending with .test.js and didn't find any matches.

To fix this, lets move all of the source files from our project in Lab 3A, which should have a bunch of test cases. This also lets us test to see if our Express project will pass the CircleCI pipeline stages.

You can access the solution for Lab 3A here:
//TODO 

Make sure not to accidentally remove the `.circleci/config.yml` file. You don't need to move node_modules into the repo, as we will rebuild it.

Rebuild your node_modules folder by running:
```
npm install
```

Then run `npm run test` and verify that your tests all pass.

After that, add all the files to be tracked with git and commit everything to your repo:

```
git add -A
git commit -m "add tests"
git push
```

### Successful Pipeline

If you go to the Pipelines page, a new pipeline will have been started. It will take a longer time for this pipeline to finish than the previous pipelines because we have added a lot more dependencies.

You can get to the pipeline reporting screen the same way as you did before to see the logs as they happen in real time.

Eventually, the pipeline should pass all of its stages.

![success](./images/circle_ci_success.png)

You can view the logs of any of the successful stages by clicking on the dropdown of the stage.

### Additional Resources

This lab only walks you through the default pipeline for Node projects provided by CircleCI.

For additional information on how to configure a CircleCi pipeline, visit the official documentation: https://circleci.com/docs/2.0/configuration-reference/


# Knowledge Check Answers

## Knowledge Check 1
What is the difference between Continous Integration and Continuous Delivery

```
A. Continous Delivery is manual while Continuous Integration is automatic
B. Continous Integration happens after Continuous Delivery
C. Continuous Integrations is about building and testing your code while Continous Delivery is about deploying it to users
D. Continuous Delivery is about building and testing your code while Continous Intergation is about deploying it to users
```

Answer is C. 


## Knowledge Check 2
Which of the following deployment patterns spins up a whole new server group with new server instances?

```
A. Canary
B. Rolling
C. Blue Green
```

Answer is C.