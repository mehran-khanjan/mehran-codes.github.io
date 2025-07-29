# Introduction to Rust

---

## What is Rust?

Rust is a systems programming language created by Mozilla engineer Graydon Hoare 
in 2010. It emphasizes safety, performance, and concurrency, making it ideal for a 
wide range of applications.

Key Benefits of Rust:
1. Low-Level Control: Direct memory management with zero-cost abstractions, 
rivaling C and C++.
2. High-Level Productivity: Expressive syntax for building applications across 
operating systems.
3. Web Applications: Frameworks like Actix and Rocket enable robust web development.

Rust has three release channels:
- Stable: Production-ready, reliable version.
- Beta: Preview of the upcoming stable release, used for testing.
- Nightly: Built daily, includes experimental features but may be unstable.

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

Here’s a simple "Hello, World!" program in Rust:

```rust
fn main() {
    println!("Hello, world!");
}
```

**Explanation:**
- **main():** main function is the entry point function in a rust program
- **println!():** This is a macro. A macro that prints text to the console. 
Macros, denoted by !, are powerful metaprogramming tools that expand into code at 
compile time.

---

## Understanding Macros

Macros in Rust are defined using `macro_rules!` and allow code generation for 
repetitive tasks. Here’s an example of a simple macro:

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

Semicolons in Rust separate expressions and are required after most statements, 
except for the last expression in a block, which implicitly returns its value. 
For example:

```rust
fn main() {
    println!("Hello, world!"); // Semicolon required
}

fn sample() {
    println!("First line"); // Semicolon required
    println!("Last line")  // Semicolon optional
}
```

Omitting a semicolon on the last expression in a function allows it to return 
that value, a common Rust idiom.

---

## Automatic Code Formatting



Rust provides `rustfmt`, a tool for automatically formatting code to follow 
community style guidelines. Run it on your source file with:

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
- On Windows, a .pdb file containing debugging information.

To run the compiled program:

```bash
./file_name
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
