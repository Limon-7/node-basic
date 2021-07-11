#### Global Object

- \_\_dirname - path to the current directroy
- \_\_filename - file name
- require - function to use modules(CommonJS)
- module - info about current module (file)
- process - info about env where the program is bering executed.

1. ##### module:

   1. ##### OS module:
      The os module provides operating system-related utility methods and properties. It can be accessed using:
      `const os=require('os')`
   2. ##### path module:

      The path module provides utilities for working with file and directory paths.It can be accessed using:
      `const path=require('path')`

      - path.join([path...]): The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
      - path.basename(path): The path.basename() method returns the last portion of a path,
      - path.resolve([paths...]): The path.resolve() method resolves a sequence of paths or path segments into an absolute path.

   3. ###### filesystem module:
