# Unit 4-B Lab

## Lab Overview

Your lab assignment will be to create a carousel React component similar to the one seen here at the Honda website:
https://automobiles.honda.com/

Here is a screenshot of the solution:
![carousel](/images/carousel.png)

The product details and images will be provided for you, you just have to create the React templating and state logic so that you can show one image at a time in the Carousel. 

There should be four types of categories:
* Cars
* Suvs
* Trucks
* Electric

When a user clicks on one of the categories, the products listed in that category will be present in the carousel slide show. The user should then by able to cycle through those category products one at a time by clicking a Next and Back button. If users try to cycle past the beginning or past the end of the list of products, the Next and Back Buttons shouldn't do anything. Also, if a user switches category, the carousel should start by presenting the first item in that category.

If you get stuck with the CSS, just start by trying to display all the correct production information based on the state, even if its messily scattered across the page.


## Lab Starter Code

The lab starter code will include some basic templating and all of the product details in an object. It is your job to handle the state changes so that the right product gets displayed in the carousel as the users click Next and Back and change category.

You can clone your starter code here:
https://github.com/flatiron-school/node-express-intro/tree/main/Labs/Lab-4B-Starter

Make sure to install all of the dependencies with:
```
$ npm install
```

## Lab Solution
You can view the lab solution here:
https://github.com/flatiron-school/node-express-intro/tree/main/Labs/Lab-4B-Solution