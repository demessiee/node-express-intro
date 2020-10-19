# Unit 4-D Lab

## Lab Overview

Your lab assignment will be to create a LinkedIn clone mockup using React Router and components from Material UI. 

The LinkedIn clone will have the following three pages:
* /home - where you can see a newsfeed of LinkedIn posts
* /connections - where you can view your connection requests
* /profile - where you can view your profile

You will be only be building a mockup of the LinkedIn website so you won't need to build any actual functionality besides switching between the pages in the navigation bar.

Here are some screenshots of the solution:

Home:
![linkedin-home](/images/linkedin-home.png)
Connections:
![linkedin-connections](/images/linkedin-connections.png)
Profile:
![linkedin-profile](/images/linkedin-profile.png)

You will use Material UI and React Router to build a multi-paged React application.

The following material UI components will make your development process easier:
* Box - like a div, but you can add styles as attributes
* Button - fancier buttons, holds icons too
* Container - make everything centered horizontally around the middle of the page
* Grid - for defining rows and columns in a grid layout
* IconButton - for holding an icon by itself
* Card - for cards
  * CardContent - for the body of a card
  * CardActions - for card actions at the bottom
* Typography - for text styling
* Divider - to make a dividing line
* TextField - for input forms

Also, try to use some Icons from the Material UI Icon library:
https://material-ui.com/components/material-icons/


As a challenge, try to only use components from React Router or Material UI and not any standard HTML elements (div,p,h1,etc.)


You can get more details on those components by viewing the documentation:
https://material-ui.com/components/box/


## Lab Starter Code

You will be given a basic Navigation Bar that changes the URL using React Router links. Nothing will happen when you click the links though, so you will have to add Route components to render the the pages accordingly.

You can access the starter code here:
https://github.com/flatiron-school/node-express-intro/tree/main/Labs/Lab-4D-Starter

Make sure to install all the client dependencies with:
```
npm install
```

You should create separate component files for the Home page, Connections page, and Profile page and render them appropriately using Route components. You should also create separate components for each differently colored block shown in the solution example screenshots and use those to build your main page components.

Some of the components in the screenshot are more fleshed out than others(e.g. the posts). To start off, just try to get the layout correct for each page using empty cards before adding more details to any individual components.

**Hint:** The AppBar is pinned to the top of the screen and if try to render some basic text it will get stuck behind the AppBar. You'll need to add some CSS margin to whatever you are rendering for it to appear below the AppBar.

## Lab Solution
You can view the lab solution here:
https://github.com/flatiron-school/node-express-intro/tree/main/Labs/Lab-4D-Solution