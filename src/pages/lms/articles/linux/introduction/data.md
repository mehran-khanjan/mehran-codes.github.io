# Linux Introduction 

---

## Unix

**Unix** is a powerful, **multiuser**, **multitasking** operating system originally developed in the 1960s and 1970s at **Bell Labs**, a research and development subsidiary of **AT&T** (The first version of was created in 1969, and it was officially released in 1971). It was created by **Ken Thompson**, **Dennis Ritchie** (created C programming language), and others, and has since become a foundational technology for many modern operating systems.

**Unix** was a very lightweight, fast operating system, but at that time, it was **expensive** ($20,000) and **not accessible to everyone**. Various operating systems were developed based on **Unix**, such as **Linux** and **FreeBSD**.

---

## FreeBSD

**FreeBSD** is a free and open-source Unix-like operating system derived from the **Berkeley Software Distribution (BSD)**, which was originally developed at the University of California, Berkeley. It is known for its performance, advanced networking features, security, and reliability. This FreeBSD was later used by **macOS**, **iOS**, **PlayStation**, **McAfee**, and **Netflix**.

---

## Linux

**Linux** is a free, open-source, and Unix-like **operating system kernel** that serves as the foundation for a wide variety of operating systems, collectively known as **Linux distributions** (distros). It was created by **Linus Torvalds** in 1991 and has since grown into one of the most widely used operating systems in the world. The name of Linux comes from Linus + Unix = Linux. Linux was later used by **Red Hat**, **Ubuntu**, **Debian**, **Android**, **CentOS**, **SUSE**, and **Fedora**.

**Features:**
- Unlike other operating systems, Linux is completely free and open-source.
- It has the capability to support various hardware.
- It is lightweight and suitable for servers.

---

## Linux Kernel

- The core of all operating systems based on **Unix** is the **Kernel**.
- The kernel essentially serves as the communication layer between the operating system (packages) and the hardware.
- Communication with hardware drivers occurs through the kernel.
- As of 2020, there are over 26 million lines of code in the Linux kernel.

**Kernel's relations with other parts:**

- **Hardware:** This is the physical layer, including the CPU, memory, and devices.
- **Kernel:** The kernel acts as the core component that manages communication between
  the hardware and software applications. (Kernel is a part of the OS)
- **Applications (packages):** These are the software programs that users interact with, which rely on the kernel to access hardware resources.
- **User Interfaces:** This includes both Command-Line Interface (CLI) and Graphical
  User Interface (GUI), allowing users to interact with applications and the system.

**Kernel Features:**

- Process Management
- Memory Management
- Device Drivers
- System Calls (Services Calls)

---

## Free vs Open-Source

**Free Software**

The GNU project, under the **Free Software Foundation (FSF)** founded by **Richard Stallman**, has introduced four principles for software to be considered free. The term "free" here does not mean free of charge!:

"Free" means:

- The freedom to run the program as you wish, for any purpose.
- The freedom to study how the program works, and change it as you wish.
- The freedom to redistribute copies, so you can help your neighbor.
- The freedom to distribute copies of your modified versions to others.

In contrast to free software, there is **proprietary** software.

**Open Source Software**

**Open Source Initiative (OSI)** software means that the source code is made publicly
available, but it must also meet certain **distribution conditions**:

- The provided code must be exactly equivalent to the compiled code.
- The license must allow modifications and derivations of the program's code.
- The license should not discriminate against any group or individual.
- It must not restrict the use of the software in various fields.
- The license should not be exclusive to a particular product.

**Free and Open Source Software Together**

- **Free** Software provides **freedom in the software code**, while **Open Source** provides **freedom in software distribution**.
- Software that is both Open and Free is referred to as **Free and Open Source Software (FOSS)**.
- The most famous software in the FOSS family is the **Linux operating system**.
- Other examples include the **FreeBSD** operating system and software like **Gnome**, **GIMP**, **LibreOffice**, etc.

---

## Linux Distribution

All Linux distributions include the Kernel of the Linux operating system. Different distributions vary in the **types of software (Packages)**, **their installation methods**, and **the features of that distribution** from the Linux operating system. To check different distributions of Linux, use this [website](https://distrowatch.com)

**Note:** 

If you were a Windows user before, it's important to understand that in Linux, we refer to **directories** instead of **folders**, and we use the term **packages** instead of **software**.

**Categories of Linux Distributions:**

- **Debian Family:** Installer package extension is **.deb**. It is most suitable for regular users. The package managers are **apt**, **dpkg**.
  - Debian
  - Ubuntu
  - Linux Mint
  - Zorin

- **Red Hat Family:** Installer package extension is **.rpm**.  It is most suitable for advanced users. The package managers are **YUM**, **DNF**, **RPM**.
  - Red Hat
  - Fedora
  - CentOS
  - SuSE
  - Rocky Linux
  - AlmaLinux

- **Arch Linux Family:** Installer package extension is **.arch**. The package manager is **pacman.**
  - Arch Linux
  - Manjaro
  - EndeavourOS

```bash
# Linux Standard Base (LSB): It is a standardization effort by the Linux 
# Foundation aimed at increasing compatibility among different Linux distributions
[username@hostname ~]$ lsb_release -a
```

---

## UI in Linux

**GUI (Graphical User Interface)**

In Linux, you can install different **desktops**. Some of the most popular Linux desktops include **Gnome**, **KDE**, **XFCE**, and more. **Gnome** offers a more user-friendly environment with the slogan **Stupid Simple It Keeps**. **KDE** provides a more professional, complex environment with a wider range of software. Ubuntu and CentOS come with Gnome by default. **Kubuntu** is essentially Ubuntu with the KDE desktop. SUSE and many other distributions use KDE.

**Command Line Interface (CLI)**

The tasks on GUI will convert to CLI commands and pass to the kernel. In the world of Linux, one of the most powerful tools available is the command line. You can also directly enter the CLI environment by pressing `[F1-F6] + Alt + Ctrl`, where you will not see any graphical parameters. To return to the graphical environment, simply press the same keys again.

```bash
# Current using Shell
[username@hostname ~]$ echo $SHELL
# List all shells
[username@hostname ~]$ cat /etc/shells

# Info about desktop environment
[username@hostname ~]$ echo $XDG_CURRENT_DESKTOP
```

---

## Linux Applications

- **Office Applications:** Apache OpenOffice, LibreOffice, etc. WPS Office like Microsoft Office, but it is Open source.
- **Web Browsers:** Mozilla Firefox, Google Chrome, etc.
- **Multimedia:** GIMP, Blender, Inkscape, Audacity, VLC, etc.
- **Server Programs:**
  - **HTTP Server:** Apache, Nginx, lighttpd, etc.
  - **Databases:** MariaDB, MySQLite, PostgreSQL, etc.
  - **Data Sharing:** Samba Server, NFS, etc.
- **Programming Languages:** C, Java, Perl, Shell, Python, PHP, etc. support by default in Linux.

```bash
# Debian: get installed packages
[username@hostname ~]$ apt list --installed
[username@hostname ~]$ dpkg --get-selections

# Red Hat: get installed packages
[username@hostname ~]$ rpm -qa
[username@hostname ~]$ dnf list installed

# Arch: get installed packages
[username@hostname ~]$ pacman -Q
```

---

## Ubuntu Linux OS

- After Windows, it is the second most popular operating system as a desktop in the world.
- It is based on the **Debian** Linux distribution and is available for free.
- As a server, it is one of the powerful versions based on the **Debian Management Package**.
- According to statistics, **20%** of the web servers in the world use **Ubuntu**.
- A new version of **Ubuntu** is released every **6 months** in **April** and **October**. LTS (Long Term Support) is a version that supports for 5 years. Non-LTS or normal versions supports for 9 months.

**Variants of Ubuntu:**

- **Ubuntu Server**
- **Ubuntu Desktop**
- **Ubuntu TV**
- **Ubuntu for Phones**
- **Kubuntu**
- **Xubuntu**

---

## Red Hat Enterprise Linux (RHEL)

- **Red Hat** introduced and launched for the first time in **1994**.
- It is one of the most popular and powerful **Linux distributions**.
- It is used both as a **desktop** and as a **server**.
- The code written in **Red Hat** is available for free, but to use it, you must purchase its support license!
- **IBM** bought RedHat in 2019.
- The supported desktops are **KDE** and **Gnome**.
- The **Red Hat** product was produced only from **1994 to 2004**.
- In **2004**, a new product called **Red Hat Enterprise Linux (RHEL)** was created, which has a complete kernel compared to the previous product.
- The company **Red Hat** also has another product called **Fedora**, which is completely free and available.

---

## Community Enterprise OS (CentOS)

- **CentOS** was introduced in **2004** by **Kurtzer Gregory**.
- It is based on the code of **Red Hat**.
- CentOS is a **rebuilt distribution**.
- CentOS was just a small community.
- It had excellent compatibility with **Red Hat** and all its updates.
- In **2014**, **Red Hat** officially became the sponsor and supporter of CentOS.
- On **December 8, 2020**, CentOS manager **Kurtzer Gregory** announced the end of this community.
- From that date onward, CentOS will no longer be a rebuild of **Red Hat**.
- **CentOS Stream** will replace **CentOS Linux** and will change its usage.
- A new Linux distribution introduced by **Kurtzer** called **Rocky Linux** will be available from **March 31, 2021**.

---

## OpenSuSE

- A **German company** introduced and launched the independent distribution **SuSE** in **2005**. (**Software und System Entwicklung**)
- Later, the company **Novell** acquired and supported the entire **OpenSuSE** project.
- It is one of the most comprehensive **Linux distributions**.
- It supports most Linux desktops.
- Migration from **KDE** to **Gnome** in the latest version.
- It has two versions: **Suse** and **OpenSuse**

---

## Directory Addressing vs Web Addressing

**Operating System Directory Addressing**

- Absolute Path: This is the complete path to a file or directory from the root of the file system. It starts with a / (on Unix-like systems) or a drive letter (on Windows).

Example: `/home/user/projects/react-app`

- Relative Path: This is the path relative to the current directory. It does not start with a / and can use . and .. to navigate. 

Example: If you are in `home/user/projects`, the relative path to `react-app` would be `react-app`.

**Web Addressing**

- Absolute Path: An absolute path (or absolute URL) provides the complete address to a resource on the web, including the protocol, domain name, and the specific path to the resource. It is independent of the current page or directory and can be used from any location. 

Example: `protocol://domain/path`

- Relative Path: A relative path provides a way to link to resources based on the current document's location. It does not include the domain name or protocol and is relative to the current page or directory. This makes it easier to manage links within a website, especially when moving files or deploying to different environments. 

Example:
```html
<img src="photo.jpg" alt="Example Photo"> or <img src="../images/photo.jpg" alt="Example Photo">
```

---

## Questions

##### Q 1: What is Unix, and what are two of its key features?

- A: Proprietary and multitasking; slow and resource-intensive
- B: Single-user and single-tasking; expensive and heavy
- C: Free and open-source; supports only specific hardware
- D: Multiuser and multitasking; lightweight and fast

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

Unix is a multiuser, multitasking operating system developed in the 1960s and 1970s, known for being lightweight and fast.

</details>

---

##### Q 2: Where and in which year was Unix first developed?

- A: University of California, 1965
- B: MIT, 1970
- C: Bell Labs, 1969
- D: IBM, 1973

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

Unix was developed at Bell Labs in 1969.

</details>

---

##### Q 3: What was the primary issue with Unix, and what was the solution?

- A: Security issues; implemented advanced encryption
- B: Slow performance; optimized with better hardware
- C: Limited hardware support; added universal drivers
- D: High cost ($20,000); development of free Unix-like systems like Linux and FreeBSD

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

The main problem with Unix was its high cost ($20,000). The solution was the development of free Unix-like systems like Linux and FreeBSD.

</details>

---

##### Q 4: What is FreeBSD, and what are three of its key features?

- A: A proprietary OS; lightweight, user-friendly, multitasking
- B: A free Unix-like OS; performance, advanced networking, security
- C: A Linux kernel-based OS; secure, fast, open-source
- D: A commercial OS; reliable, heavy, single-user

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

FreeBSD is a free, open-source Unix-like OS derived from BSD, known for its performance, advanced networking, and security.

</details>

---

##### Q 5: Which products incorporate FreeBSD?

- A: macOS, iOS, PlayStation, McAfee, Netflix
- B: Windows, Chrome OS, Android, Ubuntu
- C: Fedora, CentOS, Linux Mint, Debian
- D: SUSE, Red Hat, Zorin, Manjaro

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

FreeBSD is used in macOS, iOS, PlayStation, McAfee, and Netflix.

</details>

---

##### Q 6: What is Linux, and what are three of its key features?

- A: A commercial OS; heavy, user-friendly, multitasking
- B: A proprietary kernel; fast, secure, single-user
- C: A free, open-source kernel; supports various hardware, lightweight, server-friendly
- D: A Unix-based OS; expensive, reliable, slow

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

Linux is a free, open-source Unix-like kernel, featuring hardware support, lightweight design, and suitability for servers.

</details>

---

##### Q 7: Who created Linux, and in which year?

- A: Dennis Ritchie, 1992
- B: Richard Stallman, 1990
- C: Ken Thompson, 1989
- D: Linus Torvalds, 1991

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

Linux was created by Linus Torvalds in 1991.

</details>

---

##### Q 8: What is the Linux Kernel, and how many lines of code does it contain (as of 2020)?

- A: Core of OS, links hardware and software; over 26 million lines
- B: User interface layer; 10 million lines
- C: Software manager; 15 million lines
- D: Hardware driver; 20 million lines

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

The Linux Kernel is the core of the OS that communicates between hardware and software, with over 26 million lines of code as of 2020.

</details>

---

##### Q 9: What are four primary tasks of the Linux Kernel?

- A: Web browsing, network setup, security, multitasking
- B: GUI management, software installation, user authentication, file editing
- C: Process management, memory management, device drivers, system calls
- D: Database management, file sharing, printing, user interface

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

The Linux Kernel handles process management, memory management, device drivers, and system calls.

</details>

---

##### Q 10: What aspects of software do Free and Open Source refer to?

- A: Free: no cost; Open Source: restricted code access
- B: Free: freedom in code; Open Source: freedom in distribution
- C: Free: distribution rights; Open Source: user interface design
- D: Free: hardware access; Open Source: software installation

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

Free software refers to freedom in code, while Open Source refers to freedom in distribution.

</details>

---

##### Q 11: What is the opposite of Free software?

- A: Commercial software
- B: Open Source software
- C: Unix-based software
- D: Proprietary software

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

The opposite of Free software is proprietary software.

</details>

---

##### Q 12: What is software that is both Free and Open Source called?

- A: Free and Open Source Software (FOSS)
- B: GNU Software
- C: BSD Software
- D: OSI Software

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

Software that is both Free and Open Source is called FOSS.

</details>

---

##### Q 13: What are Linux distributions (distros), and what are three of their features?

- A: User interfaces; desktops, servers, web browsers
- B: Software applications; GUI, CLI, security features
- C: Hardware drivers; speed, reliability, multitasking
- D: Variants of Linux OS; include kernel, vary in packages, installation methods

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

Linux distributions (distros) are variants of the Linux OS, featuring the Linux kernel, different packages, and unique installation methods.

</details>

---

##### Q 14: Which website provides information on Linux distributions?

- A: linux.org
- B: distrowatch.com
- C: ubuntu.com
- D: redhat.com

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

Linux distributions (distros) can be checked on distrowatch.com.

</details>

---

##### Q 15: What terms does Linux use instead of folder and software?

- A: Directory, package
- B: Folder, application
- C: Path, program
- D: File, executable

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

In Linux, folder is called a directory, and software is called a package.

</details>

---

##### Q 16: What are the three main Linux distro families, their installer file extensions, package managers, and an example for each?

- A: Debian (.deb, YUM, Zorin), Red Hat (.rpm, pacman, Fedora), Arch (.arch, apt, EndeavourOS)
- B: Debian (.rpm, YUM/DNF, Mint), Red Hat (.deb, apt, CentOS), Arch (.arch, pacman, Zorin)
- C: Debian (.arch, pacman, Ubuntu), Red Hat (.deb, apt/dpkg, SUSE), Arch (.rpm, YUM, Arch Linux)
- D: Debian (.deb, apt/dpkg, Ubuntu), Red Hat (.rpm, YUM/DNF, Fedora), Arch (.arch, pacman, Manjaro)

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

The three main Linux distro families are:

- Debian: .deb extension, apt/dpkg package managers, e.g., Ubuntu
- Red Hat: .rpm extension, YUM/DNF/RPM package managers, e.g., Fedora
- Arch: .arch extension, pacman package manager, e.g., Manjaro

</details>

---

##### Q 17: What command is used to check the version and type of a Linux operating system?

- A: dnf list installed
- B: echo $XDG_CURRENT_DESKTOP
- C: cat /etc/shells
- D: lsb_release -a

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

The command to check the version and type of a Linux OS is `lsb_release -a`.

</details>

---

##### Q 18: What are the two main categories of user interface (UI) in Linux?

- A: Graphical User Interface (GUI) and Application Interface
- B: Command-Line Interface (CLI) and Application Programming Interface (API)
- C: Command-Line Interface (CLI) and Graphical User Interface (GUI)
- D: CLI, GUI, and System Interface

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

Linux UI is divided into Command-Line Interface (CLI) and Graphical User Interface (GUI).

</details>

---

##### Q 19: What is a key advantage of Linux over Windows regarding its GUI?

- A: Ability to install multiple customizable desktop environments
- B: Single, non-customizable desktop environment
- C: No graphical interface support
- D: Limited desktop customization options

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

Linux’s advantage over Windows in GUI is the ability to install multiple customizable desktop environments.

</details>

---

##### Q 20: Which are popular Linux GUI desktop environments?

- A: CLI, GUI, API
- B: Windows, macOS, Linux Mint
- C: Gnome, KDE, XFCE
- D: Firefox, Chrome, GIMP

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

Common Linux GUI desktop environments include Gnome, KDE, and XFCE.

</details>

---

##### Q 21: What do GUI actions in Linux get converted to before reaching the kernel?

- A: CLI commands
- B: API calls
- C: Hardware signals
- D: Software packages

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

GUI actions in Linux are converted to CLI commands before reaching the kernel.

</details>

---

##### Q 22: What is the Command-Line Interface (CLI) in Linux?

- A: A system for installing software packages
- B: A graphical interface for user interaction
- C: A tool for managing hardware drivers
- D: A text-based interface for entering commands

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

CLI is a text-based interface in Linux for entering commands.

</details>

---

##### Q 23: What commands are used to check the current CLI, all available CLIs, and desktop environment in Linux?

- A: `lsb_release -a`, `apt list --installed`, `dnf list installed`
- B: `echo $SHELL`, `cat /etc/shells`, `echo $XDG_CURRENT_DESKTOP`
- C: `echo $CLI`, `cat /etc/cli`, `echo $DESKTOP`
- D: `pacman -Q`, `rpm -qa`, `dpkg --get-selections`

<details>
  <summary><b>Answer</b></summary>

#### Answer: B

The commands are:
- Current CLI: `echo $SHELL`
- All CLIs: `cat /etc/shells`
- Desktop type: `echo $XDG_CURRENT_DESKTOP`

</details>

---

##### Q 24: Which commands are used to list installed packages on Debian, Red Hat, and Arch Linux?

- A: Debian: lsb_release -a; Red Hat: cat /etc/shells; Arch: echo $SHELL
- B: Debian: pacman -Q; Red Hat: apt list --installed; Arch: rpm -qa
- C: Debian: dnf list installed; Red Hat: pacman -Q; Arch: apt list --installed
- D: Debian: apt list --installed/dpkg --get-selections; Red Hat: rpm -qa/dnf list installed; Arch: pacman -Q

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

Commands to list installed packages:
- Debian: `apt list --installed` or `dpkg --get-selections`
- Red Hat: `rpm -qa` or `dnf list installed`
- Arch: `pacman -Q`

</details>

---

##### Q 25: What is Ubuntu?

- A: A Unix-based OS for mobile devices only
- B: A proprietary OS based on Red Hat
- C: A commercial Linux distro for servers
- D: A free Linux distribution based on Debian

<details>
  <summary><b>Answer</b></summary>

#### Answer: D

Ubuntu is a free Linux distribution based on Debian, used for desktops and servers.

</details>

---

##### Q 26: What is Red Hat?

- A: A commercial Linux distribution for desktops and servers
- B: A free Linux distro for desktops only
- C: A proprietary Unix-based OS
- D: An open-source kernel for mobile devices

<details>
  <summary><b>Answer</b></summary>

#### Answer: A

Red Hat is a commercial Linux distribution used for desktops and servers, with a free code base but paid support.

</details>

---

##### Q 27: What is CentOS?

- A: A free Unix-based operating system
- B: A proprietary OS based on Ubuntu
- C: A rebuilt Linux distribution based on Red Hat
- D: A commercial kernel for servers

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

CentOS is a rebuilt Linux distribution based on Red Hat, introduced in 2004.

</details>

---

##### Q 28: What is OpenSuSE?

- A: A commercial Unix-based operating system
- B: A proprietary OS by IBM
- C: A free Linux distribution by a German company
- D: A mobile OS based on Linux

<details>
  <summary><b>Answer</b></summary>

#### Answer: C

OpenSuSE is a free Linux distribution introduced by a German company, supporting multiple desktops.

</details>

