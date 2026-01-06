---
title: FunctionCompileExportLibrary
---

`FunctionCompileExportLibrary[file, fspec]` exports a compiled version of function specification fspec as a shared library suitable for external use.

- `FunctionCompileExportLibrary[file, defs, fspec]` uses the auxiliary definitions defs for compilation.

## Examples

Export a compiled function as a shared library:

```wolfram
f = Function[{Typed[x, "Real64"]}, x^2 + 1];
FunctionCompileExportLibrary["mylib.dylib", f]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionCompileExportLibrary.html) for more details.*