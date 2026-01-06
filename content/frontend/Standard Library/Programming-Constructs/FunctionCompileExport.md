# FunctionCompileExport

`FunctionCompileExport["file.ext", fspec]` exports a compiled version of functions fspec in the format specified by the file extension ext.

- `FunctionCompileExport[path, defs, fspec]` exports using local auxiliary definitions defs.
- `FunctionCompileExport[path, fspec, "format"]` exports in the specified format.

## Examples

Export a compiled function as LLVM IR:

```wolfram
f = Function[{Typed[x, "Real64"]}, x^2];
FunctionCompileExport["func.ll", f]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionCompileExport.html) for more details.*