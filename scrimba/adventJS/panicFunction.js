/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"a

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/

function panic(sentence) {
  if (sentence.split('').length > 1) {
    return sentence.toUpperCase().split(' ').join(' 😱 ') + '!'
  } else {
    return sentence.toUpperCase() + '!'
  }
}

// Test your function
console.log(panic('Hello'))
console.log(panic('winter is coming'))
console.log(panic("I'm almost out of coffee"))
console.log(panic('I am panicking right now'))
