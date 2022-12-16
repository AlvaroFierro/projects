function insertDashes(arr) {
  const re = /-(\s|-)+-/g
  const strWithDashes = arr.split('').join('-').replace(re, ' ')
  return strWithDashes
}

console.log(insertDashes('hola como estas'))
