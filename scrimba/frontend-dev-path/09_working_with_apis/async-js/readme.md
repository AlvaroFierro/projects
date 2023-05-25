# Async-JS

- [Async-JS](#async-js)
- [What is Async-JS?](#what-is-async-js)
- [Javascript is not asynchronous](#javascript-is-not-asynchronous)
- [Callbacks](#callbacks)
- [Promises](#promises)
  - [Pending](#pending)
  - [Fulfilled](#fulfilled)
  - [Rejected](#rejected)
  - [Promises .then()](#promises-then)
- [ES8 Async/Await](#es8-asyncawait)

# What is Async-JS?

It's code that can be run "out of order". Allows a lengthy operation to start, but finish at a later time without blocking other code from running in the meantime.

# Javascript is not asynchronous

Javascript isn't truly asynchronous but rather has `"callback"` mechanisms in place to run commands in a different order to make things more efficient.

- Single-threaded means only one command can run at a time

# Callbacks

Challenge: Write your own `filter` function! Don't worry about adding it to the prototype of arrays or anything.
This function should take 2 parameters:

1. The array you want to filter through, and
2. A callback function
   Steps for filterArray function logic:
3. Initialize a new, empty array which will be returned at the end of the `filterArray`s operations (Completed ✅)
4. Loop through the array passed as the 1st parameter
5. Inside the loop, call the callback function, passing the individual item you're currently looping over as the argument to your callback function
6. If the callback function returns `true`, push the current item you're iterating on in the loop to the new array. If it returns `false`, don't push it to the array.
7. When the loop is over, return the new array

```js
const people = [
  { name: 'Jack', hasPet: true },
  { name: 'Jill', hasPet: false },
  { name: 'Alice', hasPet: true },
  { name: 'Bob', hasPet: false },
]

function filterArray(arr, callback) {
  const resultingArray = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) resultingArray.push(arr[i])
  }
  return resultingArray
}

console.log(filterArray(people, (person) => person.hasPet))
```

# Promises

A good start is using an analogy: the job interview.

When you go into a job interview, you don't expect the job interview to end with ok, you got the job Sorry, we're gonna look at different people instead. Usually, a job interview ends with them saying something like we'll get back to you within a week and let you know if you got the job or not.

> "We'll let you know within a week"

## Pending

- The promise has yet to be completed (fetch)

## Fulfilled

- The promise **was** completed as promised

## Rejected

- The promise **was not** completed as promised

```js
/**
 * Challenge: method chaining!
 *
 * 1. Select the button in the DOM and add an event listener to it without saving the DOM element as a separate variable. I.e. "chain" the `addEventListener` on after your `getElementById()`(When clicked, log "Clicked" to the console)
 *    - I realize this might feel like busywork, but my intent will make sense soon
 *
 * 2. Given the array below, chain the `.filter` and `.map` array methods together to turn the array into an array of string email addresses of only the people in the array who voted. Log the array of email addresses to the console
 */

document.getElementById('new-deck').addEventListener('click', function () {
  console.log('Clicked!')
})

const voters = [
  { name: 'Joe', email: 'joe@joe.com', voted: true },
  { name: 'Jane', email: 'jane@jane.com', voted: true },
  { name: 'Bo', email: 'bo@bo.com', voted: false },
  { name: 'Bane', email: 'bane@bane.com', voted: false },
]

// Write your code below

// Final result: ["joe@joe.com", "jane@jane.com"]

voters.filter((voter) => voter.voted).map((voter) => console.log(voter.email))
```

## Promises .then()

- Promises are in one of 3 states at any given time
  - Pending
  - Fulfilled - run `.then()` block
  - Rejected

# ES8 Async/Await

- Makes asynchronous code look synchronous
- `async` goes before a function declaration
- `await` goes before a method/function that returns a `promise`
