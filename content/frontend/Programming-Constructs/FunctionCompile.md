---
title: FunctionCompile
---

`FunctionCompile[f]` generates a compiled code function from a pure function.

- `FunctionCompile[{f1, f2, ...}]` generates a list of compiled code functions.
- `FunctionCompile[<|k1 -> f1, k2 -> f2, ...|>]` generates an association of compiled code functions.
- `FunctionCompile[defs, fspec]` uses local auxiliary definitions defs.

## Examples

Compile a simple function:

```wolfram
cf = FunctionCompile[Function[{Typed[x, "Real64"]}, x^2 + 1]]
```

Use the compiled function:

```wolfram
cf[3.0]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionCompile.html) for more details.*