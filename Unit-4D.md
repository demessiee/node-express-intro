# Unit 4-D Lecture

In this lecture we will cover:
* Material UI
* Material UI Grid System
* React Router

It is recommended to follow along by making a project directory for this lecture and running the code samples:

```
mkdir lecture4D
cd lecture4D
```

## Material UI

In the previous lectures we learned about creating our own React components. However, there exist a bunch of useful React components already created by third party libraries. We can use these third party React components, as is, or combine them with our own components to make larger React components.

Material UI is a React component created using the Material UI design principles that were created Google.

You can check out the official Material UI documentation here:
https://material-ui.com/getting-started/installation/

Here are some examples of Material UI React components we can use:
* Button - https://material-ui.com/components/buttons/
* Card - https://material-ui.com/components/cards/
* Snackbar - https://material-ui.com/components/snackbars/
* Progress - https://material-ui.com/components/progress/
* Floating Action Button - https://material-ui.com/components/floating-action-button/

Material UI also comes with an Icon library:
https://material-ui.com/components/material-icons/

To add the Material UI component library as a dependency to your React project, run:
```
npm install @material-ui/core
```

To add the Material UI icon library as a dependency to your React project, run :
```
npm install @material-ui/icons
```

## Layout Components

Material UI comes with several components that help with the layout and styling of your web page.

### Box

The Box component is essentially just a `div` component, except you can pass in any CSS style attributes as one off attributes instead of using classNames or style objects.

```jsx


```




### Container

### Grid

## Other Useful Components

### Button

### Progress

### Card

### Tabs

### App Bar

## React Router

React does not come with a routing solution, meaning that your React app will be stuck as a single page app unless you add in a routing solution.

React Router is a popular routing library for React. It allows you to render different React components based on the URL. This means you could go to website.com/home, website.com/about, and website.com/users and see different React components rendered to the screen.

To add React Router as a dependency to your React project:

```
npm install react-router-dom
```


Here's a quick example that shows off the most commonly used features of React Router:

```jsx
//App.js
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

```

What is going on in the above example?
1. We imported BrowserRouter(aliased as Router), Switch, Route, and Link from the React Router library
2. We wrapped our return statement with the Router component, this is necessary if you want to use any features from React Router 
3. We added a couple of Link components at the top. Clicking on a Link component will change the URL to whatever is passed to the `to` property.
4. We added some Switch and Route components at the bottom.
    1. The Switch component will choose to render the first Route that "matches" the URL
    2. Route components render a specified component when they "match" the URL
5. We defined a few React components that will be rendered by the Route components

The end result is that when we click the Links, the URL changes. And based on the URL change, different React Components get rendered.

**Warning:** If you are hosting a React app using React Router using Express, make sure that your endpoints don't collide with your React Router Routes 

### Routes

### Switch

### Links




## Combining React with Node.js

### Serving React and Node.js separately

One way to combine a React frontend and a Node.js backend server is to host them separately. You can then set the CORS permissions so that the React frontend can access the server API's. 

This approach allows you to separate your frontend and backend into separate codebases. It also allows you to scale both of their servers independently of eachother. 

You can also use different hosting solutions for each of them. For example, the React frontend can be put on a static hosting solution like Netlify or AWS S3, while the Node.js server can be hosted on a PaaS hosting solution like Heroku or some IaaS hosting solution like AWS EC2. 

### Combining React and Node.js into one Express application

Another way to combine React and Node.js is to run create-react-app within an Express application folder. This will create a React project directory with all of the create-react-app build tools. Then, when you run your server start script, you can add a step to create a production build for your React app. You can specify your entire build folder to be statically served by Express. Then you just need to have an express endpoint that points to index.html in the build folder that has all your React components embedded.


