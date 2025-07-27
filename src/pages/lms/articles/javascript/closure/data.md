# Closure

---

## Questions

--- 

##### Q 1: A closure in JavaScript retains access to variables 
in its lexical scope. Consider the following scenario: 
A function outer defines a variable x and returns an inner 
function that references x. The inner function is invoked 
after outer has finished executing. What happens to x in 
the closure’s scope chain if outer is called multiple times, 
creating multiple closures?

- A: Each closure shares the same x from a single scope, so changes to x in one closure affect all closures.
- B: Each closure has its own independent x from a separate scope created per outer invocation.
- C: The value of x is copied into the closure, so changes to x after outer returns don’t affect the closure.
- D: The closure only retains x if it’s explicitly passed as an argument to the inner function.

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

Each invocation of outer creates a new scope with its own x, 
and the inner function (closure) retains access to 
its specific scope’s x. This ensures independence between closures.

</details>

--- 

##### Q 2: Analyze the following JavaScript code snippet:

```javascript
function createFunctions() {
  let funcs = [];
  for (var i = 0; i < 3; i++) {
    funcs.push(function() {
      return i;
    });
  }
  return funcs;
}
let result = createFunctions();
console.log(result[0](), result[1](), result[2]());
```

- A: 0, 1, 2
- B: 3, 3, 3
- C: undefined, undefined, undefined
- D: 0, 0, 0

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

The var keyword creates a single i in the function scope, 
shared by all closures. When the closures are invoked, 
i has already reached 3 after the loop, so all functions return 3.

</details>

--- 

##### Q 3: Consider the following code and its memory 
diagram at the point where inner is invoked:

```javascript
function outer() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  x = 20;
  return inner;
}
let fn = outer();
fn();
```

In the memory diagram, the closure’s 
scope chain includes outer’s scope 
with x. What value of x is logged when fn() is called, and why?

- A: 10, because x is captured by value at the time inner is defined.
- B: 20, because x is captured by reference and reflects the final value in outer’s scope.
- C: undefined, because x is garbage-collected after outer returns.
- D: 10, because the closure only captures the initial value of x before reassignment.

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

Closures capture variables by reference, not value. When fn() 
is called, inner accesses x from outer’s scope, which was 
updated to 20 before outer returned.

</details>

--- 

##### Q 4: Consider the following code, which uses an 
Immediately Invoked Function Expression (IIFE) to create a closure:

```javascript
let obj = {};
for (let i = 0; i < 2; i++) {
  obj[`key${i}`] = (function(x) {
    return function() {
      return x;
    };
  })(i);
}
console.log(obj.key0(), obj.key1());
```

What is the output of the above code?

- A: 2, 2
- B: 0, 1
- C: 0, 0
- D: undefined, undefined

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

The IIFE creates a new scope for each iteration, capturing the 
current value of i as x. Each closure returned by the IIFE 
retains its own x, resulting in obj.key0() returning 0 and 
obj.key1() returning 1.

</details>

---
