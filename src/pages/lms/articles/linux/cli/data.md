# Linux CLI

---

Generally, there are two user interfaces for managing Linux UI:

- GUI (Graphical User Interface): All the GUI tasks will convert to CLI commands.
- CLI (Command Line Interface):

---

## Shell

A **shell** is a type of command-line interface (CLI). **Shell** is essentially a text-based tool for communication between the **user** and the operating system's **Kernel**. The path is: User => Shell => Kernel => Hardware.

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

- `$` indicates a regular user
- `#` indicates the root user
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

## Change Directory

Switching between different directories using the **cd** command:
```bash
[username@hostname ~]$ cd /home/username/Documents
```

Viewing the current directory using the **pwd** command:
```bash
[username@hostname ~]$ pwd
```

**Notes:**
- `.`  Represents the **Current Location**.
- `..` Represents the **Parent Location**.

**Examples:**

```bash
[username@hostname Documents]$ cd ..
[username@hostname ~]$ cd ./etc
[username@hostname ~]$ cd ../Downloads
[username@hostname ~]$ cd ../../..
## To switch between last two paths
[username@hostname ~]$ cd -
```

---

## Print a Desired Text

Printing custom text using the **echo** command. We can use " or ' or without any characters:

```bash
[username@hostname ~]$ echo "Lets start learning Linux"
```

You mush use a backslash before the following special characters if you don't use single or double quotes:
```bash
| & ; ( ) < > [ ] { } * ! ? ` ' " $ \ / #
```

**Example:**

```bash
[username@hostname ~]$ echo Hello\;Bye
[username@hostname ~]$ echo Foo\\Bar

# With ' or " you do not need a \
[username@hostname ~]$ echo "Hello;Bye"
[username@hostname ~]$ echo 'Foo\Bar'
```

---

## List Directory Contents

- Listing the contents of a directory using the **ls** command:

```bash
[username@hostname ~]$ ls
```

- Viewing the contents of a directory in a detailed list format with the **-l** option, if the text starts with `-` it is a file and if starts with `d` it is a directory. We can have the access, size and last modified time:

```bash
# Long-list
[user@host ~]$ ls -l

# All with hidden files
[user@host ~]$ ls -a

# Show inside a directory, d = directory
[user@host ~]$ ls -d

# With time
[user@host ~]$ ls -t

# With size and reverse
[user@host ~]$ ls -Sr

# Long-List + Reverse Time + Human-Readable
[user@host ~]$ ls -ltrh
```

---

## Switching between users

Viewing the name of the logged-in user using the **whoami** command:
```bash
[username@hostname ~]$ whoami
```

Viewing the list of all users currently logged into the system using the **w** command:
```bash
[username@hostname ~]$ w
```

**Explanation:**

For the **TTY** column, we can have two options:
- `tty:` In Linux, `tty` stands for `teletypewriter`. It refers to the terminal device that is used for input and output in a Linux system. The term originates from the early days of computing when physical teletype machines were used for communication with computers. In a normal Linux OS, we can have 1 to 6 TTY.

- `pts:` stands for `Pseudo-Terminal Session`. If we connect with SSH protocol (`ssh username@hostname`). To close the ssh terminal and close the pts and back to the tty, enter: `exit`

**To run something with the `root` access**

We have two options:

1. Switching the command line to another user using the `su` command. We can switch to the `root` user to do some actions:
```bash
[username@hostname ~]$ su - root
```

2. Using `sudo` (superuser do). We can use `sudo` if the user is a `suder` and can access to `sudo`.
```bash
# Change the hostname
[username@hostname ~]$ sudo hostname newhostname
```

**Note:**

In Ubuntu Desktop, the default `root` user has no password by default. We need to `sudo su - root` then `passwd` to set the password for the `root` user. After this password set, we can switch to `root` user with `su - root`

**Note:**

The `root` user can switch to any user without knowing the password. To reset the password for the user, with the root user: `passwd username`

---

## Globbing in Linux

Filtering files based on their names that have a specific pattern:
- *: Matches any character(s).
- ?: Matches exactly one character.
- []: A set of characters for matching but just take place of one character.
- {}: Specifies multiple different filenames in a pattern for matching.
- [A-Z]: Matches all uppercase letters within the defined range.
- [a-z]: Matches all lowercase letters within the defined range.
- [a-zA-Z0-9]: Matches all uppercase letters, lowercase letters, and all digits.

**Note:**
It is better to name files with the date to search better in the future like `file20250712`. To search and show all the files in the 07 month: `ls file202507*`

**Examples:**

```bash
# List all files in the current directory that start with "file" and end with ".conf"
[username@hostname ~]$ ls file*.conf 

# List all files that start with "file1" and end with "1", with any characters in between
[username@hostname ~]$ ls file1*1

# List all files that start with "file202007" followed by any characters
[username@hostname ~]$ ls file202007* 

# List all files that start with "file", have exactly one character in between, and end with "1"
[username@hostname ~]$ ls file?1

# List all files in the current directory that have a three-letter extension
[username@hostname ~]$ ls *.???

# List all files that start with "file2020070" followed by exactly one character
[username@hostname ~]$ ls file2020070?

# List all files that start with "file" followed by a single digit between 1 and 5
[username@hostname ~]$ ls file[1-5]

# List directories (and their details) that start with any letter from "c" to "h"
[username@hostname ~]$ ls -ld [c-h]*

# List files that start with "file" followed by either "1", "5", or "7"
[username@hostname ~]$ ls file[1,5,7]

# List files that start with "file" followed by either "1", "5", or "7" (no commas needed)
[username@hostname ~]$ ls file[157]

# List files that start with "file" but do not have "1", "5", or "7" as the next character
[username@hostname ~]$ ls file[!157]

# List all files in the current directory that have a ".txt" extension
[username@hostname ~]$ ls *.txt 

# List all files that start with any letter from "e" to "z"
[username@hostname ~]$ ls [e-z]* 

# List all files that do not start with any letter from "e" to "z"
[username@hostname ~]$ ls [!e-z]* 

# List all files that either start with "file" or have a name that starts with "log" and has a two-letter extension
[username@hostname ~]$ ls {file*,log.??}

# List files that start with "file_2020070" followed by either "1", "2", "3", "4", or "5"
[username@hostname ~]$ ls file_2020070[1,2,3,4,5]
```

---

## Variables in Linux

There are two kind of variables in Linux:
- Local Variables
- Environment Variables

**Local Variables**

We can define a variable in Linux and assign a value to it. To show the content of the variable, we can use `$var_name`. These variables store on the memory and will remove after reboot.

- To define a local variable:
```bash
[username@hostname ~]$ myname="Foo"
[username@hostname ~]$ let "myname=Foo"
[username@hostname ~]$ echo $myname
```

- To make the variable unchangable:
```bash
[username@hostname ~]$ set ${myname:=Bar}
```

- To make an environment variable:
```bash
[username@hostname ~]$ export $myname
```

**Note:**

Getting the value of a variable from user input using the `read` command:
```bash
# p is print
[username@hostname ~]$ read -p "Please enter your age: " myage
# n is the number of characters
[username@hostname ~]$ read -n 8 myname
# t is the timeout value for the user to enter the input
[username@hostname ~]$ read -t 60 myvar
```

**Environment Variables**

Environment variables in Linux are dynamic values that affect the behavior of processes and applications, providing configuration settings such as system paths, user preferences, and system-wide settings that can be accessed by programs and scripts. They don't remove after reboot.

- Define Environment Variables in Linux: With exporting a local variable
```bash
[username@hostname ~]$ export $myname
```

- Viewing the list of all environment variables in Linux using the `env` command:
```bash
[username@hostname ~]$ env
```

**Some important and useful environment variables:** 

- $HOSTNAME
- $USER
- $SHELL
- $PWD
- $HOME
- $LANG

**Examples:**
```bash
[username@hostname ~]$ echo "My hostname is $HOSTNAME"
[username@hostname ~]$ ls file_$HOSTNAME_202105*.log
```

---

### Creating Alias in Linux

Each alias is specific for each user.

To define an alias the syntax is:
```bash
[username@hostname ~]$ alias name="command"
```

Viewing the list of defined aliases and removing a previously defined alias:
```bash
[username@hostname ~]$ alias
[username@hostname ~]$ unalias list
[username@hostname ~]$ unalias yesterday
```

**Examples:**

```bash
[username@hostname ~]$ alias list="ls -la"
[username@hostname ~]$ alias yesterday="date -d yesterday"
```

**Adding Permanent Aliases**

- To define an alias permanently for a user, the corresponding alias must be added to the `.bashrc` file inside the `home` directory of each user. This `.bashrc` file is a hidden file. (rc = run command)

```bash
[username@hostname ~]$ vim ~/.bashrc
...
# User specific aliases and functions
alias yesterday="date -d yesterday"
alias list="ls -lrth"
...
```

- To add alias for all the users, we must use `bash.bashrc` file in `etc` directory. We put all the config files inside the `etc` directory:

```bash
[username@hostname ~]$ su - root
[username@hostname ~]$ vim /etc/bash.bashrc
```

---

## Manual Pages of Linux Commands

Viewing the usage guide of a command and its options with the `man` command. Go to the next page with `space` and back to the previous page with `b`. To search a word, enter `/search-keyword` and for iterating other found options use `n` key. To back to the previous found items, use `shift + n`. Exit with `q`.
```bash
[username@hostname ~]$ man date
```

`man` command has 9 sections. For example `passwd` is in section 1 (as a command) and 5 (as a config file). To get the `passwd` from section 5, we need to pass `-S`. To check all the sections use `man man`:

```bash
[username@hostname ~]$ man -S 5 passwd
# To check all the sections that passwd is involved
[username@hostname ~]$ man -a passwd
```

Finding the document file path of a man page with the `-w` option:
```bash
[username@hostname ~]$ man -w ls
```

Some of the commands don't have `man` description, we need to use `help` or `apropos` or `info` command:
```bash
# Using the help command only for built-in Linux commands
[username@hostname ~]$ help cd
[username@hostname ~]$ cd --help
[username@hostname ~]$ cd -h

# Using apropos as another method to get help
[username@hostname ~]$ apropos cd

# The last command for getting help is using info
[username@hostname ~]$ info cd
```

---

## Timestamps in Linux

**File timestamps:**
- `Atime (Access Time):` The last time the file was viewed by a command.
- `Mtime (Modified Time):` The last time the content of the file was changed.
- `Ctime (Change Time):` The last time the content of the file or its attributes (like chmod and permissions) were changed.

Viewing the timestamps of a directory/file with the `stat` command:
```bash
[username@hostname ~]$ stat /etc/hosts
```

Updating the all timestamps of a directory/file with the `touch` command:
```bash
[username@hostname ~]$ touch File1.txt
```

If the file name doesn't exist, `touch` command creates a new file:
```bash
[username@hostname ~]$ touch File_new.txt
```

**Useful options for the touch command:**

- `-a` : Change Access time only.
- `-d` : Change Access & Modification times.
- `-m` : Change Modification time only.
- `-t` : Change Access & Modification Times using a specified time.

Updating the `Atime` and `Mtime` of a file to a specified date. We can't change the `Ctime` and `birth` with `touch` command:
```bash
# The number is Unix timestamp
[username@hostname ~]$ touch -t 9812010510 File1.txt
```

---

## Date command

Displaying the current date:
```bash
[username@hostname ~]$ date
```

Displaying the date in the format DD-MM-YYYY:
```bash
[username@hostname ~]$ date +%Y%m%d
```

Changing the system date to 09:30 AM on February 8, 2015:
```bash
[username@hostname ~]$ date -s "8 Feb 2015 09:30"
```

Changing the system time to 18:10:
```bash
[username@hostname ~]$ date -s "18:10"
```

Displaying the UTC (Greenwich) time:
```bash
[username@hostname ~]$ date --utc
```

---

## Managing and creating a file/directory

**List of files/directories**

List files and directories with `ls`:

```bash
# Long-list
[user@host ~]$ ls -l

# All with hidden files
[user@host ~]$ ls -a

# Show inside a directory, d = directory
[user@host ~]$ ls -d

# With time
[user@host ~]$ ls -t

# With size and reverse
[user@host ~]$ ls -Sr

# Long-List + Reverse Time + Human-Readable
[user@host ~]$ ls -ltrh
```

View the list of files and directories as a tree:
```bash
[username@hostname ~]$ tree
```

**View Content of a file**

Viewing the content of text files with the `cat` command:
```bash
[username@hostname ~]$ cat file1.txt
```

Displaying line numbers at the beginning of each line of the requested text:
```bash
[username@hostname ~]$ cat -n file1.txt
```

**Create a new directory**

Creating three directories using `mkdir` (make directory):
```bash
[username@hostname ~]$ mkdir dir1 dir2 dir3
```

Creating nested directories with the `-p` option:
```bash
[username@hostname ~]$ mkdir -p dir1/dir2/dir3/dir4
```

Displaying a message/status report upon the creation of a directory with the `-v` option. The `v` is the first character of `verbose` that means making noise and being so noisy:

```bash
[username@hostname ~]$ mkdir -v dir1
```

To clear the command line:
`CTRL + L` or `clear` command

**Copy directories/files**

Copying directories/files with the `cp` command:
```bash
[username@hostname ~]$ cp File1 File2 File3 /tmp
[username@hostname ~]$ cp /etc/passwd .
```

- Copying a directory along with its contents using the `-r` option.
- The `-v` option for displaying a status report of the copy operation.
- The `-f` option for copying and overwriting a file without prompting.
```bash
[username@hostname ~]$ cp -r /etc ~/dir1
```

**Move directories/files**

Moving directories/files with the `mv` command. This command does not need `-r` option.
- The `-v` option for displaying a status report of the move operation.
- The `-f` option for moving and overwriting a file without prompting.
```bash
[username@hostname ~]$ mv /home/arash/File1.txt /tmp
[username@hostname ~]$ mv File1 File2 File3 ~/dir1
```

Renaming files/directories with the `mv` command:
```bash
[username@hostname ~]$ mv File1 New_File1
```

**Remove directories/files**

Deleting files using the `rm` command:
```bash
[username@hostname ~]$ rm File1.txt
```

Deleting directories using the `-r` option.
- The `-v` option for displaying a status report of the deletion.
- The `-f` option for deleting and overwriting a file without prompting.
```bash
[username@hostname ~]$ rm -r dir1
```

**Naming Rules of File & Directories:**

- The maximum number of characters in Linux is 255.
- Letters, numbers, periods, and underscores can be used in naming.
- File names are case-sensitive.
- File names within a directory must be unique and cannot be duplicated.
- To create a hidden file or directory, a `dot` is used at the beginning of its name.
- **File extensions can be specified with a dot, e.g., .conf, .log, or .txt. In Linux, files don't need any extension to run. The OS knows about the file, but we use the extensions for human readability.**
- It is better to avoid using the following characters in file names: 
```bash
# < > # @ & | space tab newline & } { $ ! ~ ) ( ] [ ? - ; * ' " \ /
```

---

## Questions

##### Q 1: What is a shell in Linux? What are its types?

- A: A network protocol | Types: TCP, UDP
- B: A file manager | Types: GUI, CLI  
- C: A programming language | Types: Python, Java  
- D: A command-line interface | Types: Bourne, Bash, C, Korn, Z, rbash

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

A

</details>

---

##### Q 2: How many parts does each Linux command have?

- A: 1
- B: 2
- C: 3
- D: 4

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

A

</details>

---

##### Q 3: What is the structure of a prompt?

- A: username@hostname:~$  
- B: command options arguments  
- C: command | options | arguments  
- D: username | hostname | directory | shell type

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

A

</details>

---

##### Q 4: What do the symbols `$`, `#`, and `~` represent?

- A: User types  
- B: Regular user, root user, home directory  
- C: Commands  
- D: File types

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

A

</details>

---

##### Q 5: What is the structure of a command?

- A: command | input | output
- B: command | user | time  
- C: command | type | output  
- D: command | options | arguments

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

A

</details>

---

##### Q 6: When do you use `-` and when do you use `--` in commands?

A) `-` for users, `--` for groups
B) `-` for files, `--` for directories  
C) `-` for commands, `--` for arguments  
D) `-` for short options, `--` for long options

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

A

</details>

---

##### Q 7: What are the types of Linux commands?

- A: System and User
- B: Built-in and User  
- C: Internal and External
- D: Temporary and Permanent

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

A

</details>

---

##### Q 8: Which command checks the type of a command?

- A: check
- B: type   
- C: command  
- D: verify

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

A

</details>

---

##### Q 9: What command is used to change directories?

- A: cd  
- B: mv  
- C: ls  
- D: pwd

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

A

</details>

---

##### Q 10: Which command retrieves the current directory?

- A: ls  
- B: pwd  
- C: cd  
- D: echo

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

A

</details>

---

##### Q 11: What do `.` and `..` represent?

- A: Files and Directories
- B: Current and Parent directories
- C: Hidden and Visible  
- D: Executable and Non-executable

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

A

</details>

---

##### Q 12: How do you switch between the last two directories using cd?

A) `cd ..`  
B) `cd -`  
C) `cd ~`  
D) `cd /`

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

A

</details>

---

##### Q 13: Which command displays text on the terminal? How do you define it?

- A: display | display "text"
- B: print | print "text"  
- C: echo | echo "text"
- D: show | show "text"

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

A

</details>

---

##### Q 14: In which characters should you use a backslash? When do you not need it?

- A: Only in variables - never
- B: All characters - never  
- C: Only in commands - always  
- D: Special characters - when not using quotes

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

A

</details>

---

##### Q 15: Which command lists directories and files?

- A: ls  
- B: dir  
- C: list  
- D: show

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

A

</details>

---

##### Q 16: Which command retrieves the current user?

- A: me
- B: user  
- C: current  
- D: whoami

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

A

</details>

---

##### Q 17: Which command lists all users?

- A: users  
- B: who  
- C: w  
- D: list

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

A

</details>

---

##### Q 18: What are the types of TTY columns?

- A: internal and external
- B: user and admin  
- C: tty and pts
- D: system and user

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

A

</details>

---

##### Q 19: What is TTY?

- A: Terminal type  
- B: User type  
- C: File type  
- D: Command type

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

A

</details>

---

##### Q 20: What is PTS?

- A: Process Terminal Session
- B: Physical Terminal Session  
- C: Pseudo-Terminal Session
- D: Primary Terminal Session

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

A

</details>

---

##### Q 21: How many methods are there to execute a command with root access?

- A: 1
- B: 2
- C: 3
- D: 4

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

A

</details>

---

##### Q 22: To which users can the root user switch?

- A: Only guest users
- B: Only admin users  
- C: Only system users  
- D: Any user

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

A

</details>

---

##### Q 23: What are the four main characters for finding files with the ls command?

- A: `?, &, #, {}`
- B: `#, @, &, {}`
- C: `*, ^, ), {}`
- D: `*, ?, [], {}`

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

A

</details>

---

##### Q 24: What command would you use to list all configuration files that start with "file" and end with ".conf"?

- A: ls *.txt  
- B: ls file*.conf  
- C: ls file[1-5]  
- D: ls file?1

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

A

</details>

---

##### Q 25: Which command will list all files that start with "file1" and end with "1"?

- A: ls file[!157]
- B: ls file202007*  
- C: ls *.???  
- D: ls file1*1

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

A

</details>

---

##### Q 26: What command should you use to find all files that start with "file202007"?

A) ls *.txt     
B) ls file[1-5]  
C) ls file202007*
D) ls [e-z]*

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

A

</details>

---

##### Q 27: Which command will list files that start with "file", have exactly one character in between, and end with "1"?

- A: ls *.???
- B: ls file[1,5,7]  
- C: ls file[!157]  
- D: ls file?1

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

A

</details>

---

##### Q 28: What command would you use to list all files with a three-letter extension?

- A: ls *.???  
- B: ls file202007*  
- C: ls file[1-5]  
- D: ls [c-h]*

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

A

</details>

---

##### Q 29: Which command will list files that start with "file2020070" followed by exactly one character?

- A: ls file[1,5,7]
- B: ls file2020070?
- C: ls file[!157]  
- D: ls *.txt

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

A

</details>

---

##### Q 30: What command will list files that start with "file" followed by a digit between 1 and 5?

- A: ls *.???
- B: ls file202007*  
- C: ls [e-z]*  
- D: ls file[1-5]

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

A

</details>

---

##### Q 31: Which command will list directories that start with any letter from "c" to "h"?

- A: ls *.txt  
- B: ls file[1,5,7]  
- C: ls file?1  
- D: ls -ld [c-h]*

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

A

</details>

---

##### Q 32: What command will list files that start with "file" followed by either "1", "5", or "7"?

- A: ls file[!157]
- B: ls file[157]  
- C: ls file[1,5,7]  
- D: ls *.???

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

A

</details>

---

##### Q 33: Which command will list files that start with "file" followed by either "1", "5", or "7" (without commas)?

- A: ls file[157]  
- B: ls file[1,5,7]  
- C: ls file[!157]  
- D: ls *.txt

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

A

</details>

---

##### Q 34: What command will list files that start with "file" but do not have "1", "5", or "7" as the next character?

- A) ls file[157]    
- B) ls file[1-5]  
- C) ls file[!157] 
- D) ls *.???

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

A

</details>

---

##### Q 35: Which command will list all files with a ".txt" extension?

- A: ls [e-z]*    
- B: ls *.txt
- C: ls file[1-5]  
- D: ls file202007*

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

A

</details>

---

##### Q 36: What command will list all files that start with any letter from "e" to "z"?

- A: ls *.???
- B: ls file[1-5]  
- C: ls [e-z]*  
- D: ls file202007*

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

A

</details>

---

##### Q 37: Which command will list all files that do not start with any letter from "e" to "z"?

- A: ls file[1-5]
- B: ls [e-z]*  
- C: ls *.txt  
- D: ls [!e-z]*

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

A

</details>

---

##### Q 38: What command will list all files that either start with "file" or have a name that starts with "log" and has a two-letter extension?

- A: `ls [!e-z]*`
- B: `ls file[1-5]`
- C: `ls *.txt`
- D: `ls {file*,log.??}`

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

A

</details>

---

##### Q 39: What are the types of variables in Linux?

- A: Local and Global  
- B: Local and Environment  
- C: Temporary and Permanent  
- D: User and System

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

A

</details>

---

##### Q 40: How do you define a local variable in Linux? How do you use it? How do you make it unchangeable? How do you convert it to an environment variable?

- A: `define myvar="value"` | `display myvar` | `protect myvar` | `set myvar`
- B: `var myvar="value"` | `usemyvar` | `const myvar` | `env myvar`  
- C: `local myvar="value"` | `print myvar` | `lock myvar` | `export myvar`
- D: `myvar="value"` | `echo $myvar` | `set ${myvar:=newvalue}` | `export $myvar`

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

A

</details>

---

##### Q 41: How do you get user input through the terminal?

- A: input  
- B: read  
- C: get  
- D: ask

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

A

</details>

---

##### Q 42: How do you create an environment variable? How do you view them? Give examples.

- A) create var | view | var="value"
- B) set var | show | var="value"  
- C) define var | list | var="value"  
- D) export var | env | var="value"

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

A

</details>

---

##### Q 43: How do you create an alias? How do you remove it? How do you use it? How do you list it?

- A: define alias | remove alias | call alias | show alias
- B: create alias | delete alias | use alias | list alias  
- C: alias name="command" | unalias name | name | alias  
- D: set alias | drop alias | execute alias | display alias

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

A

</details>

---

##### Q 44: How do you create permanent aliases for a user and for all users?

- A: Use alias command
- B: Add to `.bashrc` for user - `/etc/bash.bashrc` for all 
- C: Set in terminal  
- D: Define in config

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

A

</details>

---

##### Q 45: What command provides help for other commands?

- A: help  
- B: man  
- C: info  
- D: apropos

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

A

</details>

---

##### Q 46: How many sections does the man command have? How can you access them?

- A: 5 | man
- B: 9 | man -S 
- C: 3 | man -a  
- D: 7 | man -w

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

A

</details>

---

##### Q 47: What are three other commands for help?

- A: type, alias, export  
- B: man, ls, cd  
- C: echo, pwd, date  
- D: help, info, apropos

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

A

</details>

---

##### Q 48: What are the types of timestamps in Linux?

- A: Atime, Mtime, Ctime  
- B: Access, Modify, Change  
- C: Create, Update, Delete  
- D: All of the above

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

A

</details>

---

##### Q 49: Which command checks timestamps?

- A: touch
- B: ls  
- C: stat
- D: date

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

A

</details>

---

##### Q 50: What command updates timestamps and what are its options?

- A: update | -u, -m, -d
- B: touch | -a, -m, -d, -t
- C: change | -c, -m, -a  
- D: set | -s, -m, -a

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

A

</details>

---

##### Q 51: What command displays the current date?

- A: now  
- B: time  
- C: date  
- D: current

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

A

</details>

---

##### Q 52: How do you change the system date?

- A: date -s "new date"  
- B: set date "new date"  
- C: change date "new date"  
- D: update date "new date"

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

A

</details>

---

##### Q 53: Which command is used to view the content of a file in the console?

- A: view  
- B: show  
- C: cat  
- D: display

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

A

</details>

---

##### Q 54: What command is used to create a new directory?

- A: newdir  
- B: createdir
- C: mkdir
- D: make dir

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

A

</details>

---

##### Q 55: What command is used to copy files?

- A: copy  
- B: cp  
- C: duplicate  
- D: clone

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

A

</details>

---

##### Q 56: What command is used to move files?

- A: move  
- B: shift  
- C: transfer  
- D: mv

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

A

</details>

---

##### Q 57: What command is used to rename files?

- A: rename  
- B: mv  
- C: change  
- D: edit

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

A

</details>

---

##### Q 58: What command is used to delete files?

- A: remove  
- B: del  
- C: rm  
- D: erase

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

A

</details>

---

##### Q 59: How does Linux use file extensions? Who are they important for?

- A: Extensions are mandatory - important for users  
- B: Extensions are optional - important for the OS  
- C: Extensions are ignored - important for users  
- D: Extensions are only for readability - important for users and developers

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

A

</details>

