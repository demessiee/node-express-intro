# Unit 4-B Lecture

In this lecture we will cover:
* State 
* Handling Events
* Lifting State Up
* useEffect
* Fetching Data
* Conditional Rendering


It is recommended to follow along by making a project directory for this lecture and running the code samples:

```
mkdir lecture4B
cd lecture4B
```


## State

React components have the ability to keep track of their own `state`. In practice, this means that a React button component can remember how times it was clicked, or a React list component could remember all of the items that were added or removed from a list. `state` differs from `props` in that `props` are more like inputs while `state` is more like memory. 

To add state to a React component, we have to use the `useState()` method from the React library. 

**Additional Context:** The `useState()` method is considered a `React hook` which is a library that adds functionality to a functional react component.

Create or use an existing `create-react-app` project, and replace App.js with the following code:
```jsx
//App.js
import React, {useState} from 'react'

function App(){
    const [clicks,setClicks] = useState(0) 
    return (
        <div>
            <button>Clicks: {clicks}</button> 
        </div>
    )
}

export default App

```

You should now see a button with `Clicks: 0` in it when you visit localhost:3000.

However, when you click the button, nothing happens? Well, thats because we didn't actually tell it do anything yet.

Lets break down what we added:
1. We imported useState from the `react` library. Since it wasn't a default export we had to use curly braces to reference it.
2. We added `const [clicks,setClicks] = useState(0)`. This does three things:
    1. It creates a variable named `clicks` that will hold some state
    2. It sets the default state value of `clicks` to be 0, since that was what was passed into useState()
    3. It create a function called setClicks that will be used to modify the state value. If we wanted to change the state to say, 42, we would call setClicks(42).


## Event Handlers

Now lets add an event handler that will increase the click count by 1 everytime we click the button:

```jsx
//App.js
import React, {useState} from 'react'

function App(){
    const [clicks,setClicks] = useState(0) 
    const handleClick = () => {
        setClicks(clicks + 1)
    } 
    return (
        <div>
            <button onClick={handleClick}>Clicks: {clicks}</button> 
        </div>
    )
}

export default App

```

We now defined a method called handleClick that will use the `setClicks()` method to set the value of clicks to be 1 higher than the current value.

**Best Practice:** When defining event handlers inside React components, it is a best practice to define them using arrow function notation. This is because arrow functions automatically bind to the React component they were declared in which will be important to have if we ever pass event handlers down as props to other React components.

We configured this method to trigger when the button is clicked by passing it to the onClick attribute of the `<button>` element.

Now, if we go to localhost:3000 and click the button, the count on the button increases every time we click it.

In this example, we learned about onClick events, but there are several others events that you should be aware of:
* onDblClick - for double clicks
* onChange - when a input form changes value
* onMouseEnter - when the mouse enters an HTML element
* onKeyPress - when a certain key is pressed

Here's a complete list of HTML events: https://www.w3schools.com/tags/ref_eventattributes.asp (just be sure to list them in camelCase in React)

## More on State

Each instance of a React component can keep track of its own state.
Lets move the button clicking logic into its own React component file in `src/ClickButton.js`

```jsx
//ClickButton.js
import React, {useState} from 'react'

function ClickButton(){
    const [clicks,setClicks] = useState(0) 
    const handleClick = () => {
        setClicks(clicks + 1)
    } 
    return (
        <div>
            <button onClick={handleClick}>Clicks: {clicks}</button> 
        </div>
    )
}
export default ClickButton
```

Now in App.js, lets create three instances of the ClickButton component:

```jsx
//App.js
import React, {useState} from 'react'
import ClickButton from './ClickButton.js'

function App(){

    return (
        <div>
            <ClickButton/> 
            <ClickButton/> 
            <ClickButton/> 
        </div>
    )
}

export default App

```
Now, if we save and go to localhost:3000, we can see three buttons that keep track of their own clicks independently of eachother.

## Knowledge Check 1

```jsx
const [list,setList] = useState([1,2,3])
setList(4)
```

If I execute `setList(4)` What will `list` contain afterward?
```
A. [1,2,3,4]
B. [1,2,3]
C. [4]
D. 4
```


## Using Props and State

Props and State can be used together. 

As an example, lets modify ClickButton.js so that the click amount goes up based on `props.interval` instead of increasing by 1 each time. Lets also modify the message in the button to indicate how much it will increase by.

```jsx
//ClickButton.js
import React, {useState} from 'react'

function ClickButton(props){
    const [clicks,setClicks] = useState(0) 
    const handleClick = () => {
        setClicks(clicks + props.interval)
    } 
    return (
        <div>
            <button onClick={handleClick}>Add {props.interval} Clicks: {clicks}</button> 
        </div>
    )
}
export default ClickButton
```

Now lets pass in different interval amounts as attributes to our three ClickButton instances:

```jsx
//App.js
import React, {useState} from 'react'
import ClickButton from './ClickButton.js'

function App(){

    return (
        <div>
            <ClickButton interval={2}/> 
            <ClickButton interval={5}/> 
            <ClickButton interval={10}/> 
        </div>
    )
}

export default App

```

Now if we save, localhost:3000 will have three buttons that all increase by different intervals.

## Lifting State Up

We now have three buttons that independently track their own state. 

However, what if we wanted a way to track the total amount of clicks that happened across all three buttons? 

There currently isn't a way to do that. In order to accomplish that, we need to lift the state up from the individual components into a common parent component. That parent component will then keep track of all three ClickButton states as they change via clicks and pass those states down as props to the individual ClickButtons.

Lets modify App.js so that it keeps track of all of the states of the three ClickButtons:



```jsx
//App.js
import React, {useState} from 'react'
import ClickButton from './ClickButton.js'

function App(){

    const [clicksArr,setClicksArr] = useState([0,0,0])

    const handleClick = (id,interval) => {
        let tempClicksArr = [...clicksArr]
        tempClicksArr[id] = tempClicksArr[id] + interval
        setClicksArr(tempClicksArr)
    } 

    return (
        <div>
            Total Clicks: {clicksArr[0] + clicksArr[1] + clicksArr[2]}
            <ClickButton id = {0} handleClick={handleClick} clicks={clicksArr[0]} interval={2}/> 
            <ClickButton id = {1} handleClick={handleClick} clicks={clicksArr[1]} interval={5}/> 
            <ClickButton id = {2} handleClick={handleClick} clicks={clicksArr[2]} interval={10}/> 
        </div>
    )
}

export default App

```
We modified App.js to add the following things:
1. Added `const [clicksArr,setClicksArr] = useState([0,0,0])` which will
    1. Save some state in clicksArr
    2. Set the initial state to be [0,0,0], representing the click values of the three ClickButton components
    3. Creates the setClicksArr function if we want to change the state value
2. Created a handleClick function that takes in an id, and an interval, and increases the approprate clicksArr state index by the specified interval.
3. Modified each ClickButton instance to take in the following attributes:
    1. id
    2. handleClick (good thing that it was defined with arrow functions)
    3. clicks
    4. interval (this was there previously)
4. Added some text to display the total amount of Clicks


Then lets make some modifications to ClickButton.js:

```jsx
//ClickButton.js
import React from 'react'

function ClickButton(props){
    const handleClick = () => {
        props.handleClick(props.id,props.interval)
    } 
    return (
        <div>
            <button onClick={handleClick}>Add {props.interval} Clicks: {props.clicks}</button> 
        </div>
    )
}
export default ClickButton
```
We modified ClickButton.js to add the following things:
1. replaced the handleClick() method to call the props.handleClick() method that was passed down as props. We pass in props.id and props.interval to this so that we can increase the correct index on the clicksArr state array by the correct amount.
2. replaced clicks with props.clicks
3. Got rid of the useState usage within ClickButton since state is now held in App.js

If we save both files and go to localhost:3000, we can now see total amount of clicks that were obtained by clicking on any of the buttons!


## Knowledge Check 2

```jsx
//App.js
import React, {useState} from 'react'
import ClickButton from './ClickButton.js'

function App(){

    const [clicksArr,setClicksArr] = useState([0,0,0])

    const handleClick = (id,interval) => {
        let tempClicksArr = [...clicksArr]
        tempClicksArr[id] = tempClicksArr[id] + interval
        setClicksArr(tempClicksArr)
    } 

    return (
        <div>
            <ClickButton id = {0} onClick={handleClick} clicks={clicksArr[0]} interval={2}/> 
        </div>
    )
}

export default App

```

In the above code, handleClick is passed down as props into ClickButton. How can clickButton reference handleClick?

```
A. props.handleClick
B. props.onClick
C. handleClick
D. It can't
```

### useEffect

There is another useful method from the React library called `useEffect`.

**Additional Context:** useEffect is also referred to as a React Hook just like useState.

useEffect allows us to run a callback function everytime our React component does a rerender. 

When would a component rerender? A component will rerender everytime its props have changed or its state has changed. In our previous example, every time we click on a button, all of our React components will rerender because the state of App.js changed causing it to rerender along with its child components.


Let's add useEffect to our ClickButton component:

```jsx
import React, {useEffect} from 'react'

function ClickButton(props){
    const handleClick = () => {
        props.handleClick(props.id,props.interval)
    } 
    useEffect(() => {
        console.log(`Rerendered ClickButton # + ${props.id} + to have ${props.clicks} clicks`)
    })
    return (
        <div>
            <button onClick={handleClick}>Add {props.interval} Clicks: {props.clicks}</button> 
        </div>
    )
}
export default ClickButton
```

Now, whenever a ClickButton component rerenders, the console.log() inside useEffect will log.

If you go to localhost:3000 and test it out, you can see that all three ClickButtons will rerender and trigger the console.log anytime any of the buttons are clicked.

Again, this is because the state of App.js caused App.js to rerender along with all of the ClickButton components since they were children.

### useEffect only when certain values change

We can configure useEffect to only run when certain values change by passing in an array full of variables as the second argument. If any of the variables passed in the array change value, useEffect will run its callback. Otherwise, it won't do anything.

If you pass an empty array as the second argument, useEffect will only run once at the initial mounting of the component and never again.

Lets modify ClickButton.js so that it only will run useEffect when the `props.clicks` value changes:

```jsx
//ClickButton.js
import React, {useEffect} from 'react'

function ClickButton(props){
    const handleClick = () => {
        props.handleClick(props.id,props.interval)
    } 
    useEffect(() => {
        console.log(`Rerendered ClickButton # + ${props.id} + to have ${props.clicks} clicks`)
    },[props.clicks])
    return (
        <div>
            <button onClick={handleClick}>Add {props.interval} Clicks: {props.clicks}</button> 
        </div>
    )
}
export default ClickButton
```

Now, if we save the code and go to localhost:3000, the console.logs only happen for the button that gets clicked. 

That makes sense, because only the `props.clicks` of the the button that gets clicked ends up changing even though all of the ClickButtons are rerendering.

### useEffect and Fetching Data

If you want a React component to load data from an API when it first mounts for the first time, you should do the data fetching within useEffect(). You can pass an empty array as the second argument to prevent the useEffect callback from running again.


```jsx
//App.js
import React, {useState, useEffect} from 'react'

function App(){
    const [data,setData] = useState([])
    
    useEffect(() => {
        async function fetchData(){
            let responseStream = await fetch('https://swapi.dev/api/films/')
            let json = await responseStream.json()
            console.log(json.results)
            setData(json.results)
            
        }
        fetchData()
    },[])

    return (
        <div>
            {data.map(x => {
              return (
                <div>
                  <h1>Episode {x.episode_id} : {x.title}</h1>
                  <p>{x.opening_crawl}</p>
                </div>
              )
              })
            }
        </div>
    )
}

export default App

```

The above example fetches an array of Starwars film data from the Starwars API. It then maps the resulting json array into a chunk of HTML that shows the Episode number, title and opening credits.


## Knowledge Check 3




If you want to make an API request, where should you do it?
```
A. At the top of the React component
B. Inside useState()
C. Inside useEffect()
D. In the return statement of the React component
```


## Conditional Rendering

Sometimes you can conditionally different HTML elements based on your props or state.

For example:

```jsx
//User.js
import React from 'react'

function User(props){
    if(props.loggedIn === true){
        return <p> Welcome </p>
    }
    else{
        return <p>Please Log In</p>
    }
}
export default User
```

This is also useful if your state hasn't finished loading fetched data yet:

```jsx
//App.js
import React, {useState, useEffect} from 'react'

function App(){
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    
    useEffect(() => {
        async function fetchData(){
            let responseStream = await fetch('https://swapi.dev/api/films/')
            let json = await responseStream.json()
            console.log(json.results)
            setData(json.results)
            setLoading(false)
            
        }
        fetchData()
    },[])
    if(loading){
        return <div>Loading...please wait</div>
    }
    return (
        <div>
            {data.map(x => {
              return (
                <div>
                  <h1>Episode {x.episode_id} : {x.title}</h1>
                  <p>{x.opening_crawl}</p>
                </div>
              )
              })
            }
        </div>
    )
}

export default App

```

In the above example, we added a state variable, `loading` to represent whether the application was still loading or not. We set `loading` to `true` to begin with and then set it to `false` after our data is fetched.

We then use conditional rendering to display `Loading...please wait` when `loading` is true.

The end result is that we show `Loading...please wait` for a few seconds until the data fetched, before switching over to showing the fetched data.

## Knowledge Check 4


```jsx
//Mystery.js
import React from 'react'

function Mystery(props){
    return props.solved? <div>The Mystery is solved</div> : <div>Unsolved Mystery</div>
}
export default Mystery
```

What will `<Mystery solved={false}/>` render?
```
A. The Mystery is solved
B. Unsolved Mystery
```


# Knowledge Check Answers

## Knowledge Check 1


```jsx
const [list,setList] = useState([1,2,3])
setList(4)
```

If I execute `setList(4)` What will `list` contain afterward?
```
A. [1,2,3,4]
B. [1,2,3]
C. [4]
D. 4
```

Answer is D.




## Knowledge Check 2

```jsx
//App.js
import React, {useState} from 'react'
import ClickButton from './ClickButton.js'

function App(){

    const [clicksArr,setClicksArr] = useState([0,0,0])

    const handleClick = (id,interval) => {
        let tempClicksArr = [...clicksArr]
        tempClicksArr[id] = tempClicksArr[id] + interval
        setClicksArr(tempClicksArr)
    } 

    return (
        <div>
            <ClickButton id = {0} onClick={handleClick} clicks={clicksArr[0]} interval={2}/> 
        </div>
    )
}

export default App

```

In the above code, handleClick is passed down as props into ClickButton. How can clickButton reference handleClick?

```
A. props.handleClick
B. props.onClick
C. handleClick
D. It can't
```

Answer is B.

## Knowledge Check 3


If you want to make an API request, where should you do it?
```
A. At the top of the React component
B. Inside useState()
C. Inside useEffect()
D. In the return statement of the React component
```

Answer is C.

## Knowledge Check 4


```jsx
//Mystery.js
import React from 'react'

function Mystery(props){
    return props.solved? <div>The Mystery is solved</div> : <div>Unsolved Mystery</div>
}
export default Mystery
```

What will `<Mystery solved={false}/>` render?
```
A. The Mystery is solved
B. Unsolved Mystery
```

Answer is B.
