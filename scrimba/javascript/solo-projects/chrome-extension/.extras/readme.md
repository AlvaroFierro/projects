# Aditional knowledge/resources

## Contents:

- [Creating elements with JS DOM](#elements)
- [localStorage](localStorage.md)

Creating elements with Javascript

## Elements

You can create elements with javascript

## Basic Version

```js
ulEl.innerHTML += '<li>' + myLeads[i] + '</li>'
```

## Basic Version with template strings

```javascript
ulEl.innerHTML += `<li>${myLeads[i]}</li>`
```

## Advanced Version

```javascript
const li = document.createElement('li') //creates an element with a constant called 'li'
li.textContent = myLeads[i] // text content add myLeads index
ulEl.append(li) // then append to the 'ulEl' element
```

> Advanced version it's widely used in real life projects, but both are ok

Append would be the same as

```javascript
element.textContent += displayElement
```
