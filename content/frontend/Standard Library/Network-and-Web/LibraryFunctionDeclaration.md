---
title: LibraryFunctionDeclaration
---

`LibraryFunctionDeclaration["extName", lib, type]` represents a function declaration that exposes the library function *extName* with the type *type* from the library *lib*, for use in compiled code.

- `LibraryFunctionDeclaration[name -> "extName", lib, type]` aliases the function with *name* in compiled code.
- `LibraryFunctionDeclaration[nameSpec, type]` assumes that the library will be loaded by the time the function is compiled.

## Examples

```wolfram
LibraryFunctionDeclaration["sqrt", "libm", {Real64} -> Real64]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LibraryFunctionDeclaration.html) for more details.*