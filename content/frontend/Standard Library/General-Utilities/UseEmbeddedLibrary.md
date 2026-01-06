---
title: UseEmbeddedLibrary
---

`UseEmbeddedLibrary` is an option of `FunctionCompile` that embeds a shared library in a CompiledCodeFunction.

## Examples

Compile with embedded library:
```wolfram
FunctionCompile[myFunc, UseEmbeddedLibrary -> True]
```

Create a portable compiled function:
```wolfram
cf = FunctionCompile[func, UseEmbeddedLibrary -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UseEmbeddedLibrary.html) for more details.*