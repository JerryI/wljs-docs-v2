# CompilationOptions

`CompilationOptions` is an option for `Compile` that specifies settings for the compilation process.

## Examples

Set compilation options:

```wolfram
Compile[{x}, x^2, CompilationOptions -> {"InlineCompiledFunctions" -> True}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CompilationOptions.html) for more details.*