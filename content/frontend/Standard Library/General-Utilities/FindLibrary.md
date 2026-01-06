---
title: FindLibrary
---

`FindLibrary[lib]` finds a dynamic library that can be loaded by LibraryFunctionLoad.

## Examples

Find a library by name:

```wolfram
FindLibrary["demo"]
```

Check if a library exists:

```wolfram
FindLibrary["mylib"] =!= $Failed
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindLibrary.html) for more details.*