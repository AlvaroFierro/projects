let generateSentence = (desc, arr) => {
  let string = `The ${arr.length} ${desc} are `
  const lastItem = arr.length - 1

  for (let i = 0; i < arr.length; i++) {
    i === lastItem ? (string += arr[i]) : (string += arr[i] + ', ')
  }
  return string
}

const sentence = generateSentence('largest mountains', ['Everest', 'Fiji'])
console.log(sentence)
