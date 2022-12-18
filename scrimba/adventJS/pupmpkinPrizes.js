const kittyScores = [
  [39, 99, 76],
  89,
  98,
  [87, 56, 90],
  [96, 95],
  40,
  78,
  50,
  [63],
]

const kittyPrizes = [
  ['💰', '🐟', '🐟'],
  '🏆',
  '💐',
  '💵',
  ['💵', '🏆'],
  ['🐟', '💐', '💐'],
  '💵',
  '💵',
  ['🐟'],
  '🐟',
]

// function flatten(arr) {
//   return arr.flat()
// }

// console.log(flatten(kittyScores))
// console.log(flatten(kittyPrizes))

function flatten(arr) {
  var flat = []

  flatten(arr)

  function flatten(arr) {
    for (var i = 0; i < arr.length; i++) {
      Array.isArray(arr[i]) ? flatten(arr[i]) : flat.push(arr[i])
    }
  }

  return flat
}
console.log(flatten(kittyScores))
console.log(flatten(kittyPrizes))
