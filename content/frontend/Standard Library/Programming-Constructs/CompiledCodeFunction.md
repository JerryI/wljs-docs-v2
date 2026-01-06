---
title: CompiledCodeFunction
---

`CompiledCodeFunction[...]` is a function created by `FunctionCompile` that contains compiled code that is run when the CompiledCodeFunction is applied to suitable arguments.

## Examples

Create a compiled code function:

```wolfram
cf = FunctionCompile[Function[{Typed[x, "Real64"]}, x^2]];
cf[3.0]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CompiledCodeFunction.html) for more details.*