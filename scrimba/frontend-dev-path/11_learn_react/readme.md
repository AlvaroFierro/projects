# Understanding React core concepts

# Props

Props are the information that you pass to a JSX tag. For example, `className`, `src`, `alt`, `width`, and `height` are some of the props you can pass to an <img>:

App.js

```jsx
// Parent component
function Avatar() {
  return <img className="avatar" src="https://i.imgur.com/1bX5QH6.jpg" alt="Lin Lanying" width={100} height={100} />;
}

export default function Profile() {
  return <Avatar />;
}
```

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const firstName = 'Joe';
  const lastName = 'Schmoe';

  return (
    <h1>
      Hello {firstName} {lastName}!
    </h1>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```
