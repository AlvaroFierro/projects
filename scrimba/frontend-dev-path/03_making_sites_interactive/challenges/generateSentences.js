function generateSentence(desc, arr) {
  let baseString = `The ${arr.length} ${desc} are `
  const lastItem = arr.length - 1
  for (let i = 0; i < arr.length; i++) {
    if (i === lastItem) {
      baseString += arr[i]
    } else {
      baseString += arr[i] + ', '
    }
  }

  return baseString
}

const mountains = generateSentence('highest mountains', [
  'Mount Everest',
  'Fiji',
])
console.log(mountains)
