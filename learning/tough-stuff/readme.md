# The tough stuff in javascript in JS (Callbacks, Promises, Async Await)

Table of contents

- [Async](#async)
- [Callbacks](#callbacks)

## Async

Async is a way to write code. Usually JS, read line by line until reaches at the bottom of the document. But with async you can be executing another parts of your code while something is happening. Example

```js
console.log('first')

setTimeout(() => {
  console.log('this will happen after 2 seconds')
}, 2000)

console.log('second')
console.log('something is cooking in the back 🎂....')
```

We could say that async code === to multitasking IRL with help of `Web Api`

You can see that `()=> {}` looks like a callback, and it is, but not always callbacks are async

Explanation

```js
console.log('first')

const numbers = [1, 2, 3, 4, 5]

numbers.forEach((x) => {
  console.log(x)
})

console.log('end')
// expected output
// first
// 1
// 2
// 3
// 4
// 5
// end
```

## Callbacks

A callback is a function passed into another function as an argument. e.g.

```js
function greet(name) {
  alert(`hi, how are you doing ${name}?`)
}

function callForName(callback) {
  const name = prompt('please enter your name')
  callback(name)
}

callForName(greet)
```
