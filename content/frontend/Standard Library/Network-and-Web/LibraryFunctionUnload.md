---
title: LibraryFunctionUnload
---

`LibraryFunctionUnload[fun]` unloads a LibraryFunction so that it cannot be used.

## Examples

Unload a library function:
```wolfram
LibraryFunctionUnload[myLibraryFunction]
```

Free up resources:
```wolfram
fun = LibraryFunctionLoad["mylib", "myfunc", {}, Integer];
LibraryFunctionUnload[fun]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LibraryFunctionUnload.html) for more details.*