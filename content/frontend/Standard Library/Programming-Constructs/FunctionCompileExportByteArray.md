---
title: FunctionCompileExportByteArray
---

`FunctionCompileExportByteArray[fspec]` gives a byte array of binary LLVM code obtained by compiling the function specification fspec.

- `FunctionCompileExportByteArray[defs, fspec]` uses the auxiliary definitions defs for compilation.
- `FunctionCompileExportByteArray[fspec, "format"]` gives a byte array in the specified format.

## Examples

Get compiled code as a byte array:

```wolfram
f = Function[{Typed[x, "Real64"]}, Sin[x]];
FunctionCompileExportByteArray[f]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionCompileExportByteArray.html) for more details.*