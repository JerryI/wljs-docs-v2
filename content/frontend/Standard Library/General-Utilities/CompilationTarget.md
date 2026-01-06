---
title: CompilationTarget
---

`CompilationTarget` is an option for `Compile` that specifies the target runtime for the compiled function.

## Examples

Compile to C:

```wolfram
Compile[{x}, x^2, CompilationTarget -> "C"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CompilationTarget.html) for more details.*