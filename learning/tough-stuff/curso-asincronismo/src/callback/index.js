function sum(a, b) {
  return a + b
}

function calc(a, b, sumNumbers) {
  return sumNumbers(a, b)
}

console.log(calc(7, 8, sum))

setTimeout(function () {
  console.log('Playing with setTimeout')
}, 5000)

function greet(name) {
  console.log(`Hello ${name}`)
}

setTimeout(greet, 2000, 'Alvaro')
