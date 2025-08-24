# Introduction to Rust

---

## What is Rust?

Rust is a systems programming language created by **Mozilla** engineer **Graydon Hoare** 
in **2010**. It emphasizes safety, performance, and concurrency, making it ideal for a 
wide range of applications.

**Key Benefits of Rust:**
1. `Low-Level Control:` Direct memory management with zero-cost abstractions, 
rivaling C and C++.
2. `High-Level Productivity:` Expressive syntax for building applications across 
operating systems.
3. `Web Applications:` Frameworks like Actix and Rocket enable robust web development.

**Rust has three release channels:**
- `Stable:` Production-ready, reliable version.
- `Beta:` Preview of the upcoming stable release, used for testing.
- `Nightly:` Built daily, includes experimental features but may be unstable.

---

## Installing Rust with Rustup

Rustup is the official tool for installing and managing Rust. It allows seamless 
switching between stable, beta, and nightly compilers and keeps them updated.

**Installation Steps:**

- Windows Users:
  - visit this [link](https://www.rust-lang.org/tools/install) and
    download the executable installer.


- macOS/Linux Users:
  - Run the following command in your terminal:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

**Verify Installation:**

Check that the Rust compiler (`rustc`) and package manager (`cargo`) are installed:

```bash
rustc --version
cargo --version
```

---

## Writing Your First Rust Program

To start coding in Rust, you can use the Rust Playground, an online editor for 
testing code snippets. [Rust Play Ground](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024)

Here’s a simple **Hello World** program in Rust:

```rust
fn main() {
    println!("Hello, world!");
}
```

**Explanation:**
- `main():` `main` function is the entry point function in a rust program
- `println!():` This is a **macro**. A **macro** that prints text to the console. **Macros**, denoted by !, are powerful metaprogramming tools that expand into code at compile time.

---

## Understanding Macros

**Macros** in Rust are defined using `macro_rules!` and allow code generation for 
repetitive tasks. A macro is like a function. We can define the responsibility of the macro with a closure inside of it. Then we can call the macro to use it. Here’s an example of a simple macro:

```rust
macro_rules! sample_macro {
    () => {
        println!("Hello from the macro!");
    };
}
```

You can use this macro in a program like this:

```rust
macro_rules! sample_macro {
    () => {
        println!("Hello from the macro!");
    };
}

fn main() {
    sample_macro!();
}
```

This macro takes no arguments and expands to print "Hello from the macro!" 
when invoked.

---

## Semicolons in Rust

Semicolons in Rust separate expressions and are required after most statements, except for the last expression in a block, which implicitly returns its value. Omitting a semicolon on the last expression in a function allows it to return
that value, a common Rust idiom. For example:

```rust
fn main() {
    println!("Hello, world!");  // Semicolon required because of the marco
}

fn add(a: i32, b: i32) -> i32 {
    a + b                       // Semicolon is optional here
}
```

---

## Automatic Code Formatting

Rust provides `rustfmt`, a tool for automatically formatting code to follow community style guidelines. Run it on your source file with:

```bash
rustfmt file_name.rs
```

What `rustfmt` Does:
- Aligns curly braces according to Rust’s style conventions.
- Removes unnecessary whitespace.
- Replaces tabs with four spaces.

---

## Compiling and Running a Rust Program

To compile a Rust source file into an executable, use the Rust compiler:

```bash
rustc file_name.rs
```

What Compilation Produces:

- An executable file (e.g., file_name on Unix-like systems or file_name.exe on Windows).
- On Windows, a `.pdb` file containing debugging information.

To run the compiled program:

```bash
# on Unix-Like
./file_name

# on Windows
.\file_name.exe
```

---

## Naming Convention

Rust source files should follow snake_case (e.g., my_program.rs).

---

## Using Cargo: Rust’s Package Manager

Cargo is Rust’s build system and package manager, included with the standard 
installation. It simplifies project creation, dependency management, and building.

Create a new project:
```bash
cargo new project_name_for_sample
```

**Project Structure:**
- `.git`: Git repository for version control.
- `src/`: Directory containing source code (e.g., main.rs).
- `.gitignore`: Specifies files to ignore in version control.
- `Cargo.toml`: Configuration file for project metadata and dependencies.

---

## Understanding `Cargo.toml`

The `Cargo.toml` file defines your project’s metadata and dependencies. 
Here’s an example:
         
```toml
[package]
name = "hello_world_via_cargo"
version = "0.1.0"
edition = "2021"

[dependencies]
```

- `[package]`: Specifies project name, version, and Rust edition.
- `[dependencies]`: Lists external libraries (crates) your project uses.

---

## Building a Project with Cargo

Cargo supports two build modes:

- Debug Mode (default):
  - Fast compilation, includes debug information.
  - Output: `./target/debug/`
```bash
cargo build
```

- Release Mode:
  - Slower compilation, optimized for performance, no debug info.
  - Output: `./target/release/`
```bash
cargo build --release
```

---

## Running a Project with Cargo

To build and run your project in one step:

- **Debug Mode:**
```bash
cargo run
```

- **Release Mode:**
```bash
cargo run --release
```

---

## Checking 

If you just want a quick check to see if the code compiles correctly without any issues:

```bash
cargo check
```

---

## Comments

Rust supports three primary types of comments: 
- **Single-line Comments:** Single-line comments in Rust are initiated with `//`
- **Multi-line Comments:** Multi-line comments are enclosed between `/*` and `*/`
- **Documentation Comments:** It starts with `///` for documenting items like functions, structs, and modules. These comments can be processed by documentation tools to generate user-friendly documentation.

```rust
// Single-line Example:
let x = 5; // This variable holds the value 5


// Multi-line Example:
/*
  This is a multi-line comment.
  It can span multiple lines and is useful for longer explanations.
*/
let y = 10;


// Documentation Comments Example:
/// Adds two integers and returns the result.
///
/// # Examples
///
/// ```
/// let sum = add(5, 3);
/// assert_eq!(sum, 8);
/// ```
fn add(a: i32, b: i32) -> i32 {
    a + b
}

/// A struct representing a point in 2D space.
struct Point {
    x: f64, // The x-coordinate
    y: f64, // The y-coordinate
}
```

---

## Questions

##### Q 1: Who created Rust, in which year, and what types of applications is it primarily used for?

- A: Graydon Hoare | 2010 | systems and web applications
- B: Brendan Eich | 2008 | mobile apps
- C: Guido van Rossum | 2012 | data science applications
- D: Dennis Ritchie | 2005 | database systems

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

Rust was created by Graydon Hoare in 2010 at Mozilla. It is used for systems programming and web applications due to its safety and performance.

</details>

---

##### Q 2: Which tool is used to install Rust, and what is its primary function?

- A: `rustfmt`, formats Rust code
- B: `rustc`, compiles Rust code
- C: `rustup`, manages Rust versions and toolchains
- D: `cargo`, builds Rust projects

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

Rustup is the official tool for installing and managing Rust versions and toolchains, allowing seamless switching between stable, beta, and nightly releases.

</details>

---

##### Q 3: What are the three release channels of Rust?

- A: Alpha, Beta, Release
- B: Debug, Release, Production
- C: Stable, Testing, Experimental
- D: Stable, Beta, Nightly

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

Rust has three release channels: Stable (production-ready), Beta (upcoming stable preview), and Nightly (daily builds with experimental features).

</details>

---

##### Q 4: Which keyword is used to define a function in Rust?

- A: `func`
- B: `fn`
- C: `def`
- D: `function`

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

The `fn` keyword is used to define functions in Rust, as seen in the main function example.

</details>

---

##### Q 5: Which macro is used to print a string to the console in Rust, and what is its type?

- A: print!, function
- B: write!, method
- C: println!, macro
- D: log!, macro

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

The `println!` macro is used to print text to the console, and it is a macro, denoted by the `!` symbol.

</details>

---

##### Q 6: Which commands verify that Rust and Cargo are installed?

- A: rustc --version and cargo --version
- B: rustup --check and cargo --check
- C: rustc --install and cargo --install
- D: rustfmt --version and cargo --version

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

Running `rustc --version` and `cargo --version` confirms that the Rust compiler and Cargo are installed.

</details>

---

##### Q 7: What is the file extension for Rust source files, and what is the entry point function?

- A: .rust, start
- B: .rs, init
- C: .rs, main
- D: .rc, main

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

Rust source files use the `.rs` extension, and the `main` function is the entry point for Rust applications.

</details>

---

##### Q 8: What is the `println!` command classified as in Rust?

- A: Function
- B: Macro
- C: Method
- D: Keyword

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

`println!` is a macro in Rust, denoted by the `!` symbol, used for printing to the console.

</details>

---

##### Q 9: In Rust, a macro is most similar to which programming structure?

- A: Class
- B: Variable
- C: Loop
- D: Function

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

A macro in Rust is similar to a function, as it can take arguments and generate code, but it operates at compile time.

</details>

---

##### Q 10: How is a macro defined in Rust, and which macro definition correctly prints a value?

- A: Using `fn`, `fn print_val() { println!("Value"); }`
- B: Using `macro_rules!`, `macro_rules! print_val { () => { println!("Value"); }; }`
- C: Using `def`, `def print_val { println!("Value"); }`
- D: Using `macro`, `macro print_val() { println!("Value"); }`

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

Macros are defined using `macro_rules!`, and the example `macro_rules! print_val { () => { println!("Value"); }; }` correctly defines a macro that prints a value.

</details>

---

##### Q 11: How is a macro invoked in Rust?

- A: By calling it like a function with ()
- B: By prefixing it with @
- C: By importing it with use
- D: By using the macro name followed by !()

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

Macros in Rust are invoked using the macro name followed by `!()`, such as `sample_macro!()`.

</details>

---

##### Q 12: Which option correctly defines and uses a macro that prints a value in Rust?

- A: `macro_rules! my_macro { () => { println!("Hello"); }; }` and invoked as `my_macro!();`
- B: `fn my_macro() { println!("Hello"); }` and invoked as `my_macro();`
- C: `macro my_macro { println!("Hello"); }` and invoked as `my_macro;`
- D: `def my_macro { println!("Hello"); }` and invoked as `my_macro();`

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

A macro is defined with `macro_rules!` and invoked with `!()`, as shown in the correct option.

</details>

---

##### Q 13: Are semicolons mandatory in Rust?

- A: Yes, for all statements
- B: No, optional for the last expression in a block
- C: No, semicolons are never used
- D: Yes, only for function declarations

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

Semicolons are required for most statements in Rust, but they are optional for the last expression in a block, which implicitly returns its value.

</details>

---

##### Q 14: Which command formats a Rust source file according to community style guidelines?

- A: `cargo format`
- B: `rustc --format`
- C: `rustfmt file_name.rs`
- D: `cargo check --format`

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

The `rustfmt file_name.rs` command formats Rust code to follow community style guidelines.

</details>

---

##### Q 15: What is Cargo in the context of Rust?

- A: Rust’s compiler
- B: Rust’s package manager and build system
- C: Rust’s code formatter
- D: Rust’s version manager

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

Cargo is Rust’s package manager and build system, used for project creation, dependency management, and building.

</details>

---

##### Q 16: Which command creates a new Rust project using Cargo?

- A: `cargo init project_name`
- B: `cargo new project_name`
- C: `cargo create project_name`
- D: `cargo start project_name`

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

The `cargo new project_name` command creates a new Rust project with a standard structure.

</details>

---

##### Q 17: What is created when a new Rust project is made with Cargo?

- A: `src/` folder, `main.rs` with `main` function, `.git`, `Cargo.toml`
- B: `lib/` folder, `lib.rs` with `init` function, `.gitignore`, `Cargo.lock`
- C: `src/` folder, `start.rs` with `start` function, `.git`, `Cargo.toml`
- D: `code/` folder, `main.rs` with `main` function, `.gitignore`, `Cargo.toml`

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

Cargo creates a `src/` folder with `main.rs` containing the `main` function, a `.git` repository, `.gitignore`, and `Cargo.toml` outside the folder.

</details>

---

##### Q 18: What does the Cargo.toml file in a Rust project contain?

- A: Source code and comments
- B: Compiler settings and debug info
- C: Formatted code and macros
- D: Project metadata and dependencies

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

The `Cargo.toml` file contains project metadata (name, version, edition) and dependencies under `[package]` and `[dependencies]`.

</details>

---

##### Q 19: Which command builds a Rust project in debug mode using Cargo?

- A: `cargo build --release`
- B: `cargo run`
- C: `cargo build`
- D: `cargo check`

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

The `cargo build` command builds a Rust project in debug mode by default.

</details>

---

##### Q 20: Which command builds a Rust project in release (production) mode using Cargo?

- A: `cargo build`
- B: `cargo build --release`
- C: `cargo run`
- D: `cargo run --release`

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

The `cargo build --release` command builds a Rust project in release mode, optimized for performance.

</details>

---

##### Q 21: Which commands build and run a Rust project in debug and release modes using Cargo?

- A: Debug: `cargo build`, Release: `cargo build --release`
- B: Debug: `cargo check`, Release: `cargo check --release`
- C: Debug: `cargo start`, Release: `cargo start --release`
- D: Debug: `cargo run`, Release: `cargo run --release`

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

`cargo run` builds and runs in debug mode, while `cargo run --release` does so in release mode.

</details>

---

##### Q 22: Which Cargo command checks for compilation errors without building an executable?

- A: `cargo build`
- B: `cargo run`
- C: `cargo check`
- D: `cargo test`

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

The `cargo check` command verifies if the code compiles without generating an executable.

</details>
