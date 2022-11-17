// let vs const

// * let use for variables (values that can change with the time)
// * const use for constants (values that DOES NOT change with the time)

const player = 'Alvaro'
const oponent = 'Jose'
const game = 'Snake Game'
let points = 0
let hasWon = false

points += 100
hasWon = true

if (hasWon) {
  console.log(
    `Player ${player} has won the game ${game} against ${oponent} with ${points} points`
  )
} else {
  console.log(
    `Player ${oponent} has won the game ${game} against ${player} with ${points} points`
  )
}
