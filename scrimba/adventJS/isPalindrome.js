function isPalindrome(str) {
  const presentence = str.replace(/[\W_]/g, '').toLowerCase()
  const reversedStr = presentence.split('').reverse().join('')
  return reversedStr === presentence
}

console.log(isPalindrome('abba'))
console.log(isPalindrome('civic'))
console.log(isPalindrome('octopus'))
console.log(isPalindrome('pumpkins'))
console.log(isPalindrome('madam'))
