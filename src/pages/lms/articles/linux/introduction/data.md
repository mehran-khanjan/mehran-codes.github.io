# Linux Introduction 

---

## Unix

**Unix** is a powerful, multiuser, multitasking operating system originally developed
in the 1960s and 1970s at **Bell Labs**, a research and development subsidiary of **AT&T**.
It was created by **Ken Thompson**, **Dennis Ritchie** (created C programming language),
and others, and has since become a foundational technology for many modern
operating systems.

**Unix** was a very lightweight, fast operating system, but at that time, it was **expensive** and **not accessible to everyone**. Various operating systems were developed based on **Unix**, such as **Linux** and **FreeBSD**.

---

## FreeBSD

**FreeBSD** is a free and open-source Unix-like operating system derived from the **Berkeley Software Distribution (BSD)**, which was originally developed at the University of California, Berkeley. It is known for its performance, advanced networking features, security, and reliability. This FreeBSD was later used by **macOS**, **iOS**, **PlayStation**, **McAfee**, and **Netflix**.

---

## Linux

**Linux** is a free and open-source **operating system kernel** that serves as the foundation for a wide variety of operating systems, collectively known as **Linux distributions** (distros). It was created by **Linus Torvalds** in 1991 and has since grown into one of the most widely used operating systems in the world. The name of Linux comes from Linus + Unix = Linux. Linux was later used by **Red Hat**, **Ubuntu**, **Debian**, **Android**, **CentOS**, **SUSE**, and **Fedora**.

**Features:**
- Unlike other operating systems, Linux is completely free and open-source.
- It has the capability to support various hardware.
- It is lightweight and suitable for servers.

---

## Linux Kernel

- The core of all operating systems based on **Unix** is the **Kernel**.
- The kernel essentially serves as the communication layer between the operating system and the hardware.
- Communication with hardware drivers occurs through the kernel.
- As of 2020, there are over 26 million lines of code in the Linux kernel.

**Kernel's relations with other parts:**

- **Hardware:** This is the physical layer, including the CPU, memory, and devices.
- **Kernel:** The kernel acts as the core component that manages communication between
  the hardware and software applications. (Kernel is a part of the OS)
- **Applications:** These are the software programs that users interact with, which rely
  on the kernel to access hardware resources.
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

- **Free** Software provides **freedom in the software code**, while **Open Source** provides
  **freedom in software distribution**.
- Software that is both Open and Free is referred to as **Free and Open Source Software (FOSS)**.
- The most famous software in the FOSS family is the **Linux operating system**.
- Other examples include the **FreeBSD** operating system and software like **Gnome**, **GIMP**,
  **LibreOffice**, etc.

---

## Linux Distribution

All Linux distributions include the Kernel of the Linux operating system. Different distributions vary in the types of software (Packages), their installation methods, and the features of that distribution from the Linux operating system. To check different distributions of Linux, use this [website](https://distrowatch.com)

**Note:** If you were a Windows user before, it's important to understand that in Linux, we refer to **directories** instead of **folders**, and we use the term **packages** instead of **software**.

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

In Linux, you can install different **desktops**. Some of the most popular Linux desktops include **Gnome**, **KDE**, **XFCE**, and more. **Gnome** offers a more user-friendly environment with the slogan **"Stupid Simple It Keeps"**. **KDE** provides a more professional, complex environment with a wider range of software. Ubuntu and CentOS come with Gnome by default. **Kubuntu** is essentially Ubuntu with the KDE desktop. SUSE and many other distributions use KDE.

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

- **Office Applications:** Apache OpenOffice, LibreOffice, etc. WPS Office like Microsoft Office but it is Open source.
- **Web Browsers:** Mozilla Firefox, Google Chrome, etc.
- **Multimedia:** GIMP, Blender, Inkscape, Audacity, VLC, etc.
- **Server Programs:**
  - **HTTP Server:** Apache, Nginx, lighttpd, etc.
  - **Databases:** MariaDB, MySQLite, PostgreSQL, etc.
  - **Data Sharing:** Samba Server, NFS, etc.
- **Programming Languages:** C, Java, Perl, Shell, Python, PHP, etc support by default in Linux.

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

LTS = Long Term Support = to support in 4 years
normal versions = 6 months to 1 year

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

- A **German company** introduced and launched the independent distribution **SuSE** in **2005**. (**Software-und System-Entwicklung**)
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