## What is a Component?
==> A component is a JavaScript function or class that returns a React element (i.e., JSX) describing what should appear on the screen
i.Functional Components
Functions that return JSX.
Simpler and easier to read.
Introduced as "stateless" components but can now manage state using Hooks [[(like useState and useEffect)]].

## Key Features:
Lightweight and easy to test.
Can use React Hooks for state and lifecycle methods.
Example:
import React, { useState } from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
Welcome is a functional component that accepts props.
Counter is a functional component with state managed using useState.

## Class Components
What are they?

ES6 classes that extend React.Component.
Before React Hooks, this was the only way to manage state and lifecycle methods.
Key Features:

Use the render() method to return JSX.
State is managed using this.state and updated using this.setState().
Lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.
Example:

import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
Welcome and Counter are class components.
Counter manages state using this.state.

## Why Use Fragments[[<></>]]?
In React, a component must return a single parent element.
Sometimes you need to wrap multiple elements but don’t want an extra <div> or <span> in the DOM.
Fragments solve this by grouping elements without adding any extra tags.
function App() {
  return (
    <>
      <h1>Hello World</h1>
      <p>This is a React Fragment example.</p>
    </>
  );
}


# Use npm start when developing the app.(Development Build)
# Use npm run build when you're ready to(deployment build) deploy your app to a server or hosting platform (like Vercel, Netlify, or Firebase Hosting).
