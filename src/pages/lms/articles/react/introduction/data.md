# Introduction

---

## What is React?

React is a JavaScript `library` developed by Mera(Facebook) for building user interfaces,
particularly for single-page applications where a smooth user experience is essential.
It allows developers to create large web applications that can change data without
reloading the page, enhancing performance and user engagement.

**Key Features of React:**

- `Component-Based Architecture:` React encourages the development of applications using
  reusable components, which encapsulate their own structure, behavior, and styling. This
  modular approach simplifies the development process and enhances maintainability.

- `Virtual DOM:` React utilizes a virtual representation of the real DOM, which allows it
  to efficiently update and render components.

- `Declarative Syntax:` React employs a declarative programming style, allowing developers
  to describe what the UI should look like for a given state. This makes the code more
  predictable and easier to debug.

- `JSX (JavaScript XML):` React uses JSX, a syntax extension that allows developers to
  write HTML-like code within JavaScript. This makes it easier to visualize the structure
  of the UI and enhances the readability of the code.

- `Unidirectional Data Flow:` React enforces a one-way data flow, meaning that data flows
  in a single direction, from parent components to child components. This makes it easier
  to understand how data changes affect the UI and helps in managing state effectively.

- `Ecosystem and Community:` React has a vast ecosystem of libraries and tools, such as
  React Router for routing and Redux for state management. Its large community contributes
  to a wealth of resources, tutorials, and third-party libraries, making it easier for
  developers to find support and solutions.

---

## Virtual DOM, Diffing, Reconciliation, Hydration, and Rendering

React utilizes a virtual representation of the real DOM, which allows it
to efficiently update and render components. 

When the state of an object changes, React first updates the virtual DOM, then 
compares it with the previous version (a process known as "diffing") to determine
the minimal number of changes required to update the real DOM. This results in 
improved performance and a smoother user experience.

**To summarize the concepts:**

- `Real DOM:` The Real DOM (Document Object Model) is the actual representation of 
a web page's structure and content in the browser. It is a tree-like structure 
that represents all the elements of a webpage.

- `Virtual DOM:` It is a lightweight copy of the real DOM in memory for efficient
updates.

- `Diffing:` Comparing new virtual DOM with current virtual DOM (updating the real 
DOM is expensive, so React uses this method). It’s performed using a heuristic 
algorithm (e.g., React’s reconciliation algorithm) to optimize performance.

- `Reconciliation:` Updating real DOM with minimal changes based on virtual DOM.

- `Hydration:` The process of taking a server-rendered HTML page and attaching 
React's event listeners and state to it. Hydration also involves initializing 
React’s state and event listeners on the client side for server-rendered content.

- `Rendering:` Rendering in React refers to the process of converting React components
into a format that can be displayed on the web page. Rendering involves generating the 
DOM tree from components, either on the client (CSR) or server (SSR)

---

## React Installation

### **1. Manual Setup**

Setting up a React project manually involves creating a simple HTML file and 
including React and ReactDOM libraries via CDN (Content Delivery Network) or local 
links. This approach is not suitable for production.

**Steps:**
- Create Project Directory:
```bash
mkdir my-react-app
cd my-react-app
```

- Create index.html File: We need to import these packages: react - react-dom - babel

In React versions 17 and before:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My React App with Manual Setup</title>
    <!-- Include React and ReactDOM via CDN -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        // Option 1:
        // Your React code will go here
        function App() {
            return <h1>Hello, React!</h1>;
        }
        
        ReactDOM.render(<App />, document.getElementById('root'));

        // Option 2:
        // Define a React component using createElement
        const Greeting = () => {
          return React.createElement('h1', null, 'Hello, World!');
        };

        // Render the App component into the root div
        ReactDOM.render(React.createElement(Greeting), document.getElementById('root'));
    </script>
</body>
</html>
```

In React versions 18 and above:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My React App with Manual Setup</title>
    <!-- Include React and ReactDOM via CDN -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
      // create the root element first
      const root = ReactDOM.createRoot(document.getElementById('root'));
      
      // create the component
      function App() {
        return <h1>Hello, React!</h1>;
      }
      
      // render the element
      root.render(<App />);
    </script>
</body>
</html>
```

- Open the HTML File in a Browser

### **2. Create React App (CRA)**

Create React App is a command-line tool that sets up a new React project with a 
sensible default configuration. It abstracts away the build configuration, 
allowing developers to focus on writing code. This tool is less recommended for 
new projects due to slower build times and lack of modern features. It is better
to use newer tools like Vite or Next.js.

**Steps:**

- Create a New Project:

```bash
npx create-react-app my-app
cd my-app
```

- Add New Component: We can add new component or edit the `<App/>` component inside
the `src/App.js` file.

```javascript
function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
```

- Start the Development Server:

```bash
npm start
```

### **3. Vite**

Vite is a modern build tool that offers a faster development experience by 
leveraging native ES modules. We can use Vite for the production single-page
application.

**Steps:**

- Create a New Project

```bash
npm create vite@latest my-app --template react
cd my-app
```

- Install Dependencies:
```bash
npm install
```

- Add New Component: We can add new component or edit the `<App/>` component inside
  the `src/App.js` file.

```javascript
function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
```

- Start the Development Server:
```bash
npm run dev
```

### **4. Next.js**

Next.js is a React framework that enables server-side rendering, static site 
generation, and API routes. It is ideal for building production-ready applications
with features like routing and optimized performance.

**Steps:**

- Create a New Project:

```bash
npx create-next-app my-app
cd my-app
```

- Add New Component: We can add a new component or edit `src/app/page.js` file.
(Pages Router)

```javascript
function Home() {
  return (
    <div className="App">
      <h1>Hello, NextJS!</h1>
    </div>
  );
}

export default Home;
```

- Start the Development Server:
```bash
npm run dev
```

### **5. Gatsby**

A React-based framework for building static websites. It offers a rich plugin 
ecosystem and is optimized for performance. Installation is similar to Next.js:

```bash
npx gatsby new my-app
```

### **6. Parcel**

A web application bundler that requires zero configuration. It can be used to set 
up a React project quickly:

```bash
npm install -g parcel-bundler
mkdir my-app && cd my-app
npm init -y
npm install react react-dom
```

---

## createElement vs createRoot

`createElement()`: You can create a React element. In React 18 and above, 
JSX automatically handles `createElement` behind the scenes, so you won’t 
see this function explicitly in your main code structure. The function arguments
are:
- the type of the element
- the props for the element
- the children of the element

`createRoot()`: To render a React application. This method
is used with React 18 and later to enable concurrent features.
We need to use `render` function, too.


```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

// React 17 and before
// Create a React element
const element = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, World!'
);
ReactDOM.render(element, document.getElementById('root'));

// React 18 and later
// Create a root and render the element
const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  return <div className="App">Hello, React!</div>
}
root.render(App);
```

---

## Strict Mode

- `JS Strict Mode:` Strict mode is where the JavaScript engine throws an error when it
encounters problematic code rather than ignoring it. In a JS file we have:

```javascript
"use strict";
```

- `React Strict Mode:` React’s `<StrictMode>` component checks its contents for 
potential issues and logs warnings in the browser console. The strict mode in 
React is different from the strict mode in JavaScript, but their purpose of 
eliminating bad code is the same. `<StrictMode>` may cause components to render 
twice in development to detect side effects.

```javascript
<StrictMode>
    <App />
</StrictMode>
```

---

## Pure

These comments signal to bundlers like Webpack that the code is pure, allowing 
them to remove redundant code during bundling. This means that the code does not have side effects and can be
safely optimized or eliminated during the build process. This annotation is rarely
added manually by developers, as it’s typically inserted by transpilers or 
libraries.

```javascript
const element = /*#__PURE__*/ React.createElement('div', null, 'Hello, World!');
```

---

## Questions

--- 

##### Q 1: What is the primary purpose of the virtual DOM in React?

- A: To replace the real DOM entirely for faster rendering
- B: To store a lightweight copy of the real DOM in memory for efficient updates
- C: To cache user interactions before applying them to the real DOM
- D: To directly manipulate the real DOM without reconciliation  

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

The virtual DOM is a memory-based representation used to compute minimal updates, not to replace the real DOM or cache interactions.

</details>

---

##### Q 2: What process does React use to compare the new virtual DOM with the previous one?

- A: Rendering
- B: Reconciliation
- C: Diffing
- D: Hydration

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

Diffing is the process of comparing the new and previous virtual DOM trees to identify changes. Reconciliation applies those changes to the real DOM

</details>

---

##### Q 3: Why does React avoid directly updating the real DOM for every change?

- A: The real DOM is immutable and cannot be updated
- B: Direct updates are computationally expensive and can degrade performance
- C: The real DOM lacks a tree structure for updates
- D: Direct updates bypass React’s state management

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

Direct real DOM updates are slow due to reflows and repaints, which the virtual DOM minimizes by calculating efficient changes

</details>

---

##### Q 4: What happens after React identifies the minimal changes needed for the real DOM?

- A: It discards the virtual DOM and rebuilds the real DOM
- B: It stores the changes in memory for future updates
- C: It triggers a full re-render of the entire application
- D: It applies those changes to the real DOM in a process called reconciliation

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

Reconciliation is the step where React applies the minimal changes to the real DOM, avoiding unnecessary re-renders

</details>

---

##### Q 5: In a React application, when is a new virtual DOM tree created?

- A: Whenever a component’s state or props change
- B: When the browser refreshes the page
- C: When the real DOM is manually updated
- D: Only during the initial render of the application

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

A new virtual DOM tree is generated whenever a component’s state or props change, triggering the diffing and reconciliation process.

</details>