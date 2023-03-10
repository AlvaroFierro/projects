# HTTP Requests

Overview

- [HTTP Requests](#http-requests)
- [HTTP](#http)
  - [Protocol](#protocol)
- [Components of a Request](#components-of-a-request)
  - [Path (URL)](#path-url)
  - [Methods](#methods)
  - [Body](#body)
  - [Headers](#headers)
    - [Changing the Content-Type Header](#changing-the-content-type-header)
- [Requesting the JSON Placeholder API](#requesting-the-json-placeholder-api)

# HTTP

`HTTP` stands for `HyperText Transfer Protocol`. It is a protocol that is used to transfer data between a client and a server. It is a stateless protocol, which means that the server does not keep any data (state) between two requests. The server will treat each request as independent of the other requests.

Also determines how Hypertext (text) should be transmitted over the internet.

## Protocol

A **protocol** is a system of rules that define how data is exchanged within or between computers. Communications between devices require that the devices agree on the format of the data that is being exchanged. The set of rules that defines a format is called a protocol.

# Components of a Request

1. **[Path](#path-url)** (URL)
2. **[Methods](#methods)**
   - GET, POST, PUT DELETE
   - Others: (PATCH, OPTIONS, etc.)
3. **[Body](#body)** (depends on the method)
4. **[Headers](#headers)** (metadata)
   - Content-Type
   - Authorization
   - User-Agent
   - Accept
   - Cookie
   - etc.

## Path (URL)

- Is the address where your desired resource "lives"
- BaseURL vs Endpoint
  - Base URL: `https://apis.scrimba.com/jsonplaceholder`
  - Endpoint: `/posts`
  - FUll URL: `https://apis.scrimba.com/jsonplaceholder/posts`

## Methods

Telling the server what you want to do with the resource.

- `GET` - Getting data from the server
- `POST` - Adding new data to the server
  - Like blog POST of Facebook POST
- `PUT` - Updating existing data on the server
- `DELETE` - Deleting data from the server

## Body

- The data we want to send to the server.
- Only makes sense with `POST` and `PUT` requests.
- Needs to be returned into `JSON` first

```js
const url = 'https://apis.scrimba.com/jsonplaceholder/todos'

fetch(url, {
  method: 'POST',
  body: JSON.stringify({
    title: 'Alvaro Fierro is making a POST request',
    completed: false,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
```

## Headers

They are used to tell the server what kind of data we are sending and what kind of data we want to receive back.

- Extra/meta-information about the outgoing request
- Auth, body info, client info, etc.

### Changing the Content-Type Header

Changing the `Content-Type` header to `application/json` will tell the server that we are sending JSON data.

```js
const url = 'https://apis.scrimba.com/jsonplaceholder/todos'

fetch(url, {
  method: 'POST',
  body: JSON.stringify({
    title: 'Alvaro Fierro is making a POST request',
    completed: false,
  }),
  headers: {
    'Content-Type': 'application/json',
  },
})
```

# Requesting the JSON Placeholder API

```js
const URL = 'https://jsonplaceholder.typicode.com/posts'

fetch(URL)
  .then((res) => res.json())
  .then((data) => console.log(data))
```
