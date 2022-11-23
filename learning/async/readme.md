# Async in JS

Async is a way to write code. Usually JS, read line by line until reaches at the bottom of the document. But with async you can be executing another parts of your code while something is happening. Example

```js
console.log('first')

setTimeout(() => {
  console.log('this will happen after 2 seconds')
}, 2000)

console.log('second')
console.log('something is cooking in the back 🎂....')
```

We could say that async code === to multitasking IRL
