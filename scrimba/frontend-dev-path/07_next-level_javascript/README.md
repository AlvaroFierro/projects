# Next Level Javascript

Quick start:

```
$ npm install
$ npm start
```

## Table of Contents

- [Classes](#classes)

# Classes

A function is a special kind of function that works as a template to create objects very much like we saw with the constructor function.

```js
class Module {
  constructor() {
    // properties
    this.courseName = 'Learn Javascript'
    this.studentsEnrolled = 100
    this.studentsCompleted = 50
  }

  // methods (functions)
}

const learnJs = new Module()
```

Another example of classes, properties and methods:

```js
const moduleStats = {
  module1: {
    moduleName: 'Learn JS',
    studentsEnrolled: 2340,
    studentsCompleted: 2210,
  },
  module2: {
    moduleName: 'CSS Basics',
    studentsEnrolled: 1893,
    studentsCompleted: 1810,
  },
  module3: {
    moduleName: 'Responsive Design',
    studentsEnrolled: 4600,
    studentsCompleted: 4357,
  },
}

class Module {
  constructor(data) {
    // these are properties
    Object.assign(this, data)
    this.percentCompletedModule = (this.studentsCompleted / this.studentsEnrolled) * 100
  }

  // these are methods (functions)
  logPercentCompletedModule() {
    console.log(this.percentCompletedModule)
  }
}

const responsiveDesign = new Module(moduleStats.module3)
responsiveDesign.logPercentCompletedModule() // 94.71739130434783
```
