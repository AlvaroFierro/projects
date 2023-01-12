function factorial(n) {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

const number = factorial(5)
console.log(number)
