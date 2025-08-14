# Linux 

---

## Operating System Directory Addressing

- Absolute Path: This is the complete path to a file or directory from the root of the 
file system. It starts with a / (on Unix-like systems) or a drive letter (on Windows).
Example: /home/user/projects/react-app

- Relative Path: This is the path relative to the current directory. It does not start 
with a / and can use . and .. to navigate. Example: If you are in /home/user/projects, 
the relative path to react-app would be react-app.

## Web Addressing

- Absolute Path: An absolute path (or absolute URL) provides the complete address to a 
resource on the web, including the protocol, domain name, and the specific path to the 
resource. It is independent of the current page or directory and can be used from any 
location. Example: protocol://domain/path

- Relative Path: A relative path provides a way to link to resources based on the 
current document's location. It does not include the domain name or protocol and is 
relative to the current page or directory. This makes it easier to manage links within 
a website, especially when moving files or deploying to different environments. Example:
<img src="photo.jpg" alt="Example Photo"> or <img src="../images/photo.jpg" alt="Example Photo">