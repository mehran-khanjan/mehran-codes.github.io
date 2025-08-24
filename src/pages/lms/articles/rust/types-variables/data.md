# Data Types

---

## Defining Variables

- Variables: variables are defined using the `let` keyword. By default, variables are immutable, meaning their values cannot be changed once assigned. However, you can make a variable mutable by using the `mut` keyword. Variables can use **inferring**.

```rust
fn main() {
    let x = 5; // Immutable variable
    println!("The value of x is: {}", x);

    // Uncommenting the next line will cause a compilation error
    // x = 10; 

    let mut y = 10; // Mutable variable
    println!("The value of y is: {}", y);
    
    y = 15; // Changing the value of y
    println!("The new value of y is: {}", y);
}

```

- Constants: Constants in Rust are defined using the `const` keyword. Unlike variables, constants must have a type explicitly declared (constants can't use inferring) and are always immutable. Constants can be defined at any scope, including global scope, and they are evaluated at compile time. The name of a constant should write with capital letters.

```rust
const PI: f64 = 3.14159; // Constant definition

fn main() {
    println!("The value of PI is: {}", PI);
    
    // Uncommenting the next line will cause a compilation error
    // PI = 3.14; 
}
```

---

## Inferring Types

Rust can infer types for variables, which is good. If you specify a value when you declare the variable, Rust infer the type of the variable. But constants in Rust do not support type inference.

```rust
let a = -12345;
let b = 3.14;
let c = 'X';
```

---

## Mutable Variables

Variables are immutable by default. Use the mut qualifier to make a variable mutable:

```rust
let d = 0;
d = 1;
// Error!
println!("Number d is {}, d");

let mut e = 0;
e = 1;
println!("Number e is {}, e");
```

---

## Unused Variables

If you don't use a variable, prefix the name with _ to avoids a compiler warning:
```rust
let _f = 0;
```

---

## Casting a Value to a Different Type

You can cast a value to a different type, using as:

```rust
let g = 3.99;
let h = g as i32;
println!("h is {}", h); // h is 3
```

---

## Redeclaring a Variable

Rust lets you redeclare a variable in the current scope and they call it **shadowing**:

```rust
let num = "12345"; // num is a string here
let num = 12345; // now num is a number!
```

---

The table below provides a comprehensive overview of the fundamental data types in Rust. structs and enums empower developers to create custom data structures, enhancing code organization and readability.


| **Data Type**      | **Description**                                                                 |
|---------------------|---------------------------------------------------------------------------------|
| **Integer**         | Represents whole numbers. Can be signed (e.g., `i32`, `i64`) or unsigned (e.g., `u32`, `u64`). |
| **Floating Point**  | Represents numbers with decimal points. Includes `f32` (32-bit) and `f64` (64-bit). |
| **Boolean**         | Represents a value that can be either `true` or `false`.                       |
| **Character**       | Represents a single Unicode character, denoted with single quotes (e.g., `'a'`). |
| **String**          | A sequence of characters, represented as `String` (heap-allocated) or `&str` (string slice). |
| **Array**           | A fixed-size collection of elements of the same type (e.g., `[1, 2, 3]`).      |
| **Tuple**           | A fixed-size collection of elements of different types (e.g., `(1, "hello")`). |
| **Slice**           | A dynamically-sized view into a contiguous sequence of elements (e.g., `&[1, 2, 3]`). |
| **Struct**          | A custom data type that allows grouping related data together (e.g., `struct Point { x: i32, y: i32 }`). |
| **Enum**            | A type that can be one of several variants, useful for defining a type that can hold different data (e.g., `enum Direction { Up, Down, Left, Right }`). |
| **Function Pointer**| A type that represents a pointer to a function, allowing functions to be passed as arguments. |

---

## Integer Types

Rust has several signed integer types of known size:
- i8
- i16
- i32
- i64
- i128

Similarly, Rust has unsigned integer types of known size:
- u8
- u16
- u32
- u64
- u128

Rust has **platform-specific integer** types. These types are optimized for the natural **word size** of your platform, for maximum efficiency. On a 32bit system, `isize` is the same as `i32` and `usize` is the same as `u32`. On a `64bit` system, `isize` is the same as `i64` and `usize` is the same as `u64`:

- isize
- usize

```rust
fn main() {
    example_integers();
}

fn example_integers() {
    // Rust has signed integer types i8, i16, i32, i64, i128.
    let a1: i32 = -12345;
    let a2: i32 = 0xFFFF;
    let a3: i32 = 0o177;
    let a4: i32 = 0b1110;

    // Rust has unsigned integer types u8, u16, u32, u64, u128.
    let b: u32 = 12345;

    // Rust has architecture-specific integer types isize, usize.
    let c: isize = 24680;

    println!("\nNumbers are {} {} {} {} {} {}", a1, a2, a3, a4, b, c);
    println!(
        "Numbers in reverse order are {5} {4} {3} {2} {1} {0}",
        a1, a2, a3, a4, b, c
    );
    println!(
        "isize is {} bytes on my machine",
        std::mem::size_of::<isize>()
    );
}
```

---

## Hoisting in Rust

In Rust, you can call a function before its definition, as long as it is declared in the same scope. The Rust compiler reads the entire module, allowing it to recognize functions regardless of their order in the code. For example check the above.

---

## Floating-Point Types

Rust has two floating-point types. Use f64 generally, for maximum precision Only use £32 if you need to save space:
- f32
- f64

### Formatting Floating-Point Values

- You can specify the number of decimal places:

```rust
let fl: f32 = 1.23456;
println!("Float to 2dp {:.2}", fl);
```

- You can specify a field width:

```rust
println!("L-aligned {:<10.2}", fl);
println!("R-aligned {:>10.2}", fl);
```

- You can specify a fill character:

```rust
println!("L-aligned {:~<10.2}", fl);
println!("R-aligned {:~>10.2}", fl);
```

### Using Scientific Notation

- You can use scientific notation for float values:

```rust
let f3: f32 = -1.60217663e-16;
let f4: f64 = 2.99792458e8;
```

- You can display floats using scientific notation:

```rust
let f3: f32 = -1.60217663e-16;
println! ("\nElectron charge {:e}", f3);
```

- You can combine scientific format with decimal points:

```rust
let f3: f32 = -1.60217663e-16;
println! ("\nElectron charge {0:.4e}", f3);
```

```rust
fn main() {
    example_floats();
}

fn example_floats() {
    // Rust has single-precision and double-precision floats.
    let f1: f32 = 1.23456;
    let f2: f64 = 9.87654;

    println!("\nFloats are {} {}", f1, f2);
    println!("Floats to 2dp are {:.2} {:.2}", f1, f2);

    // You can use scientfic notation with floats.
    let f3: f32 = -1.60217663e-16;
    let f4: f64 = 2.99792458e8;

    println!("\nElectron charge {0}, {0:e}, {0:.4e}", f3);
    println!("Speed of light {0}, {0:e}, {0:.4e}", f4);
}
```

---

## Boolean Types

Rust has a boo1 type, which must be true or false:

```rust
let is_true: bool true;
let is_false: bool = false;
```

You can convert a boo1 value to 1 or 0:

```rust
let is_true_num: i32 = is_true as i32;
let is_false_num: i32 = is_false as i32;
```

You can combine Boolean values using these operators:
- `&&`: Logical AND
- `||`: Logical OR
- `!`: Logical NOT

```rust
    let is_true: bool = true;
    let is_false: bool = false;

    println!("\nIs true? {}, is false? {}", is_true, is_false);

    let res1: bool = is_true && is_false;
    let res2: bool = is_true || is_false;
    let res3: bool = !(is_true || is_false);
    println!("res1: {}, res2: {}, res3: {}", res1, res2, res3);
```

---

## Character Type

Rust has a char type, which supports Unicode characters
To represent a char value, use single quotes:

```rust
let sample_char: char = 'C';
let sample_emoji: char = '😀';
println!("First character {}, your fav emoji is {}", sample_char, sample_emoji);
```

---

## Questions

##### Q 1: Which types are used to define signed integers in Rust?

- A: u8, u16, u32, u64, u128
- B: i8, i16, i32, i64, i128
- C: f32, f64
- D: bool, char

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

Signed integers in Rust are defined using `i8`, `i16`, `i32`, `i64`, and `i128`.

</details>

---

Question 22

