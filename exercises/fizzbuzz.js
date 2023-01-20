// Use a loop to iterate through the numbers 1 through x. Push each number into fb, but push the string "fizz" in place of numbers divisible by 3, "buzz" in place of numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by both 3 and 5.
// Log fb to the console to see the output.
// Hint: Check out the remainder/modulo operator: %.

const fb = []

function fizzbuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fb.push('fizzbuzz')
    } else if (i % 5 === 0) {
      fb.push('buzz')
    } else if (i % 3 === 0) {
      fb.push('fizz')
    } else {
      fb.push(i)
    }
  }
  console.log(fb)
}

fizzbuzz(16)
