# API's

Overview

- [API's](#apis)
  - [What is an API?](#what-is-an-api)
- [Endpoints](#endpoints)
- [API's used](#apis-used)
- [Clients, servers and requests](#clients-servers-and-requests)
  - [Client](#client)
  - [Server](#server)
  - [Request](#request)
  - [Response](#response)
- [JSON](#json)
- [Fetch](#fetch)
- [REST API](#rest-api)
  - [Principles of `REST`](#principles-of-rest)
    - [Client \& Server separation](#client--server-separation)
    - [Statelessness](#statelessness)
    - [Accessing `resources`](#accessing-resources)
- [Nested Resources](#nested-resources)
- [Query Strings](#query-strings)
- [Promises](#promises)
- [Useful links](#useful-links)

## What is an API?

An API stands out for Application Programming Interface, which allows you to have interactivity within your website.

[Back to top](#apis)

# Endpoints

- An endpoint is a URL that is used to access a resource on a server. It could be a file, information, or a service.

- The endpoint must be protected from unauthorized users, sometimes using a token or a key like an API key.

[Back to top](#apis)

# API's used

- DOM API (.getElementById, .querySelector, .addEventListener, etc.)
- Array methods API (.map, .filter, .reduce, etc.)

[Back to top](#apis)

# Clients, servers and requests

## Client

A `client` is any device that connects to the internet to get data from somewhere (`server`) and make requests to it.

## Server

A `server` is a computer that is connected to the internet and is waiting for requests from clients asking for something, then responds to the client with a thing (response).

## Request

A `request` is a message sent by a client to a server asking for a resource (data, image, HTML page, authentication token, etc).

Requires a connection to the internet

## Response

- The reply to the `request` or client
- Could contain the resource (HTML, JSON data, etc) asked for by the client.
- Could contain a response code (200, 404, 500, etc) that indicates the status of the request.

[Back to top](#apis)

# JSON

Stands for JavaScript Object Notation and is a way to store data in a way that is easy to read and write. Practically is JavaScript

[Back to top](#apis)

# Fetch

Fetch is a way to make requests to a server from the client side.

E.g.:

```js
fetch('https://dog.ceo/api/breeds/image/random')
  .then((res) => res.json())
  .then((data) => console.log(data))
```

In your console should appear something like this:

```bash
$ {message: "https://images.dog.ceo/breeds/malamute/n02110063_16966.jpg", status: "success"}
```

[Back to top](#apis)

# REST API

Stands for `REpresentational State Transfer`. Is a design pattern to provide a standard way for clients and servers to communicate

## Principles of `REST`

### Client & Server separation

![without-rest](https://user-images.githubusercontent.com/71525061/224423185-23466755-91df-4347-b5bf-a0b82c38624d.png)

_SSR (Server Side Rendering)_

![restful-setup](https://user-images.githubusercontent.com/71525061/224423933-6d1f13b6-ae63-490b-ac29-38e549d87aa7.png)

_RESTFUL SETUP_

### Statelessness

When the client requests a server. The server doesn't maintain any memory of that request. So when a request is sent to the server, the server fulfills that request if it can and sends back a response and then essentially forgets everything about that request.

If often called `session state` or `sessionless`

### Accessing `resources`

That's the interaction between the client and the server is the client asking the server to send it some sort of resource.

![resources](https://user-images.githubusercontent.com/71525061/224426490-6d7045c4-1461-4cca-ba25-dc36bc2a7b57.png)

[Back to top](#apis)

# Nested Resources

![nested-resources](https://user-images.githubusercontent.com/71525061/224428542-46cd6adb-00d8-41ea-85d6-4bc5d0d7f273.png)

[Back to top](#apis)

# Query Strings

Parameters? 🤔

A way to filter the results that we get back

![filtering-results](https://user-images.githubusercontent.com/71525061/224429164-bb7031f5-9698-4202-9903-ea3ecc206879.png)

[Back to top](#apis)

# Promises

[Promises][promises] are a way to handle asynchronous tasks in Javascript. A Promise has many similarities to a progress bar; they represent an unfinished and ongoing process.

For more details about promises check this out this [readme.md file](../09_working_with_apis/async-js/readme.md#promises)

# Useful links

- [HTTP Requests](https://docs.google.com/presentation/d/e/2PACX-1vSxS5iMjTveO-IBqdDE65dgouZStLTW-Vlyt3N9js3FnMCeW8cwSgmrkGzX2i_g0qGCM6fJDKZ-r3Se/pub?start=false&loop=false&delayms=3000&slide=id.g7fabbaef24_1_232)
- [REST](https://docs.google.com/presentation/d/e/2PACX-1vTEztADtG8OhJ4695LYwtVftNgriQK7zAOsYNru9OfaPA1mQEAlkNd1BqgOdec1aZRC6PxSxOnlrBeH/pub?start=false&loop=false&delayms=3000&slide=id.g7fabbaef24_1_232)
- [Promises](https://discordjs.guide/additional-info/async-await.html#how-do-promises-work)

[Back to top](#apis)
