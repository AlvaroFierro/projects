// create a function that takes a parameter of an array and logs each item in the array

let myCourses = [
  'Learn CSS Animations',
  'UI Design Fundamentals',
  'Intro to Clean Code',
]

function logsOut(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

logsOut(myCourses)
