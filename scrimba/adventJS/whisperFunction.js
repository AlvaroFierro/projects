/* ! INSTRUCTIONS 

Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

const whisper = (sentence) => {
  const lastItem = sentence.length - 1
  const toLower = sentence.toLowerCase()
  return `shh.. ${toLower.slice(0, lastItem)}`
}

console.log(whisper('PLEASE STOP SHOUTING.'))
console.log(whisper("MA'AM, this is a Wendy's!"))
