function countVowelConsonant(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const myStr = [...str.toLowerCase().split('')]
  const result = myStr
    .map((letter) => (vowels.includes(letter) ? 1 : 2))
    .reduce((acc, item) => {
      let total = acc + item
      return total
    }, 0)
  return result
}
