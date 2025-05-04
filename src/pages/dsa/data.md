# Data Structure and Algorithm

---

## Asymptotic Analysis

---

## Amortized Analysis

---

## Array

--- 

## Linked List

---

## Stack

---

## Queue

---

## Hashing

---

## Recursive
1. **bottom-up substitution**: linear
2. **top-down substitution**: linear
3. **characteristic equations**
   - **homogeneous linear** 
   - **non-homogeneous linear**
4. **recursion tree**: for non-homogeneous and divide-and-conquer cases
5. **the master theorem**: for non-homogeneous and divide-and-conquer cases
6. **Akra-Bazzi method**: for non-homogeneous and divide-and-conquer cases  

---

## Tree  

The most important Trees

### Free Tree
A connected acyclic graph.

### Rooted Tree
A connected acyclic graph with one node designated as the root, and its children are also rooted trees

### Full Rooted Tree


### Binary Tree
A rooted tree where each node has a maximum degree of 2

### Full Binary Tree
A rooted binary tree with no nodes having only one child, and all leaves are at the same level

### Complete Binary Tree
A rooted binary tree where all levels except possibly the last are completely filled, and nodes in the last level are filled from left to right

### General Tree
A rooted tree (nodes can have any number of children)

### Forest
A collection of general trees

### BST (Binary Search Tree)
- A binary tree where each node has a key
- The key of each node is **greater than or equal** to all keys in its left subtree
- The key of each node is **less than or equal** to all keys in its right subtree

### AVL Tree
- A balanced BST
- Balanced means the balance factor (difference in height between left and right subtrees) is 0, -1, or +1 for every node

### Red-Black Tree
A type of BST (Binary Search Tree) where each node is either red or black and satisfies the following properties:
- The root is black
- Red nodes cannot have red children (i.e., if a node is red, its children must be black)
- Every path from a node to its descendant leaves contains the same number of black nodes (this ensures the "black height" is consistent)
- Leaves (null/NIL nodes) are considered black

### Order-Statistic Tree
A Red-Black Tree where each node, in addition to its key, stores a size attribute  
Size = Number of nodes in its subtree (including itself)

### 2-3-4 Tree
A rooted tree where:
- Keys per Node: Each node contains 1, 2, or 3 keys, stored in ascending order.
- Children:
  - If a node is a leaf, it has 0 children
  - If a node is internal (non-leaf), it has 𝑥+1 children (where 𝑥 = number of keys in the node)
- Balance: All leaves are at the same level (perfectly balanced)
- Split Operation:
  - When a node overflows (has 3 keys), the middle key is promoted to the parent node
  - The remaining keys form two new child nodes

### B-Tree
A balanced tree of degree 𝑡 where:
- Keys per Node:
  - Minimum: 𝑡−1 keys
  - Maximum: 2𝑡−1 keys (except the root, which can have as few as 1 key)
- Ordering: Keys are stored in ascending order
- Children:
  - A node with 𝑥 keys has 𝑥+1 children (if internal) or 0 children (if a leaf)
- Root Exception: The root can violate the minimum key rule (may have 1 key)
- Balance: All leaves reside at the same level

### Treap (Tree + Heap)
A hybrid data structure combining properties of a Binary Search Tree (BST) and a Min-Heap:  
Each node stores a pair (𝑥, 𝑦), where:
- 𝑥 → BST key (follows in-order sorting: left subtree ≤ node ≤ right subtree)
- 𝑦 → Heap priority (typically random, enforcing min-heap or max-heap hierarchy)

### Trie (Radix Tree / Prefix Tree
A rooted tree optimized for lexicographic sorting (e.g., dictionaries, autocomplete)
- Prefix-Based
  - Each node represents a character (or part of a string)
  - Edges between nodes spell out prefixes of stored words
- Root: Represents an empty string
- Terminal Nodes: Mark the end of a valid word (often flagged with a boolean)

---

## Heap
A heap is a specialized tree-based data structure that satisfies specific ordering properties. Below are its main types
- Fibonacci Heap: 
  - A collection of min-heap trees with relaxed structure for amortized O(1) insert/merge
  - Supports decrease-key in O(1) amortized time (used in Dijkstra’s algorithm)
  - Complex to implement due to lazy consolidation

- Binomial Heap:
  - A set of binomial trees (each follows min-heap order)
  - Supports union (merge) in O(log n) time
  - Less efficient than Fibonacci heaps but simpler

- Pairing Heap
  - A self-adjusting heap variant with excellent practical performance
  - Simpler than Fibonacci heaps but lacks tight theoretical bounds

- Complete: in binary heaps ensures optimal space usage (array representation)

- Deap (Double-Ended Heap): A hybrid of min-heap and max-heap (not covered here)

- Binary Heap: A complete binary tree with one of two possible heap properties
  - Min-Heap
    - The key of each parent node is ≤ the keys of its children
    - Root holds the minimum element
  - Max-Heap
    - The key of each parent node is ≥ the keys of its children
    - Root holds the maximum element

---

## Sort

### Selection Sort
- Assume the first element is the current maximum (max). 
- Compare all remaining elements with max and update max if a larger element is found. 
- Swap max with the last element of the unsorted portion. 
- Reduce the array length by 1 (ignore the sorted last element in the next iteration). 
- Repeat until the entire array is sorted
- In-place: Uses constant extra space (O(1))
- Unstable: Does not preserve the relative order of equal elements

### Bubble Sort
- Compare adjacent elements pairwise from left to right. 
- Swap if the first element is greater than the second (for ascending order). 
- Reduce the effective array length by 1 after each pass (the largest element "bubbles up" to the end). 
- Repeat until no more swaps are needed (array is sorted)
- In-place: Uses constant extra space (O(1))
- Stable: Preserves the order of equal elements

### Insertion Sort 
- Start from the second element (assume the first is already sorted). 
- Compare the current element with the previous elements one by one. 
- Shift each larger element backward to make space. 
- Insert the current element into its correct position in the sorted part. 
- Repeat until the entire array is sorted
- In-place
- Stable

### Quick Sort
- Pivot Selection
  - Choose a pivot element (p) from the array (typically first/last/random element)
- Partitioning
  - Rearrange elements so that
    - Left partition: All elements ≤ p
    - Right partition: All elements > p
- Recursion 
  - Recursively apply QuickSort to left and right partitions.
- Base Case 
  - Stop when subarrays have 0 or 1 element

### Randomized Quick Sort
- Pivot Selection: Randomly choose a pivot element
- Process:
  - Partition array into elements ≤ pivot and > pivot
  - Recursively sort both partitions
- Properties:
  - In-place
  - Unstable
  - Average case: O(n log n)

### Heap Sort
- Process:
  - Build a max-heap 
  - Repeatedly extract max element
- Properties:
  - In-place 
  - Unstable 
  - Always O(n log n)

### Tree Sort (BST Sort)
- Process:
  - Construct a Binary Search Tree (BST)
  - Perform in-order traversal
- Properties:
  - Not in-place
  - Unstable
  - Average case: O(n log n), Worst case: O(n²)

### Merge Sort
- Process:
  - Divide array into single elements 
  - Merge using two-pointer technique
- Properties
  - Not in-place
  - Stable
  - Always O(n log n)

### Shell Sort
- Process:
  - Define a gap sequence
  - Perform insertion sort within each gap
  - Reduce gap and repeat

- Properties:
  - In-place
  - Unstable
  - Complexity depends on gap sequence

### Counting Sort
- Process:
  - Create auxiliary array of size k
  - Count occurrences of each element
  - Reconstruct sorted array

- Properties:
  - Not in-place
  - Stable
  - O(n + k)

### Radix Sort
- Process:
  - Sort by least significant digit
  - Progress to more significant digits
  - Typically uses counting sort per digit

- Properties:
  - Not in-place
  - Stable
  - O(d(n + k))

### Bucket Sort
- Process:
  - Create n buckets
  - Distribute elements using floor(n*element)
  - Sort individual buckets
  - Concatenate results

- Properties:
  - Not in-place
  - Stable
  - Average case: O(n + k)

### 3-Way Merge Sort
- Process:
  - Divide array into three parts (a, b, c)
  - Sort a & b, then b & c
  - Finally sort a & b again

- Properties:
  - Not in-place
  - Stable
  - O(n log n)

--- 

## Select

---

## Graph

---

## Dynamic Programming

---

## Greedy Algorithms

---

## NP Theory

--- 

## Backtracking