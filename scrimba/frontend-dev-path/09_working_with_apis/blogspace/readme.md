# HTTP Requests

Overview

- [HTTP Requests](#http-requests)
- [HTTP](#http)
  - [Protocol](#protocol)
- [Components of a Request](#components-of-a-request)
  - [Path (URL)](#path-url)
  - [Methods](#methods)
- [Requesting the JSON Placeholder API](#requesting-the-json-placeholder-api)

# HTTP

`HTTP` stands for `HyperText Transfer Protocol`. It is a protocol that is used to transfer data between a client and a server. It is a stateless protocol, which means that the server does not keep any data (state) between two requests. The server will treat each request as independent of the other requests.

Also determines how Hypertext (text) should be transmitted over the internet.

## Protocol

A **protocol** is a system of rules that define how data is exchanged within or between computers. Communications between devices require that the devices agree on the format of the data that is being exchanged. The set of rules that defines a format is called a protocol.

# Components of a Request

1. **Path** (URL)
2. **Methods**
   1. GET, POST, PUT DELETE
   2. Others: (PATCH, OPTIONS, etc.)
3. **Body** (depends on the method)
4. **Headers** (metadata)
   1. Content-Type
   2. Authorization
   3. User-Agent
   4. Accept
   5. Cookie
   6. etc.

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

# Requesting the JSON Placeholder API

```js
const URL = 'https://jsonplaceholder.typicode.com/posts'

fetch(URL)
  .then((res) => res.json())
  .then((data) => console.log(data))
```
