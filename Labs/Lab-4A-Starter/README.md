# Unit 4-A Lab


## Lab Overview

Your lab assignment will be to create a mockup of the Craiglist home page using React components. The goal is to build several React components that represent different parts of the UI and combine them together to create the final page. Since it is just a mockup, we won't be adding any functionality to the links or filling out any of the text data in fine detail.

Here you can view the Craiglist home page here:
* https://sfbay.craigslist.org/

This is an example mockup solution:
![craigslist_mockup](./images/craigslist_mockup.png)

To complete this lab, please create the following React components:

* LeftContent.js - for the left panel
* CenterContent.js - for the center panel
* RightContent.js - for the right panel
* FooterContent.js - for the footer bar
* Calendar.js - for the calendar shown in left panel (You can use a 5x7 `<table>` element to represent this)
* Category.js - for the category boxes shown in the center panel. This component should take a title as `props` but you can hardcode the content links within the component.

You should import all of these component files into App.js to build your final layout.

It is a best practice to keep all of our React components in a separate folder from the rest of our source code, so please store all of these components in `/src/components/`.

For this lab, you should also create CSS rules for each of your components in `App.css`. You should also move `App.css` to `/src/css/` instead of keeping it in `/src` because that is another best practice.

You don't need to only have 1 CSS rule per component, can create as many CSS rules as you need to successfuly complete the page layout.

Since we did not do a full in-depth lecture on HTML and CSS, be sure to use Hoogle when you need to layout something and don't know the exact syntax to do so.

## Lab Starter Code

You won't be given any starter code because one learning objective of this lab is for you to set up your own React project from scratch using `create-react-app`.

You access the empty lab starter folder here(it only has a README):
https://github.com/flatiron-school/node-express-intro/tree/main/Labs/Lab-4A-Starter

## Lab Solution

You can view the lab solution here:
https://github.com/flatiron-school/node-express-intro/tree/main/Labs/Lab-4A-Solution