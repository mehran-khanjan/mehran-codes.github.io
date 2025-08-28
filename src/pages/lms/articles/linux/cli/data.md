# Linux CLI

---

Generally, there are two user interfaces for managing Linux UI:

- GUI (Graphical User Interface): All the GUI tasks will convert to CLI commands.
- CLI (Command Line Interface):

---

## Shell

A **shell** is a type of command-line interface (CLI). **Shell** is essentially a text-based tool for communication
between the **user** and the operating system's **Kernel**. The path is: User => Shell => Kernel => Hardware.

**Types of Shells:**

- **Bourne shell (sh)**
- **Bourne-again shell (Bash)**: Rewrite and newer version of Bourne shell
- **C shell (csh or tcsh, the enhanced csh)**
- **Korn shell (ksh)**
- **Z shell (zsh)**
- **rbash**: The Restricted Shell

To check the current shell:

```bash
# Current using Shell
[username@hostname ~]$ echo $SHELL

# List all shells
[username@hostname ~]$ cat /etc/shells
```

---

## Linux Command-Line Structure

Each command in Linux has two parts:

- prompt
- command

**Prompt Structure**

The general command structure is:

`username@hostname current_directory shell_type`

**Example:**

- In Debian Family:
  `username@hostname:~$`
- In Red Hat Family:
  `[username@hostname ~]$`

**Explanation:**

- `$` indicates a regular user.
- `#` indicates the root user.
- The home directory is represented by `~`
- The hostname refers to the name assigned to a computer or device on a network (hostname = machine name)

**Command Structure**

We can complete the commands with tab. Linux commands structure:

`command [options/parameters] [arguments]`

**Example:**

If we want to use whole world, we need to use `--` and with one letter we use `-`:

```bash
# List all files with hidden files
[username@hostname ~]$ ls -a /home/username

# List all files with hidden files as a long list
[username@hostname ~]$ ls -l /home/username

# Same as -a but -a is shorter
[username@hostname ~]$ ls --all /home/username

[username@hostname ~]$ ls -la /home/username
```

---

### Types of Linux Commands

- **Built-in (Internal = Shell Built-in) Commands:**
    - These are part of the Shell and cannot be installed as separate packages.
    - They run at the time of boot by Linux.
    - Examples include **echo**, **pwd**, **cd**, etc.

- **External Commands:**
    - These are programs, tools, binary software, or various scripts.
    - They require separate processing by Linux to execute.
    - Examples include **ls**, **man**, etc.

To check the type of the command:

```bash
[username@hostname ~]$ type command-name
```

**List of all built-in commands**

| Command    | Description                                              |
|------------|----------------------------------------------------------|
| `alias`    | Create an alias for a command.                           |
| `bg`       | Place a job in the background.                           |
| `bind`     | Edit and display the command line editor's key bindings. |
| `break`    | Exit from a loop.                                        |
| `cd`       | Change the current directory.                            |
| `command`  | Run a command, ignoring shell functions.                 |
| `echo`     | Display a line of text.                                  |
| `enable`   | Enable or disable shell built-ins.                       |
| `eval`     | Execute arguments as a shell command.                    |
| `exec`     | Replace the shell with a command.                        |
| `exit`     | Exit the shell.                                          |
| `export`   | Set environment variables.                               |
| `fc`       | List or edit the command history.                        |
| `fg`       | Bring a job to the foreground.                           |
| `getopts`  | Parse command options.                                   |
| `hash`     | Remember the full path of commands.                      |
| `help`     | Display help for built-in commands.                      |
| `history`  | Show the command history.                                |
| `jobs`     | List active jobs.                                        |
| `kill`     | Terminate a process.                                     |
| `let`      | Evaluate arithmetic expressions.                         |
| `local`    | Create a variable that is local to a function.           |
| `logout`   | Exit a login shell.                                      |
| `mapfile`  | Read lines from standard input into an array variable.   |
| `popd`     | Remove directories from the directory stack.             |
| `pushd`    | Add directories to the directory stack.                  |
| `pwd`      | Print the current working directory.                     |
| `read`     | Read a line of input.                                    |
| `readonly` | Mark variables as read-only.                             |
| `return`   | Exit a function and return a value.                      |
| `set`      | Set shell options and positional parameters.             |
| `shift`    | Shift positional parameters.                             |
| `source`   | Execute commands from a file in the current shell.       |
| `test`     | Evaluate conditional expressions.                        |
| `times`    | Print the user and system times for processes.           |
| `trap`     | Execute a command when a signal is received.             |
| `type`     | Describe a command.                                      |
| `ulimit`   | Control the resources available to the shell.            |
| `umask`    | Set the file creation mask.                              |
| `unalias`  | Remove an alias.                                         |
| `unset`    | Remove variable or function names.                       |
| `wait`     | Wait for a process to complete.                          |

---

