## 1. Difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll
#### getElementById():
- Selects element using ID,
- Returns single element
`const element = document.getElementById("myId");`

#### getElementsByClassName():
- Selects elements using class name
- Returns HTMLCollection
- Can contain multiple elements
`const elements = document.getElementsByClassName("myClass");`

#### querySelector():
- Uses CSS selector
- Returns first matching element
- Finding element by using tagName or idName or className
`const element = document.querySelector(".myClass");(className)`

#### querySelectorAll():
- Uses CSS selector
- Returns all matching elements
- Returns NodeList
`const elements = document.querySelectorAll(".myClass");`

## 2. How to create and insert a new element into the DOM
- First create a element by using createElement()
 `const newElement = document.createElement("p");`
- Add content into the element
 `newElement.innerText = "Hello World";`
- Insert into DOM
 `document.body.appendChild(newElement);`

## 3. What is Event Bubbling? And how does it work?
Event Bubbling is a process in the DOM where an event starts from the target element and then propagates upward through its parent elements until it reaches the document.
Process:

- The event first occurs on the target element (the element that was clicked or triggered).
- Then the event moves to the immediate parent element.
- After that, it moves to the grandparent element.
- This process continues upward through all ancestor elements.
- Finally, the event reaches the document object.
- Each parent element along the way has the ability to listen to and handle the event.
It is called "bubbling" because the event bubbles up from the bottom to the top.

## 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique where a parent element handles events for its child elements instead of attaching event listeners to each child individually. This works because of event bubbling.
Process:
- An event occurs on a child element.
- The event bubbles up to the parent element.
- The parent element receives the event.
- The parent identifies which child triggered the event.
- The parent performs the appropriate action based on the event target.
Why it is useful:
- Uses less memory because fewer event listeners are needed.
- Improves performance, especially when there are many child elements.
- Works for dynamically added elements.
- Makes code cleaner and easier to maintain.


## 5.Difference between preventDefault() and stopPropagation()
- preventDefault() stops the browser’s default behavior for an event.
- stopPropagation() stops the event from propagating (bubbling) to parent elements.
