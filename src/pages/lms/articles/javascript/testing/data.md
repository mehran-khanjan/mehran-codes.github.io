# Testing

---

## Code Coverage

---

## Questions

--- 

##### Q 1: Given the following TypeScript function and Jest test:

```typescript
function processValue(value: number): string {
  let result = "";
  if (value > 0) {
    result = "Positive";
  } else {
    result = "Non-positive";
  }
  return result;
}

// Jest Test
describe("processValue", () => {
  it("handles positive values", () => {
    expect(processValue(5)).toBe("Positive");
  });
});
```
What is the statement coverage percentage for this code after running the test?

- A: 100%
- B: 80%
- C: 60%
- D: 50%

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

Statement coverage measures the percentage 
of executed statements. The function 
has five statements: variable declaration 
(let result = ""), the if condition, 
the result = "Positive" assignment, 
the result = "Non-positive" assignment, 
and the return statement. The test only 
exercises the value > 0 branch, executing 
four statements (missing the result = 
"Non-positive" assignment). Thus, 4/5 
statements are covered, resulting in 
80% statement coverage.

</details>

--- 

##### Q 2: Consider the following 
TypeScript function and its Jest test:

```typescript
function categorizeNumber(num: number): string {
  if (num > 0) {
    if (num > 100) {
      return "Large Positive";
    }
    return "Small Positive";
  } else if (num === 0) {
    return "Zero";
  } else {
    return "Negative";
  }
}

// Jest Test
describe("categorizeNumber", () => {
  it("handles small positive numbers", () => {
    expect(categorizeNumber(50)).toBe("Small Positive");
  });
  it("handles zero", () => {
    expect(categorizeNumber(0)).toBe("Zero");
  });
});
```

What is the branch coverage percentage for this code?

- A: 100%
- B: 75%
- C: 50%
- D: 25%

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

Branch coverage measures the percentage of executed branches 
in conditional logic. The function has four 
branches: `num > 0 && num > 100` , `num > 0 && !(num > 100)`,
`num === 0`, and `num < 0`. The tests cover two 
branches: `num > 0 && !(num > 100)` (for `num = 50`) and `num === 0`. 
The branches for `num > 100` and `num < 0` are not tested. 
Thus, 2/4 branches are covered, resulting in 50% branch coverage.

</details>

---

##### Q 3: Given the following JavaScript code and Jest test:

```javascript
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// Jest Test
describe("math operations", () => {
  it("tests addition", () => {
    expect(add(2, 3)).toBe(5);
  });
  it("tests multiplication", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
```

What is the function coverage percentage for this code?

- A: 100%
- B: 66.67%
- C: 50%
- D: 33.33%

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

Function coverage measures the percentage of 
functions called during test execution. There 
are three functions: add, subtract, and 
multiply. The tests call add and multiply, 
but not subtract. Thus, 2/3 functions are 
covered, resulting in 66.67% function coverage.

</details>

---

##### Q 4: Consider the following TypeScript function and Jest test, with a coverage report indicating uncovered lines:

```typescript
function toggleStatus(status: boolean, priority: number): string {
  if (status) { // Line 2
    if (priority > 5) { // Line 3
      return "High Priority Active"; // Line 4
    }
    return "Active"; // Line 6
  } else { // Line 7
    if (priority < 0) { // Line 8
      return "Invalid Priority"; // Line 9
    }
    return "Inactive"; // Line 11
  }
}

// Jest Test
describe("toggleStatus", () => {
  it("tests active status with low priority", () => {
    expect(toggleStatus(true, 3)).toBe("Active");
  });
});
```

The coverage report indicates that lines 4, 8, 9, and 
11 are uncovered.
What is the line coverage percentage?

- A: 80%
- B: 60%
- C: 40%
- D: 20%

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

Line coverage measures the percentage of executed 
lines. The function has 10 lines of code 
(excluding empty lines or braces): lines 2, 
3, 4, 6, 7, 8, 9, 11, plus the function 
signature and return statements. The test 
executes lines 2, 3, 6, and the function 
signature (4 lines), as it follows the 
status = true and priority {'<='} 5 path. 
Lines 4, 8, 9, and 11 are uncovered, 
confirming 6 lines are not executed. 
Thus, 4/10 lines are covered, resulting 
in 40% line coverage.

</details>

---

##### Q 5: A Jest coverage report for a 
TypeScript file getNewCheckedIds.ts shows the following:

```bash
File: getNewCheckedIds.ts
% Stmts: 80%
% Branch: 50%
% Funcs: 100%
% Lines: 80%
Uncovered Lines: 9, 10
```
Based on this report, which of the following statements is true?

- A: All branches in getNewCheckedIds.ts are fully tested.
- B: Lines 9 and 10 are executed during testing.
- C: The file has 100% statement coverage.
- D: All functions in getNewCheckedIds.ts are called during testing.

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

The report shows 100% function coverage, 
meaning all functions are called (A is true). 
Branch coverage is only 50%, so not all branches 
are tested (B is false). Uncovered lines 9 and 10 
are not executed (C is false). Statement coverage 
is 80%, not 100% (D is false). 

</details>

--- 