# FunctionCompileExportString

`FunctionCompileExportString[fspec]` gives a string of textual LLVM code obtained by compiling the function specification fspec.

- `FunctionCompileExportString[defs, fspec]` uses the auxiliary definitions defs for compilation.
- `FunctionCompileExportString[fspec, "format"]` gives a string in the specified format.

## Examples

Get LLVM IR as a string:

```wolfram
f = Function[{Typed[x, "Real64"]}, x + 1];
FunctionCompileExportString[f]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionCompileExportString.html) for more details.*