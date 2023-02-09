// write a loop that makes 7 calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
function pyramid(num) {
  let result = ''
  for (let i = 0; i < num; i++) {
    result += '#'
    console.log(result)
  }
  return result
}
pyramid(7)
