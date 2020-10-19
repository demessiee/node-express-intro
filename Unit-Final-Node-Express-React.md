## Node, Express, and React Course Final Project

## Lab Overview

Your final project is to add additional features onto the LinkedIn clone from Lab 4D. You will be creating an Express API as well as a React frontend to consume the API. All your data should be stored in your MongoDB cloud instance.

Here are some screenshots of what the finished solution should look like:
![signin](/images/react-final-signup.png)
![login](/images/react-final-login.png)
![home](/images/react-final-home.png)
![connections](/images/react-final-connections.png)
![profile](/images/react-final-profile.png)


Here are the major features you will be adding:
* User account creation
* Requiring user log in on the Home, Connection and Profile pages
* Posting content to the newsfeed
* Adding connection requests 
* Updating profile information

### Server Requirements

Create the following endpoints:
* GET /api/users/ - sends a list of all users
* GET /api/users/user/:id - sends user with specified id
* POST /api/users/user - inserts user with specified body
* PUT /api/users/user - updates user with specified body
* DELETE /api/users/user/:id - deletes user with specified id
* POST /api/users/login - checks if the id (their email) and password combination exists in the user collection. If true returns, the user object back to the client without the password.

* GET /api/posts/ - send a lists of all posts
* POST /api/posts/post - inserts a new post with specified body

#### Data Schemas
Your collections should have the following schemas:

Users

```js
{
  _id:String, //use an email as the _id, e.g. person@gmail.com. This is required.
  password:String, //this is required
  full_name: String, //first and last name combined with an undescore, e.g john_smith
  biography:String,
  connections: [String]//array of accepted connections
}
```

Posts
```js
{
  user_id:String, //required
  content:String //required
}
```


### Frontend Requirements

Nav bar:
* add another link to `/signup`
* add another link to `/login`
* add a Logout button to the navbar that conditionally renders if a user is logged in
  * the button should say Logout : {user_.id}
  * the Logout button should log a user out if they are logged in

Home page:
* Redirects to `/login` if a user isn't logged in
* All posts in the database should be shown
  * posts should display the user id of the author and the post content
* The CreatePost component should insert a new post when a user submits a new post

Connections page:
* Redirects to `/login` if a user isn't logged in
* Show connection requests from all Users that are currently in the database
  * remove the Ignore feature, it is out of scope for this lab
* Accepting a connection request should add the user id of the connected user in the Connection Overview section
  * deleting connections is out of scope for this lab
Profile page:
  * Redirects to `/login` if a user isn't logged in
  * Have a form that is prepopulated with the values from the logged in user.
  * Allow the user the edit the form and submit any changes to their profile
    * The user should be able to edit their full_name and biography
    * As a challenge, you can allow the user to edit their connections too as a comma separated string

Sign Up page:
* allow anyone to sign up for a user account with an id(email) and password
* log the user in and redirect the user to `/home` if successful
Log In page:
* validate existing users with id(email) and password
* log the user in and redirect the user to `/home` if successful

Everything else should remain as a mockup

## Lab Starter Code

You will be given the solution code from Lab 4D as a starting point. 

You can get the starter code here:
[LINK]



Here's a recommended way to approach this lab:
* Start by coding out the Express API. Then Test the API functionality with Advanced Rest Client.
* Then try to get the Sign Up feature working and verify that you can sign up a new user through the React client
* After that, try to Log In an existing user
* Verify that the Log Out feature works
* After that you can choose to tackle the following features in any order:
  * Make a form in Profile to update the logged in User's biography and full_name
    * Challenge: allow the User to update their connections as a comma separated string
  * Populate all existing users as connection requests in the Connections page
    * Add the ability to show all existing connections in the Connection Overview panel
    * Add the ability to add a new connection to the Connection Overview panel by clicking the ACCEPT button
  * Populate all existing posts in the Home page
    * Add the ability to add new posts


Some additional hints:
* You'll need to add some state to keep track of the logged in user. You can declare it with useState() in App.js then pass the state as props to all the other components as you render them with Route. You should keep track of the whole user state, dont just have a boolean for logged in or not. You can verify if a user is logged in or not by checking if this state is null and then redirect on the necessary pages.
* props.history.push() is useful for triggering URL changes programmatically. You can only use it if the history props is passed down from the Route component, so pass it to all children that need it.
* be careful not to confuse ._id with .id 
* to verify that a user was successfuly logged in, you can compare the input form id with the response _id
* When adding a new connection, use the User PUT request to modify the User connections array. You'll need to do the logic on the client side to arrange the request body with the new connection added so that the PUT request can just do an update and not worry about any logic.
* If its annoying to keep having to log in to test out changes, you can set the state to have a logged in user by default while you are testing.


## Lab Solution
You can get the solution here:
https://github.com/flatiron-school/node-express-intro/tree/main/Labs/Lab-Node-Express-React-Final-Project-Solution