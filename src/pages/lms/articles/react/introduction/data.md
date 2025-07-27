# Introduction

---

## Virtual DOM, Diffing, and Reconciliation

---

Real DOM:  
Virtual DOM:  
Diffing: Compare new virtual DOM with current virtual DOM   
Reconciliation: Update real DOM with minimal changes  

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