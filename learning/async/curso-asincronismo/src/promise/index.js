// a promise is something will resolve something at certain point, now, then, or never

// has three status:
// * pending: initial state, neither fulfilled nor rejected.
// * fulfilled: meaning that the operation was completed successfully.
// * rejected: meaning that the operation failed (error)

// ! A promise is said to be settled if it is either fulfilled or rejected, but not pending.

const promise = new Promise(function (resolve, reject) {
  resolve('hey!')
})

const cows = 15

const countCows = new Promise(function (resolve, reject) {
  cows > 10
    ? resolve(`cows available ${cows}`)
    : reject("There's no cows availables at the moment")
})

countCows
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log('finally')
  })
