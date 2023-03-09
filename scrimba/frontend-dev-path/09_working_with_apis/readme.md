# API's

## What is an API?

An API stands out for Application Programming Interface, which allows you to have interactivity within your website.

# Endpoints

- An endpoint is a URL that is used to access a resource on a server. It could be a file, information, or a service.

- The endpoint must be protected from unauthorized users, sometimes using a token or a key like an API key.

# API's used

- DOM API (.getElementById, .querySelector, .addEventListener, etc.)
- Array methods API (.map, .filter, .reduce, etc.)

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

# JSON

Stands for JavaScript Object Notation and is a way to store data in a way that is easy to read and write. Practically is JavaScript

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
