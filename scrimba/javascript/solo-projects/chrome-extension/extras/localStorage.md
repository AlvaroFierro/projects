# Local storage

Local Storage lets you save data in the 🌐 although you refresh the web or even close the browser

**Comprehensive guide** 👉 [here][guide] 👈

## Benefits of using localStorage :

- Has no expiration date
- You can access these values like an object using the getITem() method

```js
/* ---------------- TODO: ✅ ----------------

- 1.  Save a key-value pair in localStorage
- 2.  Refresh the page. Get the value and log it to the console
- 3.  Clear localStorage
      HINTS:
      localStorage.setItem(key, value)
      localStorage.getItem(key)
      localStorage.clear()
      PS: both key and value need to be strings 

*/

localStorage.setItem('Alvaro', 'Hello from a localStorage item')

const name = localStorage.getItem('Alvaro')
console.log(name)
```

## JSON.parse

- We need to parse (analizar) the data before to do something with it
- ❗ JSON.parse converts a JSON string into an object
- ❗ Arrays are objects

Examples of it

```js
JSON.parse('{}') // {}
JSON.parse('true') // true
JSON.parse('"foo"') // "foo"
JSON.parse('[1, 5, "false"]') // [1, 5, "false"]
JSON.parse('null') // null
```

- ❗ Remember that backtips or template strings converts anything to an STRING

```js
const meJson = `
  {
    "name": 'alvaro',
    "age": 19,
    "single":true,
    "favorite_series": ['suits', '13 reasons why']
  }
`

const me = JSON.parse(meJson)
console.log(me)

console.log(typeof me) // ❗ This is gonna be an object
```

## JSON.stringify

```js
const car = {
  make: 'Ford',
  model: 'Mustang',
  year: 2022,
  active: true,
}

const myCar = JSON.stringify(car)
console.log(myCar)

console.log(typeof myCar) // ❗ This is gonna be a string
```

## Exercise time! 🦾

```js
let myLeads = `["www.awesomelead.com"]`

// 1. Turn the myLeads string into an array

myLeads = JSON.parse(myLeads)
console.log(myLeads)
console.log(typeof myLeads)

// 2. Push a new value to the array

myLeads.push('www.mysite.com')
console.log(myLeads)

// 3. Turn the array into a string again

myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads)

// 4. Console.log the string using typeof to verify that it's a string
```

[guide]: https://blog.logrocket.com/localstorage-javascript-complete-guide/
