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

In production, React apps are often minified and bundled, so the code may be difficult to read directly. However, in development mode, the source code is usually not minified and may be easier to inspect.
Source Maps: In production environments, source maps (which map minified code back to the original source) may be available. If they are exposed, it becomes much easier to reverse-engineer the React app. If they are not exposed, the code will be minified and harder to analyze, but still not impossible.

🚨 Yes, if sensitive information is in src or public, it can still be exposed in the build folder, even after minification and optimization.
This is because React is a frontend framework, meaning everything in src is bundled and served to the client. If sensitive data is included anywhere in src, it will still be accessible in the build output, even if it is obfuscated or minified.

1️⃣ dev.tomorrowland.com (Development Environment)
Purpose: Internal development and testing by developers.

🔹 Key Characteristics:

Used by developers for building and testing new features.
Contains the latest, often unstable code.
Can have debugging tools enabled (e.g., verbose logs, developer consoles).
May be connected to a test database (not real production data).
Might not be fully secured since it's only meant for internal development.
Can be hosted on local machines or internal servers.
🔹 Common Issues in Security Testing (Bug Hunting):

Debug logs may leak sensitive information.
API endpoints might be less protected.
Authentication and authorization rules might be weaker.
Feature flags may reveal upcoming functionalities.




2️⃣ staging.tomorrowland.com (Staging Environment)
Purpose: Pre-production testing before public release.

🔹 Key Characteristics:

Mimics production as closely as possible.
Used by QA testers, security researchers, and internal teams to validate the system.
Connected to a staging database, which may contain anonymized or real data.
Typically secured but might allow testing credentials for access.
Features are almost finalized but still undergoing testing.
Some performance optimizations may already be in place.
🔹 Common Security Issues in Bug Hunting:

Leaked credentials (e.g., default test accounts).
CORS misconfigurations exposing APIs.
Session handling vulnerabilities (e.g., JWT leakage, cookie misconfigurations).
API endpoint exposure, which may be more open than production.
