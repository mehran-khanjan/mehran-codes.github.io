# Introduction to JavaScript

---

JavaScript is a programming language created at **Netscape (now part of Mozilla)** in 1995.
Due to a trademark conflict with **Sun Microsystems (now Oracle)**, it could not be officially
named "JavaScript," so the standardized version is called **ECMAScript**.
The creators submitted JavaScript to ECMA (European Computer
Manufacturers Association) to standardize its specifications.

## JS Key Features:

---

- High-level: Uses human-readable syntax and handles complex tasks
  (e.g., memory management) automatically.
- Dynamic: Variables can change types at runtime, and objects can be
  modified flexibly (e.g., adding properties dynamically).
- Interpreted: Executed line-by-line by an interpreter (rather
  than being pre-compiled).

## Questions

--- 

##### Q 1: When was JavaScript created?

```javascript
const postPath = path.join(
    process.cwd(),
    'src',
    'pages',
    'javascript',
    'introduction',
    'data.md'
);
```

- A: 1993
- B: 1994
- C: 1995
- D: 1996

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

Within the function, we first declare the `name` variable with the `var` keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of `undefined`, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the `name` variable, so it still holds the value of `undefined`.

Variables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get *initialized*. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`.

</details>

---