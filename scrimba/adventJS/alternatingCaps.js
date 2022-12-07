// alternating caps
// write a function that takes an string and returns a new string with every other letter capitalized
// ex: alternatingCaps("hello world") => "HeLlO WoRlD"

function altCaps(str) {
  let newStr = ' '
  for (let i = 0; i < str.length; i++) {
    i % 2 === 0
      ? (newStr += str[i].toUpperCase())
      : (newStr += str[i].toLowerCase())
  }
  return newStr
}

console.log(altCaps('this is my solution for today folks 😂'))
