// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads = []

// 1. Turn the myLeads string into an array
// 2. Push a new value to the array
// 3. Turn the array into a string again
// 4. Console.log the string using typeof to verify that it's a string

const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-id')
const ulEl = document.getElementById('ul-el')

let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
console.log(leadsFromLocalStorage)

inputBtn.addEventListener('click', () => {
  myLeads.push(inputEl.value)
  inputEl.value = ''
  // * here you set the item from the input value
  localStorage.setItem('myLeads', JSON.stringify(myLeads))
  renderLeads()
  console.log(localStorage.getItem('myLeads'))
})

function renderLeads() {
  let listItems = ''
  for (let i = 0; i < myLeads.length; i++) {
    const index = myLeads[i]
    listItems += `<li><a href=${index} target="_blank">${index}</a></li>`
  }
  ulEl.innerHTML = listItems
}
