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

##### Q 2: How many signed integer types are available in Rust, including platform-specific ones?

- A: 3
- B: 4
- C: 5
- D: 6

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

Rust has six signed integer types: `i8`, `i16`, `i32`, `i64`, `i128`, and `isize`.

</details>

---

##### Q 3: Which types are used to define unsigned integers in Rust?

- A: i8, i16, i32, i64, i128
- B: u8, u16, u32, u64, u128
- C: f32, f64
- D: bool, char

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

Unsigned integers in Rust are defined using `u8`, `u16`, `u32`, `u64`, and `u128`.

</details>

---

##### Q 4: How many unsigned integer types are available in Rust, including platform-specific ones?

- A: 3
- B: 4
- C: 5
- D: 6

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

Unsigned integers in Rust are defined using `u8`, `u16`, `u32`, `u64`, `u128`, and `usize`.

</details>

---

##### Q 5: What does "word size" refer to in Rust?

- A: The size of a string in memory
- B: The natural integer size for a platform (32-bit or 64-bit)
- C: The size of a floating-point number
- D: The number of bytes in a character

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

Word size refers to the natural integer size of a platform, which is 32-bit or 64-bit, affecting `isize` and `usize`.

</details>

---

##### Q 6: Which types are used to define signed and unsigned integers based on platform word size?

- A: `i32`, `u32`
- B: `i64`, `u64`
- C: `isize`, `usize`
- D: `int`, `uint`

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

`isize` and `usize` are platform-specific integer types that match the word size (32-bit or 64-bit).

</details>

---

##### Q 7: Does a function need to be defined before it is called in Rust?

- A: Yes, always
- B: No, as long as it’s in the same scope
- C: Yes, only in modules
- D: No, but it must be imported

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

Rust allows functions to be called before their definition within the same scope due to hoisting.

</details>

---

##### Q 8: Does a macro need to be defined before it is used in Rust?

- A: Yes, always
- B: Yes, only in modules
- C: No, but it must be imported
- D: No, as long as it’s in the same scope

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

Like functions, macros can be used before their definition within the same scope in Rust.

</details>

---

##### Q 9: Which option correctly defines a signed integer, an unsigned integer, and a word-size integer in Rust?

- A: `let a: i32 = -10; let b: bool = true; let c: isize = 20;`
- B: `let a: f32 = -10.0; let b: u32 = 10; let c: usize = 20;`
- C: `let a: u32 = -10; let b: i32 = 10; let c: isize = 20;`
- D: `let a: i32 = -10; let b: u32 = 10; let c: usize = 20;`

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

The correct definitions are `i32` for signed, `u32` for unsigned, and `usize` for word-size integers.

</details>

---

##### Q 10: How many comment types are in Rust, and how are they defined?

- A: 2: `//` for single-line, `/* */` for multi-line
- B: 3: `//` for single-line, `/* */` for multi-line, `///` for documentation
- C: 3: `#` for single-line, `/* */` for multi-line, `//` for documentation
- D: 4: `//`, `/* */`, `///`, `/** */` for documentation

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

Rust has three comment types: `//` for single-line, `/* */` for multi-line, and `///` for documentation comments.

</details>

---

##### Q 11: What character is used for placeholders in Rust’s `println!`, and can their order be changed?

- A: `%`, No
- B: `$`, Yes
- C: `{}`, Yes
- D: `#`, No

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

The `{}` character is used for placeholders in `println!`, and their order can be changed using indices like `{0}`.

</details>

---

##### Q 12: Which function gets the size of `isize` or `usize`, and what unit does it return?

- A: `std::mem::size_of()`, bytes
- B: `std::mem::size()`, bits
- C: `std::size::of()`, bytes
- D: `std::mem::length()`, bits

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

The `std::mem::size_of::<T>()` function returns the size in bytes for types like `isize` and `usize`.

</details>

---

##### Q 13: Which types are used to define floating-point numbers in Rust?

- A: i32, i64
- B: f32, f64
- C: u32, u64
- D: bool, char

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

Floating-point numbers in Rust are defined using `f32` and `f64`.

</details>

---

##### Q 14: Which floating-point type is recommended for general use in Rust?

- A: f32
- B: u32
- C: i32
- D: f64

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

`f64` is recommended for general use due to its higher precision compared to `f32`.

</details>

---

##### Q 15: How do you specify the number of decimal places when printing a float in Rust?

- A: `{:.2}`, e.g., `println!("{:.2}", 1.23456);`
- B: `{%2}`, e.g., `println!("{%2}", 1.23456);`
- C: `{:2}`, e.g., `println!("{:2}", 1.23456);`
- D: `{.2}`, e.g., `println!("{.2}", 1.23456);`

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

The `{:.2}` format specifier in `println!` sets the number of decimal places to 2.

</details>

---

##### Q 16: How do you specify the field width when printing a float in Rust?

- A: `{@10}`, e.g., `println!("{@10}", 1.23456);`
- B: `{:10}`, e.g., `println!("{:10}", 1.23456);`
- C: `{:>10}`, e.g., `println!("{:>10}", 1.23456);`
- D: `{%10}`, e.g., `println!("{%10}", 1.23456);`

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

The `{:>10}` or `{:<10}` format specifier sets the field width, with > for right-alignment and < for left-alignment.

</details>

---

##### Q 17: How do you specify a fill character when printing a float in Rust?

- A: `{:~>10}`, e.g., `println!("{:~>10}", 1.23456);`
- B: `{:#10}`, e.g., `println!("{:#10}", 1.23456);`
- C: `{:@10}`, e.g., `println!("{:@10}", 1.23456);`
- D: `{%>10}`, e.g., `println!("{%>10}", 1.23456);`

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

The `{:~>10}` format specifier uses ~ as the fill character for a field width of 10.

</details>

---

##### Q 18: How do you define a floating-point number in scientific notation in Rust?

- A: let x: f32 = 1.23E4;
- B: let x: f32 = 1.23^4;
- C: let x: f32 = 1.23*10^4;
- D: let x: f32 = 1.23e4;

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

Scientific notation in Rust uses e or E, e.g., 1.23e4 for 1.23 × 10⁴.

</details>

---

##### Q 19: How do you print a floating-point number in scientific notation in Rust?

- A: `{:e}`, e.g., `println!("{:e}", 1.23456);`
- B: `{:s}`, e.g., `println!("{:s}", 1.23456);`
- C: `{:n}`, e.g., `println!("{:n}", 1.23456);`
- D: `{:#}`, e.g., `println!("{:#}", 1.23456);`

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

The `{:e}` format specifier prints a number in scientific notation, e.g., 1.23456e0.

</details>

---

##### Q 20: How do you print a number in scientific notation with a specific number of decimal places in Rust?

- A: `{:2e}`, e.g., `println!("{:2e}", 1.23456);`
- B: `{:.2e}`, e.g., `println!("{:.2e}", 1.23456);`
- C: `{:.2s}`, e.g., `println!("{:.2s}", 1.23456);`
- D: `{%2e}`, e.g., `println!("{%2e}", 1.23456);`

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

The `{:.2e}` format specifier combines scientific notation with 2 decimal places.

</details>

---

##### Q 21: Which type is used to define a boolean value in Rust?

- A: i32
- B: boolean
- C: bool
- D: char

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

The bool type is used for boolean values (`true` or `false`) in Rust.

</details>

---

##### Q 22: Which code correctly converts a boolean to 0 or 1 in Rust?

- A: `let is_true: bool = true; let num: i32 = is_true.cast(i32);`
- B: `let is_true: bool = true; let num: i32 = is_true.to_int();`
- C: `let is_true: bool = true; let num: i32 = bool::to_i32(is_true);`
- D: `let is_true: bool = true; let num: i32 = is_true as i32;`

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

The as operator converts a bool to `i32`, where true becomes 1 and false becomes 0.

</details>

---

##### Q 23: Which three operators are used for logical operations in Rust?

- A) &&, ||, !
- B) &, |, ^
- C) ==, !=, >=
- D) +, -, *

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

The logical operators in Rust are && (AND), || (OR), and ! (NOT).

</details>

---

##### Q 24: Which type is used to store a single character in Rust?

- A: &str
- B: string
- C: char
- D: byte

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

The `char` type is used to store a single Unicode character in Rust.

</details>

---

##### Q 25: How is a `char` value represented in Rust?

- A: In single quotes, e.g., `'a'`
- B: In double quotes, e.g., `"a"`
- C: Without quotes, e.g., `a`
- D: In backticks, e.g., `a`

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

A char in Rust is represented using single quotes, e.g., `'a'`.

</details>

---

##### Q 26: Does Rust support type inference, and what does it mean?

- A: Yes, it converts types automatically at runtime
- B: No, all types must be explicitly declared
- C: Yes, the compiler deduces the type based on the value
- D: No, it requires type annotations for constants only

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

Rust supports type inference, meaning the compiler can deduce a variable’s type from its value, except for constants.

</details>

---

##### Q 27: Which keyword allows a variable’s value to be changed later in a Rust program?

- A: let
- B: mut
- C: const
- D: var

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

The `mut` keyword makes a variable mutable, allowing its value to be changed.

</details>

---
##### Q 28: Which character prefix prevents compiler warnings for unused variables in Rust?

- A: @
- B: _
- C: #
- D: $

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

Prefixing a variable name with _ (e.g., _f) suppresses unused variable warnings.

</details>

---

##### Q 29: Which operator is used for type casting in Rust?

- A: convert
- B: cast
- C: to
- D: as

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

The `as` operator is used for type casting in Rust, e.g., let h = g as i32.

</details>

---

##### Q 30: Can a variable be redefined with a new type in Rust, and what is this called?

- A: Yes, called shadowing
- B: No, types are fixed
- C: Yes, called casting
- D: No, only constants can be redefined

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

Rust allows redefining a variable with a new type in the same scope, a process called shadowing.

</details>

---

##### Q 31: How are constants defined in Rust, how are they named, and do they support type inference?

- A: Using `const`, snake_case, yes
- B: Using `let`, UPPER_CASE, no
- C: Using `const`, UPPER_CASE, no
- D: Using `static`, snake_case, yes

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

Constants are defined with `const`, named in `UPPER_CASE`, and do not support type inference; types must be explicitly declared.

</details>
